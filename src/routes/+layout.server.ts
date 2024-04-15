import type { MetaProps } from 'runes-meta-tags';
import { ANALYTICS_ID } from '$env/static/private';

export const load = ({ url }) => {
  const layoutMetaTags: MetaProps = {
    title: 'Runes Webkit Starter',
    description: 'A quick start for a Svelte Runes project.',
    keywords: 'svelte, runes, webkit, ui, components',
    twitter: {
      card: 'summary_large_image',
      site: '@shinokada',
      handle: '@shinokada',
      title: 'Runes Webkit Starter',
      description: 'A quick start for a Svelte Runes project.',
      image: 'https://open-graph-vercel.vercel.app/api/runes-webkit',
      imageAlt: 'Runes Webkit Starter'
    },
    og: {
      type: 'website',
      title: 'Runes Webkit Starter',
      description: 'A quick start for a Svelte Runes project.',
      url: url.href,
      image: 'https://open-graph-vercel.vercel.app/api/runes-webkit',
      imageAlt: 'Runes Webkit Starter',
      siteName: 'Runes Webkit Starter',
      imageWidth: '1200',
      imageHeight: '630'
    }
  };
  return {
    layoutMetaTags,
    ANALYTICS_ID
  };
};
