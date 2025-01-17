import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import { readingTimeRemarkPlugin } from './src/utils/frontmatter.mjs';
import react from '@astrojs/react';
import { SITE } from './src/config.mjs';
import vercel from "@astrojs/vercel/serverless";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const whenExternalScripts = (items = []) => SITE.googleAnalyticsId ? Array.isArray(items) ? items.map(item => item()) : [items()] : [];

// https://astro.build/config
export default defineConfig({
  site: SITE.origin,
  base: SITE.basePathname,
  trailingSlash: SITE.trailingSlash ? 'always' : 'never',
  output: 'hybrid',
  adapter: vercel(),
  markdown: {
    remarkPlugins: [readingTimeRemarkPlugin]
  },
  integrations: [
    react(), 
    tailwind({
    config: {
      applyBaseStyles: false
    }}),
    sitemap({
      filter: (page) => 
        page !== 'https://socodia.com/en/contact-complete' && 
        page !== 'https://socodia.com/de/contact-complete',
      lastmod: new Date()
    }
    ), 
    mdx(), 
    ...whenExternalScripts(() => partytown({
      config: {
        forward: ['dataLayer.push']
      }}))
  ],
  vite: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src')
      }
    }
  },
});