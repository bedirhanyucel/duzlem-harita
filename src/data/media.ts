import type { ImageMetadata } from 'astro';

import homeHeroSurveying from '../assets/home-hero-surveying.jpg';
import homeTechnologyDetail from '../assets/home-technology-detail.jpg';
import corporateTechnicalWorkspace from '../assets/corporate-technical-workspace.jpg';
import projectsCover from '../assets/projects-cover.jpg';
import projectConstruction from '../assets/project-construction.jpg';
import projectParcel from '../assets/project-parcel.jpg';
import technologyGnss from '../assets/technology-gnss.jpg';
import technologyTotalStation from '../assets/technology-total-station.jpg';
import technologyCadGis from '../assets/technology-cad-gis.jpg';
import knowledgeCenterCover from '../assets/knowledge-center-cover.jpg';

export type MediaVariant = 'contour' | 'grid' | 'parcel' | 'coordinate';

export interface MediaEntry {
	key: string;
	alt: string;
	aspectRatio: string;
	type: 'photo' | 'placeholder';
	/** Present when a real representative photo has been supplied. */
	src?: ImageMetadata;
	/** CSS/SVG fallback composition, used while `src` is not yet available. */
	variant: MediaVariant;
	icon?: string;
	representative: boolean;
	caption: string;
}

/**
 * Merkezi medya kaydı. `src` alanı doluysa ilgili sayfa `SiteImage` component'i
 * üzerinden gerçek, optimize edilmiş fotoğrafı gösterir; `src` yoksa aynı component
 * otomatik olarak `TechnicalPlaceholder` CSS/SVG kompozisyonuna düşer.
 * Tüm fotoğraflar temsili (AI/stok üretim) niteliktedir — gerçek DüzlemSa
 * projesi, çalışanı veya ofisi olarak sunulmaz. Bkz. docs/IMAGE_BRIEF.md
 */
export const media: Record<string, MediaEntry> = {
	'home-hero-surveying': {
		key: 'home-hero-surveying',
		alt: 'Sahada total station ile ölçüm yapan bir harita mühendisi, arka planda şehir silüeti',
		aspectRatio: '16/9',
		type: 'photo',
		src: homeHeroSurveying,
		variant: 'contour',
		representative: true,
		caption: 'Temsili görsel',
	},
	'home-technology-detail': {
		key: 'home-technology-detail',
		alt: 'Sahil şeridinde GNSS/RTK anteni ile ölçüm yapan mühendis',
		aspectRatio: '4/3',
		type: 'photo',
		src: homeTechnologyDetail,
		variant: 'grid',
		icon: 'satellite',
		representative: true,
		caption: 'Temsili görsel',
	},
	'corporate-technical-workspace': {
		key: 'corporate-technical-workspace',
		alt: 'İki monitörde CAD ve uydu görüntüsü üzerinde çalışan teknik ofis masası',
		aspectRatio: '4/3',
		type: 'photo',
		src: corporateTechnicalWorkspace,
		variant: 'coordinate',
		icon: 'compass',
		representative: true,
		caption: 'Temsili görsel',
	},
	'projects-cover': {
		key: 'projects-cover',
		alt: 'Geniş açılı saha ve parsel çalışma alanı görünümü',
		aspectRatio: '21/9',
		type: 'photo',
		src: projectsCover,
		variant: 'parcel',
		representative: true,
		caption: 'Temsili görsel',
	},
	'project-surveying': {
		key: 'project-surveying',
		// NOT used as a photo: the supplied source image has a fabricated
		// "DÜZLEMSA" logo baked into the worker's vest by the AI generator,
		// which would misrepresent this as a genuine branded company photo.
		// Falls back to the CSS/SVG placeholder until a clean replacement is supplied.
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
		alt: 'Şantiye sahasında yapı aplikasyonu ölçümü yapan teknik ekip',
		aspectRatio: '4/3',
		type: 'photo',
		src: projectConstruction,
		variant: 'coordinate',
		icon: 'crane',
		representative: true,
		caption: 'Temsili görsel',
	},
	'project-parcel': {
		key: 'project-parcel',
		alt: 'Parsel ve imar sürecine ait teknik belge ve kroki üzerinde inceleme',
		aspectRatio: '4/3',
		type: 'photo',
		src: projectParcel,
		variant: 'parcel',
		icon: 'layers',
		representative: true,
		caption: 'Temsili görsel',
	},
	'technology-gnss': {
		key: 'technology-gnss',
		alt: 'GNSS/RTK anteni ve saha veri toplayıcısıyla ölçüm anı',
		aspectRatio: '1/1',
		type: 'photo',
		src: technologyGnss,
		variant: 'coordinate',
		icon: 'satellite',
		representative: true,
		caption: 'Temsili görsel',
	},
	'technology-total-station': {
		key: 'technology-total-station',
		alt: 'Total station cihazıyla açı ve mesafe ölçümü yapan mühendis',
		aspectRatio: '1/1',
		type: 'photo',
		src: technologyTotalStation,
		variant: 'grid',
		icon: 'target',
		representative: true,
		caption: 'Temsili görsel',
	},
	'technology-cad-gis': {
		key: 'technology-cad-gis',
		alt: 'Çift monitörde CAD çizimi ve GIS uydu verisiyle çalışma',
		aspectRatio: '1/1',
		type: 'photo',
		src: technologyCadGis,
		variant: 'grid',
		icon: 'cpu',
		representative: true,
		caption: 'Temsili görsel',
	},
	'knowledge-center-cover': {
		key: 'knowledge-center-cover',
		alt: 'Teknik çizim ve koordinat verileriyle çalışma masası',
		aspectRatio: '21/9',
		type: 'photo',
		src: knowledgeCenterCover,
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
