import { company } from '../data/company';

export function organizationSchema() {
	return {
		'@context': 'https://schema.org',
		'@type': 'ProfessionalService',
		name: company.brand,
		legalName: company.legalName,
		url: company.domain,
		telephone: company.contact.phoneDisplay,
		email: company.contact.email,
		address: {
			'@type': 'PostalAddress',
			streetAddress: `${company.address.line1} ${company.address.line2}`,
			addressLocality: company.address.district,
			addressRegion: company.address.city,
			addressCountry: 'TR',
		},
		areaServed: 'Gaziantep',
	};
}

export function breadcrumbSchema(items: { label: string; href?: string }[]) {
	return {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: items.map((item, i) => ({
			'@type': 'ListItem',
			position: i + 1,
			name: item.label,
			...(item.href ? { item: new URL(item.href, company.domain).toString() } : {}),
		})),
	};
}

export function faqPageSchema(faqs: { q: string; a: string }[]) {
	return {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: faqs.map((f) => ({
			'@type': 'Question',
			name: f.q,
			acceptedAnswer: { '@type': 'Answer', text: f.a },
		})),
	};
}

export function aboutPageSchema() {
	return {
		'@context': 'https://schema.org',
		'@type': 'AboutPage',
		name: `Kurumsal | ${company.brand}`,
		url: `${company.domain}/kurumsal`,
		about: organizationSchema(),
	};
}

export function contactPageSchema() {
	return {
		'@context': 'https://schema.org',
		'@type': 'ContactPage',
		name: `İletişim | ${company.brand}`,
		url: `${company.domain}/iletisim`,
	};
}

export function articleSchema(article: {
	title: string;
	description: string;
	slug: string;
	publishedAt: Date;
	updatedAt?: Date;
}) {
	return {
		'@context': 'https://schema.org',
		'@type': 'Article',
		headline: article.title,
		description: article.description,
		url: `${company.domain}/bilgi-merkezi/${article.slug}`,
		datePublished: article.publishedAt.toISOString(),
		dateModified: (article.updatedAt ?? article.publishedAt).toISOString(),
		author: {
			'@type': 'Organization',
			name: company.brand,
		},
		publisher: {
			'@type': 'Organization',
			name: company.brand,
		},
	};
}
