export type MediaVariant = 'contour' | 'grid' | 'parcel' | 'coordinate';

export interface MediaEntry {
	key: string;
	alt: string;
	aspectRatio: string;
	type: 'placeholder';
	variant: MediaVariant;
	icon?: string;
	representative: boolean;
	caption: string;
}

/**
 * Gerçek fotoğraf/çekim henüz sağlanmadığı için tüm kayıtlar CSS/SVG tabanlı
 * teknik placeholder kompozisyonlarına işaret eder. Gerçek görsel eklendiğinde
 * ilgili sayfa `TechnicalPlaceholder` yerine `astro:assets` `<Image>` kullanacak
 * şekilde güncellenebilir; `key` değerleri sabit tutulmalıdır.
 * Bkz. docs/IMAGE_BRIEF.md
 */
export const media: Record<string, MediaEntry> = {
	'home-hero-surveying': {
		key: 'home-hero-surveying',
		alt: 'Temsili teknik ölçüm ve koordinat kompozisyonu',
		aspectRatio: '16/9',
		type: 'placeholder',
		variant: 'contour',
		representative: true,
		caption: 'Temsili görsel',
	},
	'home-technology-detail': {
		key: 'home-technology-detail',
		alt: 'Temsili GNSS ve saha ölçüm teknolojisi kompozisyonu',
		aspectRatio: '4/3',
		type: 'placeholder',
		variant: 'grid',
		icon: 'satellite',
		representative: true,
		caption: 'Temsili görsel',
	},
	'corporate-technical-workspace': {
		key: 'corporate-technical-workspace',
		alt: 'Temsili teknik proje ve koordinat çalışma kompozisyonu',
		aspectRatio: '4/3',
		type: 'placeholder',
		variant: 'coordinate',
		icon: 'compass',
		representative: true,
		caption: 'Temsili görsel',
	},
	'projects-cover': {
		key: 'projects-cover',
		alt: 'Temsili parsel ve ölçüm geometrisi kompozisyonu',
		aspectRatio: '21/9',
		type: 'placeholder',
		variant: 'parcel',
		representative: true,
		caption: 'Temsili görsel',
	},
	'project-surveying': {
		key: 'project-surveying',
		alt: 'Temsili endüstriyel tesis ölçüm çalışması kompozisyonu',
		aspectRatio: '4/3',
		type: 'placeholder',
		variant: 'grid',
		icon: 'building',
		representative: true,
		caption: 'Temsili görsel',
	},
	'project-construction': {
		key: 'project-construction',
		alt: 'Temsili yapı aplikasyonu ve şantiye kompozisyonu',
		aspectRatio: '4/3',
		type: 'placeholder',
		variant: 'coordinate',
		icon: 'crane',
		representative: true,
		caption: 'Temsili görsel',
	},
	'project-parcel': {
		key: 'project-parcel',
		alt: 'Temsili parsel ve imar süreci kompozisyonu',
		aspectRatio: '4/3',
		type: 'placeholder',
		variant: 'parcel',
		icon: 'layers',
		representative: true,
		caption: 'Temsili görsel',
	},
	'technology-gnss': {
		key: 'technology-gnss',
		alt: 'Temsili GNSS/RTK ölçüm kompozisyonu',
		aspectRatio: '1/1',
		type: 'placeholder',
		variant: 'coordinate',
		icon: 'satellite',
		representative: true,
		caption: 'Temsili görsel',
	},
	'technology-total-station': {
		key: 'technology-total-station',
		alt: 'Temsili total station ölçüm kompozisyonu',
		aspectRatio: '1/1',
		type: 'placeholder',
		variant: 'grid',
		icon: 'target',
		representative: true,
		caption: 'Temsili görsel',
	},
	'technology-cad-gis': {
		key: 'technology-cad-gis',
		alt: 'Temsili CAD/GIS veri işleme kompozisyonu',
		aspectRatio: '1/1',
		type: 'placeholder',
		variant: 'grid',
		icon: 'cpu',
		representative: true,
		caption: 'Temsili görsel',
	},
	'knowledge-center-cover': {
		key: 'knowledge-center-cover',
		alt: 'Temsili bilgi merkezi kompozisyonu',
		aspectRatio: '21/9',
		type: 'placeholder',
		variant: 'contour',
		representative: true,
		caption: 'Temsili görsel',
	},
	'contact-office-map': {
		key: 'contact-office-map',
		alt: 'Temsili konum ve koordinat kompozisyonu',
		aspectRatio: '4/3',
		type: 'placeholder',
		variant: 'coordinate',
		icon: 'mappin',
		representative: true,
		caption: 'Temsili görsel',
	},
};
