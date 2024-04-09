<script context="module" lang="ts">
  export interface TwitterType {
    card?: 'summary' | 'summary_large_image' | 'app' | 'player';
    site?: string;
    handle?: string;
    title?: string;
    description?: string;
    image?: string;
    imageAlt?: string;
  }
  export interface OgType{
    type?: string;
    title?: string;
    description?: string;
    url?: string;
    image?: string;
    imageAlt?: string;
    siteName?: string;
    imageWidth?: string;
    imageHeight?: string;
  }
  export interface MetaProps {
    title?: string;
    robots?: boolean;
    description?: string;
    keywords?: string;
    twitter?: TwitterType;
    og?: OgType;
    url?: string;
    imageWidth?: string;
    imageHeight?: string;
  }
</script>

<script lang="ts" >
  // type AnyObject = { [key: string]: any };
  import { deepMerge } from '$lib'
  import { page } from '$app/stores';
  
  let pageData = $state($page.data)
  let mergedObject: MetaProps = $derived(pageData.pageMetaTags ? deepMerge(pageData.layoutMetaTags,  pageData.pageMetaTags ) : pageData.layoutMetaTags);
  $effect(() => {
    pageData = $page.data
  })
</script>

<svelte:head>
  {#if mergedObject.title}
  <title>{mergedObject.title}</title>
  {/if}
  {#if mergedObject.description}
  <meta name="description" content="{mergedObject.description}"
  />
  {/if}
  {#if mergedObject.keywords}
  <meta name="keywords" content="{mergedObject.keywords}" />
  {/if}
  {#if mergedObject.robots !==false}
  <meta name="robots" content="index,follow" />
  {/if}

  {#if mergedObject.twitter}
    {#if mergedObject.twitter.card}
    <meta name="twitter:card" content="{mergedObject.twitter.card}" />
    {/if}
    {#if mergedObject.twitter.handle}
      <meta name="twitter:creator" content={mergedObject.twitter.handle} />
    {/if}
    {#if mergedObject.twitter.site}
    <meta name="twitter:title" content="{mergedObject.twitter.title}" />
    {/if}
    {#if mergedObject.twitter.description}
    <meta
      name="twitter:description"
      content="{mergedObject.twitter.description}"
    />
    {/if}
    {#if mergedObject.twitter.image}
    <meta
      name="twitter:image"
      content="{mergedObject.twitter.image}"
    />
    {/if}
    {#if mergedObject.twitter.imageAlt}
    <meta name="twitter:image:alt" content="{mergedObject.twitter.imageAlt}" />
    {/if}
  {/if}
  {#if mergedObject.og}
    {#if mergedObject.og.url}
    <meta property="og:url" content="{mergedObject.og.url}" />
    {/if}
    {#if mergedObject.og.type}
    <meta property="og:type" content="{mergedObject.og.type}" />
    {/if}
    {#if mergedObject.og.title}
    <meta property="og:title" content="{mergedObject.og.title}" />
    {/if}
    {#if mergedObject.og.description}
    <meta
      property="og:description"
      content="{mergedObject.og.description}"
    />
    {/if}
    {#if mergedObject.og.image}
    <meta
      property="og:image"
      content="{mergedObject.og.image}"
    />
    {/if}
    {#if mergedObject.og.imageAlt}
    <meta property="og:image:alt" content="{mergedObject.og.imageAlt}" />
    {/if}
    {#if mergedObject.og.imageWidth}
    <meta property="og:image:width" content="{mergedObject.og.imageWidth}" />
    {/if}
    {#if mergedObject.og.imageHeight}
    <meta property="og:image:height" content="{mergedObject.og.imageHeight}" />
    {/if}
    {#if mergedObject.og.siteName}
    <meta property="og:site_name" content="{mergedObject.og.siteName}" />
    {/if}
  {/if}
</svelte:head>