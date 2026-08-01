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

const projects = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
	schema: z.object({
		title: z.string(),
		category: z.string(),
		location: z.string().optional(),
		year: z.number().optional(),
		summary: z.string(),
		services: z.array(z.string()).default([]),
		methods: z.array(z.string()).default([]),
		deliverables: z.array(z.string()).default([]),
		coverImage: z.string().optional(),
		gallery: z.array(z.string()).default([]),
		featured: z.boolean().default(false),
		published: z.boolean().default(false),
		representative: z.boolean().default(true),
		seoTitle: z.string().optional(),
		seoDescription: z.string().optional(),
	}),
});

const articles = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		category: z.string(),
		publishedAt: z.coerce.date(),
		updatedAt: z.coerce.date().optional(),
		author: z.string().default('DüzlemSa Harita'),
		readingTime: z.string().optional(),
		featured: z.boolean().default(false),
		coverImage: z.string().optional(),
		seoTitle: z.string(),
		seoDescription: z.string(),
		relatedServices: z.array(z.string()).default([]),
		draft: z.boolean().default(false),
	}),
});

export const collections = { services, projects, articles };
