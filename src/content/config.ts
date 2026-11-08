
import { z, defineCollection, reference } from "astro:content";

const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        excerpt: z.string(),
        date: z.string().transform((str) => new Date(str)),
        category: z.string(),
        author: reference('authors'),
        image: z.string().optional(),
        draft: z.boolean().optional(),
        lang: z.enum(['en', 'ar']),
    }),
});

const authorCollection = defineCollection({
    type: 'content',
    schema: z.object({
        name: z.string(),
        avatar: z.string(),
        role: z.string(),
    }),
});

const portfolioCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        service: z.string(),
        industry: z.string(),
        budget: z.string(),
        tags: z.array(z.string()),
        img: z.string(),
        draft: z.boolean().optional(),
        lang: z.enum(['en', 'ar']),
    }),
});

export const collections = {
    'blog': blogCollection,
    'authors': authorCollection,
    'portfolio': portfolioCollection,
};
