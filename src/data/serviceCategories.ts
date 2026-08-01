export interface ServiceCategory {
	id: string;
	title: string;
	description: string;
	icon: string;
}

export const serviceCategories: ServiceCategory[] = [
	{
		id: 'kadastro-parsel',
		title: 'Kadastro ve Parsel İşlemleri',
		description:
			'Parsel sınırlarının tespiti, aplikasyon ve tapu kadastro süreçlerinde teknik danışmanlık.',
		icon: 'mappin',
	},
	{
		id: 'imar-parsel-duzenleme',
		title: 'İmar ve Parsel Düzenleme',
		description: 'İfraz, tevhit ve imar uygulamalarına yönelik teknik süreç yönetimi.',
		icon: 'ruler',
	},
	{
		id: 'insaat-santiye',
		title: 'İnşaat ve Şantiye Haritacılığı',
		description: 'Plankoteden as-built ölçümüne kadar şantiye sürecinin teknik takibi.',
		icon: 'crane',
	},
	{
		id: 'harita-mekansal-veri',
		title: 'Harita Üretimi ve Mekânsal Veri',
		description:
			'Topografik harita, CBS ve kamulaştırma çalışmaları için sayısal veri üretimi.',
		icon: 'database',
	},
	{
		id: 'ileri-olcum-proje-destegi',
		title: 'İleri Ölçüm ve Proje Desteği',
		description:
			'Drone, fotogrametri ve hassas kontrol ölçümleriyle proje bazlı teknik destek.',
		icon: 'drone',
	},
];
