export interface FaqCategory {
	id: string;
	title: string;
}

export interface FaqItem {
	id: string;
	category: string;
	q: string;
	a: string;
	homepage?: boolean;
}

export const faqCategories: FaqCategory[] = [
	{ id: 'parsel-kadastro', title: 'Parsel ve Kadastro' },
	{ id: 'insaat-santiye', title: 'İnşaat ve Şantiye' },
	{ id: 'imar', title: 'İmar İşlemleri' },
	{ id: 'teklif-surec', title: 'Teklif ve Çalışma Süreci' },
	{ id: 'teslim-ciktilar', title: 'Teslim ve Teknik Çıktılar' },
];

export const faqItems: FaqItem[] = [
	{
		id: 'parsel-sinir-bilgi',
		category: 'parsel-kadastro',
		q: 'Parsel sınır tespiti için hangi bilgiler gerekir?',
		a: 'İl, ilçe, mahalle, ada ve parsel bilgisi ile tapu kaydı yeterlidir. Varsa önceki ölçüm veya kadastro paftası süreci hızlandırır.',
		homepage: true,
	},
	{
		id: 'aplikasyon-yer-gosterme',
		category: 'parsel-kadastro',
		q: 'Aplikasyon ile yer gösterme aynı şey midir?',
		a: 'Aplikasyon, koordinatı belli bir noktanın sahada işaretlenmesidir; yer gösterme ise genellikle parselin veya sınırın sahada görsel olarak gösterilmesini ifade eder. Uygulamada birbirini tamamlayan işlemlerdir.',
	},
	{
		id: 'cins-degisikligi',
		category: 'parsel-kadastro',
		q: 'Cins değişikliği süreci nasıl ilerler?',
		a: 'Arazinin fiili kullanımına uygun teknik rapor hazırlanır ve ilgili kadastro müdürlüğü sürecine sunulur; nihai işlem kurum değerlendirmesine tabidir.',
	},
	{
		id: 'plankote-ne-zaman',
		category: 'insaat-santiye',
		q: 'Plankote hangi projelerde kullanılır?',
		a: 'Yapı projelendirme, ruhsat başvurusu ve uygulama projesi öncesinde arazinin mevcut kot ve detaylarını göstermek için kullanılır.',
		homepage: true,
	},
	{
		id: 'santiye-olcum-zamani',
		category: 'insaat-santiye',
		q: 'Şantiye ölçümleri ne zaman yapılır?',
		a: 'Temel kazısı öncesi aplikasyonla başlar; inşaat ilerledikçe kot ve konum kontrolleri periyodik olarak tekrarlanır, tamamlanan imalatlarda as-built ölçüm yapılır.',
	},
	{
		id: 'kubaj-neden',
		category: 'insaat-santiye',
		q: 'Kübaj hesabı neden gerekir?',
		a: 'Bir alandaki kazı ve dolgu miktarlarını sayısal olarak ortaya koyarak maliyet ve iş programı planlamasına teknik veri sağlar.',
	},
	{
		id: 'ifraz-tevhit-fark',
		category: 'imar',
		q: 'İfraz ve tevhit arasındaki fark nedir?',
		a: 'İfraz, bir parselin birden fazla parçaya ayrılmasıdır; tevhit ise birden fazla parselin tek parselde birleştirilmesidir. Her ikisi de imar mevzuatına uygun teknik dosya ile yürütülür.',
		homepage: true,
	},
	{
		id: 'kurum-onayi-sureci',
		category: 'imar',
		q: 'Kurum onayı gerektiren işlemler nasıl ilerler?',
		a: 'Teknik dosya hazırlanıp ilgili belediye veya kadastro müdürlüğüne sunulur. Süreç ve nihai karar kurum değerlendirmesine tabidir; DüzlemSa Harita bu aşamada teknik dosya ve koordinasyon desteği sağlar.',
	},
	{
		id: 'imar-onay-garanti',
		category: 'imar',
		q: 'İmar uygulamalarında onay garantisi veriyor musunuz?',
		a: 'Hayır. Nihai onay ilgili kurumun değerlendirmesine tabidir; biz teknik dosya hazırlığı ve süreç koordinasyonunda destek sağlarız.',
	},
	{
		id: 'teklif-bilgiler',
		category: 'teklif-surec',
		q: 'Teklif hazırlamak için hangi bilgiler istenir?',
		a: 'Proje konumu veya ada-parsel bilgisi, hizmet türü ve kısa bir talep açıklaması yeterlidir. Gerekirse ek belgeler ilk görüşme sonrasında istenir.',
		homepage: true,
	},
	{
		id: 'islem-suresi',
		category: 'teklif-surec',
		q: 'İşlem süresi neye göre değişir?',
		a: 'Parselin büyüklüğü, arazi koşulları, kurum süreçleri ve talep edilen kapsam süreyi etkiler. Kesin süre, kapsam netleştikten sonra paylaşılır.',
	},
	{
		id: 'cevre-iller',
		category: 'teklif-surec',
		q: 'Çevre illerde hizmet veriyor musunuz?',
		a: 'Gaziantep merkezli çalışıyoruz; projenin niteliği, saha konumu ve kapsamına göre çevre illerdeki talepler de değerlendirilebilir.',
	},
	{
		id: 'drone-her-arazi',
		category: 'teslim-ciktilar',
		q: 'Drone ölçümü her arazide uygulanabilir mi?',
		a: 'Uçuş, ilgili mevzuat çerçevesinde bölgesel izinlere, hava koşullarına ve proje kapsamına göre değerlendirilir; her bölgede aynı koşullarda gerçekleştirilemeyebilir.',
	},
	{
		id: 'teslim-format',
		category: 'teslim-ciktilar',
		q: 'Ölçüm sonuçları hangi formatlarda teslim edilebilir?',
		a: 'Proje kapsamına göre CAD verisi, koordinat listesi, teknik çizim, rapor veya sayısal veri formatlarında teslim edilebilir.',
	},
	{
		id: 'belge-paylasim',
		category: 'teslim-ciktilar',
		q: 'Tapu veya proje belgelerimi nasıl paylaşabilirim?',
		a: 'İlk iletişim sonrasında WhatsApp veya e-posta üzerinden paylaşabilirsiniz; form üzerinden dosya yükleme şu an bulunmuyor.',
	},
];

export function getHomepageFaqs(): FaqItem[] {
	return faqItems.filter((f) => f.homepage);
}
