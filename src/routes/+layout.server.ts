import type { MetaProps } from 'runes-meta-tags'
import { ANALYTICS_ID } from '$env/static/private';


export const load = ({ url }) => {
  const layoutMetaTags = Object.freeze({
    title: 'Runes webkit starter',
    description: 'Webkit starter for Svelte Runes',
    keywords: 'runes, starter, web',
    twitter: {
      card: 'summary_large_image',
      site: '@shinokada',
      handle: '@shinokada',
      title: 'Runes webkit starter',
      description: 'Webkit starter for Runes.',
      image: 'https://open-graph-vercel.vercel.app/api/runes-webkit-starter',
      imageAlt: 'Runes meta',
    },

    og: {
      type: 'website',
      title: 'Runes webkit starter',
      description: 'Webkit starter for Svelte Runes.',
      url: url.href,
      image: 'https://open-graph-vercel.vercel.app/api/runes-webkit-starter',
      imageAlt: 'Runes webkit starter',
      siteName: 'Runes webkit starter',
      imageWidth: '1200',
      imageHeight: '630',
    }, 
  }) satisfies MetaProps;

  return {
    layoutMetaTags,
    ANALYTICS_ID
  };
}