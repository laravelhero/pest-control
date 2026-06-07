import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    pubDate: z.coerce.date(),
    read: z.string(),
    img: z.string(),
    excerpt: z.string(),
  }),
});

const services = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/services' }),
  schema: z.object({
    order: z.number(),
    name: z.string(),
    img: z.string(),
    short: z.string(),
    desc: z.string(),
    icon: z.string(),
    tagline: z.string(),
    long: z.string(),
    signs: z.array(z.string()),
    treatment: z.array(z.string()),
    benefits: z.array(z.string()),
  }),
});

export const collections = { blog, services };
