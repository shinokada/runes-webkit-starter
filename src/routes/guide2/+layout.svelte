<script lang="ts">
  import type { Snippet } from 'svelte';
  import { Toc, extract } from 'runes-webkit'

  interface Props{
    children: Snippet;
    title?: string;
    description?: string;
    keywords?: string;
    url?: string;
    image?: string;
    imageAlt?: string;
    imageWidth?: string;
    imageHeight?: string;
    creator?: string;
  }

  let { children, title, description, keywords, url, image, imageAlt, imageHeight = '630', imageWidth = '1200', creator }: Props = $props();
 
</script>

<main class="flex-auto w-full min-w-0 lg:static lg:max-h-full lg:overflow-visible">
  <div class="flex w-full">
    <div
      class="flex flex-col max-w-3xl 2xl:ml-40 px-4 min-w-0 lg:px-8 pb:12 xl:pb-24 lg:pb-16 divide-y divide-gray-200 dark:divide-gray-800"
    >
      <div id="mainContent" class="pb-20">
        {@render children()}
      </div>
    </div>
    <Toc {extract} headingSelector="#mainContent > :where(h2, h3)" />
  </div>
</main>