import { defineCollection, z } from "astro:content";

const projects = defineCollection({
    schema: z.object({
        title: z.string(),
        technologies: z.array(z.string()),
        description: z.string(),
        img: z.string(),
        github: z.string(),
        vercel: z.string(),
    }),
});

export const collections = { projects };
