export const company = {
	brand: 'DüzlemSa Harita',
	legalName: 'DuzlemSa',
	tagline: 'Doğru Ölçüm. Güvenilir Zemin. Net Sonuç.',
	shortDescription:
		'Gaziantep merkezli DüzlemSa Harita; parsel, kadastro, imar ve şantiye süreçlerinde doğru ölçüm ve güvenilir mühendislik yaklaşımıyla hizmet verir.',
	founder: {
		name: 'Süleyman Alperen Hançerkıran',
		role: 'Kurucu · DüzlemSa Harita',
		monogram: 'SAH',
		message:
			'Her arazinin, her yapının ve her teknik sürecin kendine özgü koşulları bulunur. DüzlemSa Harita’da amacımız yalnızca ölçüm yapmak değil; ihtiyacı doğru anlamak, uygun yöntemi belirlemek ve sonraki proje aşamalarında güvenle kullanılabilecek sonuçlar üretmektir.',
	},
	contact: {
		phoneDisplay: '+90 538 875 19 98',
		phoneUri: 'tel:+905388751998',
		whatsappUri: 'https://wa.me/905388751998',
		whatsappMessage: 'Merhaba DüzlemSa Harita, bir proje hakkında bilgi almak istiyorum.',
		get whatsappUriWithMessage() {
			return `${this.whatsappUri}?text=${encodeURIComponent(this.whatsappMessage)}`;
		},
		email: 'duzlemsaharita@gmail.com',
	},
	address: {
		line1: 'Değirmiçem Mah. Sabahat Göğüş Cad.',
		line2: 'Anadolu İş Merkezi No: 23/23',
		line3: 'Şehitkamil / Gaziantep',
		full: 'Değirmiçem Mah. Sabahat Göğüş Cad. Anadolu İş Merkezi No: 23/23, Şehitkamil / Gaziantep',
		district: 'Şehitkamil',
		city: 'Gaziantep',
		country: 'Türkiye',
		mapsSearchUrl:
			'https://www.google.com/maps/search/?api=1&query=' +
			encodeURIComponent('Değirmiçem Mah. Sabahat Göğüş Cad. Anadolu İş Merkezi No: 23/23 Şehitkamil Gaziantep'),
	},
	center: 'Şehitkamil / Gaziantep',
	experience: '4 Yıl',
	serviceArea: 'Gaziantep merkezli, proje kapsamına göre bölgesel hizmet',
	domain: 'https://duzlemsaharita.com',
	solutionNetwork: [
		{ label: 'Harita Mühendisliği Uzmanlığı' },
		{ label: 'Deneyimli Saha Ekipleri' },
		{ label: 'Mimari Çözüm Ortakları' },
		{ label: 'Hukuki Danışmanlık Ağı' },
	],
	coreValues: [
		{ title: 'Teknik Doğruluk', desc: 'Ölçüm ve hesaplarda güncel yöntem ve kontrollü süreç.' },
		{ title: 'Şeffaflık', desc: 'Kapsam ve süreç hakkında açık bilgilendirme.' },
		{ title: 'Sorumluluk', desc: 'Teslim edilen her çıktının arkasında durma.' },
		{ title: 'Kullanılabilir Sonuç', desc: 'Bir sonraki proje adımında doğrudan kullanılabilecek çıktılar.' },
		{ title: 'Disiplinler Arası İş Birliği', desc: 'Mimari ve hukuki çözüm ortaklarıyla koordinasyon.' },
		{ title: 'Sürekli Gelişim', desc: 'Güncel ekipman ve yöntemleri takip etme.' },
	],
	nav: [
		{ label: 'Ana Sayfa', href: '/' },
		{ label: 'Hizmetler', href: '/hizmetler' },
		{ label: 'Projeler', href: '/projeler' },
		{ label: 'Kurumsal', href: '/kurumsal' },
		{ label: 'Teknoloji', href: '/teknoloji' },
		{ label: 'SSS', href: '/sss' },
		{ label: 'İletişim', href: '/iletisim' },
	],
	footerNav: [
		{ label: 'Kurumsal', href: '/kurumsal' },
		{ label: 'Hizmetler', href: '/hizmetler' },
		{ label: 'Projeler', href: '/projeler' },
		{ label: 'Teknoloji', href: '/teknoloji' },
		{ label: 'Bilgi Merkezi', href: '/bilgi-merkezi' },
		{ label: 'SSS', href: '/sss' },
		{ label: 'İletişim', href: '/iletisim' },
	],
} as const;
