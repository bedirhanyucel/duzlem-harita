/**
 * Cloudflare Pages Function — POST /api/contact
 *
 * Statik Astro sitesinin tek sunucu taraflı endpoint'i. Bu dosya Astro'nun
 * dışında, doğrudan Cloudflare Pages Functions runtime'ında çalışır.
 * Bkz. docs/CONTACT_FORM_SETUP.md
 */

interface Env {
	TURNSTILE_SECRET_KEY?: string;
	RESEND_API_KEY?: string;
	CONTACT_TO_EMAIL?: string;
	CONTACT_FROM_EMAIL?: string;
}

const DEFAULT_TO_EMAIL = 'duzlemsaharita@gmail.com';
const DEFAULT_FROM_EMAIL = 'DüzlemSa Harita Web Sitesi <onboarding@resend.dev>';

const MAX_LENGTHS: Record<string, number> = {
	name: 120,
	phone: 30,
	email: 160,
	company: 160,
	service: 160,
	location: 200,
	ada: 60,
	parsel: 60,
	message: 4000,
	contactPreference: 40,
};

const REQUIRED_FIELDS = ['name', 'phone', 'email', 'service', 'location', 'message', 'kvkk'];

// Best-effort, non-durable in-memory rate limiting (resets per isolate).
// Turnstile is the primary bot/abuse defense; this is a lightweight secondary guard only.
const submissionLog = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;

