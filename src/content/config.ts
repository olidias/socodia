import { z, defineCollection } from 'astro:content';

const post = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    image: z.string().optional(),

    canonical: z.string().url().optional(),

    publishDate: z.date().or(z.string()).optional(),
    draft: z.boolean().optional(),

    excerpt: z.string().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    author: z.string().optional(),
  }),
});

// One folder per article, one markdown file per language:
//   src/content/blog/<slug>/en.md
//   src/content/blog/<slug>/de.md
// The folder name becomes the URL slug in every language.
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    publishDate: z.coerce.date(),
    excerpt: z.string(),
    // Absolute path into /public, e.g. /blog/my-post/cover.webp
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = {
  post: post,
  blog: blog,
};
