import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const services = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
	schema: z.object({
		title: z.string(),
		shortTitle: z.string(),
		category: z.enum([
			'kadastro-parsel',
			'imar-parsel-duzenleme',
			'insaat-santiye',
			'harita-mekansal-veri',
			'ileri-olcum-proje-destegi',
		]),
		summary: z.string(),
		intro: z.string(),
		icon: z.string(),
		featured: z.boolean().default(false),
		order: z.number(),
		seoTitle: z.string(),
		seoDescription: z.string(),
		heroLabel: z.string(),
		servicesIncluded: z.array(z.string()),
		whoNeedsIt: z.array(
			z.object({
				title: z.string(),
				desc: z.string(),
			}),
		),
		processSteps: z
			.array(
				z.object({
					title: z.string(),
					desc: z.string(),
				}),
			)
			.optional(),
		deliverables: z.array(z.string()),
		requiredInformation: z.array(z.string()),
		faq: z.array(
			z.object({
				q: z.string(),
				a: z.string(),
			}),
		),
		relatedServices: z.array(z.string()).optional(),
	}),
});

export const collections = { services };
