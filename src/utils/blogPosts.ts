import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';

export const blogLanguages = ['en', 'de'] as const;

export type BlogLang = (typeof blogLanguages)[number];

export interface BlogPost {
  /** Folder name of the article, identical across languages. */
  slug: string;
  lang: BlogLang;
  title: string;
  excerpt: string;
  image?: string;
  imageAlt?: string;
  publishDate: Date;
  draft: boolean;
  entry: CollectionEntry<'blog'>;
}

const isBlogLang = (value: string): value is BlogLang => (blogLanguages as readonly string[]).includes(value);

/** Turns a `<slug>/<lang>` collection entry into a post, or null if it does not follow the convention. */
const normalize = (entry: CollectionEntry<'blog'>): BlogPost | null => {
  const segments = entry.slug.split('/');
  if (segments.length !== 2) return null;

  const [slug, lang] = segments;
  if (!slug || !isBlogLang(lang)) return null;

  const { title, excerpt, image, imageAlt, publishDate, draft } = entry.data;

  return { slug, lang, title, excerpt, image, imageAlt, publishDate, draft, entry };
};

let _posts: Array<BlogPost>;

const load = async (): Promise<Array<BlogPost>> => {
  const entries = await getCollection('blog');

  return entries
    .map(normalize)
    .filter((post): post is BlogPost => post !== null)
    .filter((post) => !post.draft || !import.meta.env.PROD)
    .sort((a, b) => b.publishDate.valueOf() - a.publishDate.valueOf());
};

/** All posts of all languages, newest first. Drafts are only included during development. */
export const fetchBlogPosts = async (): Promise<Array<BlogPost>> => {
  if (!_posts) {
    _posts = await load();
  }

  return _posts;
};

/** Posts available in the given language, newest first. */
export const getBlogPosts = async (lang: BlogLang): Promise<Array<BlogPost>> =>
  (await fetchBlogPosts()).filter((post) => post.lang === lang);

/** Languages an article has been translated into, in the order defined by `blogLanguages`. */
export const getPostLanguages = async (slug: string): Promise<Array<BlogLang>> => {
  const posts = await fetchBlogPosts();

  return blogLanguages.filter((lang) => posts.some((post) => post.slug === slug && post.lang === lang));
};

export const getBlogListPath = (lang: BlogLang): string => (lang === 'de' ? '/de/blog' : '/blog');

export const getBlogPostPath = (slug: string, lang: BlogLang): string => `${getBlogListPath(lang)}/${slug}`;

const dateFormatters: Record<BlogLang, Intl.DateTimeFormat> = {
  en: new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' }),
  de: new Intl.DateTimeFormat('de-CH', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' }),
};

export const formatPostDate = (date: Date, lang: BlogLang): string => dateFormatters[lang].format(date);