function isRateLimited(ip: string): boolean {
	const now = Date.now();
	const timestamps = (submissionLog.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
	timestamps.push(now);
	submissionLog.set(ip, timestamps);
	return timestamps.length > RATE_LIMIT_MAX;
}

function escapeHtml(value: string): string {
	return value
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#39;');
}

function jsonResponse(body: unknown, status = 200): Response {
	return new Response(JSON.stringify(body), {
		status,
		headers: { 'content-type': 'application/json; charset=utf-8' },
	});
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[0-9+()\s-]{7,20}$/;

async function parseBody(request: Request): Promise<Record<string, string>> {
	const contentType = request.headers.get('content-type') ?? '';
	if (contentType.includes('application/json')) {
		const data = await request.json<Record<string, unknown>>();
		return Object.fromEntries(
			Object.entries(data).map(([k, v]) => [k, typeof v === 'string' ? v : String(v ?? '')]),
		);
	}
	if (contentType.includes('application/x-www-form-urlencoded') || contentType.includes('multipart/form-data')) {
		const form = await request.formData();
		const out: Record<string, string> = {};
		for (const [k, v] of form.entries()) out[k] = typeof v === 'string' ? v : '';
		return out;
	}
	throw new Error('unsupported-content-type');
}

async function verifyTurnstile(token: string, secret: string, ip: string): Promise<boolean> {
	try {
		const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
			method: 'POST',
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify({ secret, response: token, remoteip: ip }),
		});
		const result = await res.json<{ success: boolean }>();
		return result.success === true;
	} catch {
		return false;
	}
}

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
	const ip = request.headers.get('cf-connecting-ip') ?? 'unknown';
	const isFormPost = (request.headers.get('content-type') ?? '').includes('form');

	const fail = (status: number, message: string) => {
		if (isFormPost) {
			return Response.redirect(new URL('/teklif-al?submitted=0', request.url).toString(), 303);
		}
		return jsonResponse({ ok: false, error: message }, status);
	};

	if (isRateLimited(ip)) {
		return fail(429, 'Çok fazla deneme yapıldı. Lütfen daha sonra tekrar deneyin.');
	}

	let fields: Record<string, string>;
	try {
		fields = await parseBody(request);
	} catch {
		return fail(400, 'Geçersiz istek biçimi.');
	}

	// Honeypot: bots tend to fill every field, including hidden ones.
	if (fields.website) {
		// Silently pretend success so bots don't learn the trap worked.
		return isFormPost
			? Response.redirect(new URL('/teklif-al?submitted=1', request.url).toString(), 303)
			: jsonResponse({ ok: true });
	}

	for (const field of REQUIRED_FIELDS) {
		if (!fields[field] || !fields[field].toString().trim()) {
			return fail(400, `Eksik alan: ${field}`);
		}
	}

	if (fields.kvkk !== 'on' && fields.kvkk !== 'true') {
		return fail(400, 'KVKK aydınlatma metni onayı gereklidir.');
	}

	if (!EMAIL_RE.test(fields.email)) {
		return fail(400, 'Geçersiz e-posta adresi.');
	}

	if (!PHONE_RE.test(fields.phone)) {
		return fail(400, 'Geçersiz telefon numarası.');
	}

	for (const [key, max] of Object.entries(MAX_LENGTHS)) {
		if (fields[key] && fields[key].length > max) {
			return fail(400, `Alan çok uzun: ${key}`);
		}
	}

	if (fields.message.trim().length < 10) {
		return fail(400, 'Talep açıklaması çok kısa.');
	}

	if (env.TURNSTILE_SECRET_KEY) {
		const token = fields['cf-turnstile-response'];
		const verified = token ? await verifyTurnstile(token, env.TURNSTILE_SECRET_KEY, ip) : false;
		if (!verified) {
			return fail(400, 'Doğrulama başarısız oldu. Lütfen tekrar deneyin.');
		}
	} else {
		// No Turnstile configured: the public form is kept disabled client-side for this
		// exact reason. Reject server-side too, in case of a direct API call.
		return fail(503, 'Form şu anda çevrimdışı. Lütfen telefon veya WhatsApp ile iletişime geçin.');
	}

	if (!env.RESEND_API_KEY) {
		return fail(503, 'E-posta gönderim altyapısı yapılandırılmadı. Lütfen telefon veya WhatsApp ile iletişime geçin.');
	}

	const toEmail = env.CONTACT_TO_EMAIL || DEFAULT_TO_EMAIL;
	const fromEmail = env.CONTACT_FROM_EMAIL || DEFAULT_FROM_EMAIL;
	const now = new Date().toLocaleString('tr-TR', { timeZone: 'Europe/Istanbul' });

	const rows: [string, string][] = [
		['Tarih', now],
		['Ad Soyad', fields.name],
		['Telefon', fields.phone],
		['E-posta', fields.email],
		['Şirket / Kurum', fields.company || '—'],
		['Hizmet Türü', fields.service],
		['Proje Konumu', fields.location],
		['Ada', fields.ada || '—'],
		['Parsel', fields.parsel || '—'],
		['İletişim Tercihi', fields.contactPreference || '—'],
		['Açıklama', fields.message],
	];

	const htmlBody = `
		<h2>Yeni Teklif Talebi — DüzlemSa Harita</h2>
		<table cellpadding="6" style="border-collapse:collapse">
			${rows
				.map(
					([label, value]) =>
						`<tr><td style="font-weight:bold;vertical-align:top">${escapeHtml(label)}</td><td>${escapeHtml(value).replace(/\n/g, '<br>')}</td></tr>`,
				)
				.join('')}
		</table>
	`;

	try {
		const emailRes = await fetch('https://api.resend.com/emails', {
			method: 'POST',
			headers: {
				authorization: `Bearer ${env.RESEND_API_KEY}`,
				'content-type': 'application/json',
			},
			body: JSON.stringify({
				from: fromEmail,
				to: [toEmail],
				reply_to: fields.email,
				subject: `Yeni Teklif Talebi — ${fields.name}`,
				html: htmlBody,
			}),
		});

		if (!emailRes.ok) {
			return fail(502, 'E-posta gönderilemedi. Lütfen telefon veya WhatsApp ile iletişime geçin.');
		}
	} catch {
		return fail(502, 'E-posta gönderilemedi. Lütfen telefon veya WhatsApp ile iletişime geçin.');
	}

	if (isFormPost) {
		return Response.redirect(new URL('/teklif-al?submitted=1', request.url).toString(), 303);
	}
	return jsonResponse({ ok: true });
};

export const onRequestGet: PagesFunction = async () => jsonResponse({ ok: false, error: 'method-not-allowed' }, 405);
