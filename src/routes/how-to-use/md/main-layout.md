<script lang="ts">
  import '../app.pcss';
  import { sineIn } from 'svelte/easing';
  import type { Component } from 'svelte';
  import { page } from '$app/stores';
  import { newSidebarList } from './utils/helper';
  import { Footer, OnThisPage, extract, removeHyphensAndCapitalize, DotsHorizontalOutline, GithubSolid, random_tailwind_color, XSolid, } from 'runes-webkit';
  import { Navbar, NavLi, NavBrand, NavUl, uiHelpers, Darkmode, Dropdown,  DropdownUl, DropdownLi, Sidebar, SidebarGroup, SidebarDropdownWrapper, SidebarItem, CloseButton, SidebarBrand } from 'svelte-5-ui-lib';
  import { RunesMetaTags } from 'runes-meta-tags';
  import { Runatics } from 'runatics';
  import DynamicCodeBlockStyle from './utils/DynamicCodeBlockStyle.svelte';
  
  type LiType = {
    name: string;
    href: string;
    Icon?: Component;
  };
  let { children, data } = $props();
  const analyticsId = data.ANALYTICS_ID;
  let metaTags = $state($page.data.pageMetaTags ? $page.data.pageMetaTags : data.layoutMetaTags);
  // sidebar
  const sidebarUi = uiHelpers();
  let isOpen = $state(false);
  const closeSidebar = sidebarUi.close;

  let currentUrl = $state($page.url.pathname);
  const hasPath = (key: string) => currentUrl.includes(key);

  const lis: LiType[] = [
    { name: 'Guide', href: '/guide/svelte-4/getting-started' },
    { name: '3-Tabs', href: '/three-tabs' },
    { name: '3-Tabs-tailwind', href: '/three-tabs-sizebytailwind' },
    { name: 'No-tabs', href: '/no-tabs' },
    { name: 'How to use', href: '/how-to-use' },
    { name: 'Quick start', href: '/quick-start' }
  ];
  const brand = {
    name: 'codewithshin.com',
    href: 'https://codewithshin.com'
  };
  const urlsToIncludeSwitcherAndSidebar = ['/guide/', '/guide2/', '/how-to-use', '/quick-start'];
  const siteName = removeHyphensAndCapitalize(__NAME__);
  const twitterUrl = 'https://twitter.com/shinokada';
  const githubUrl = `https://github.com/shinokada/${__NAME__}`;

  // nav
  let nav = uiHelpers();
  let navStatus = $state(false);
  let toggleNav = nav.toggle;
  let closeNav = nav.close;
  let headerCls = 'sticky top-0 z-40 mx-auto w-full flex-none border-b border-gray-200 bg-gray-100 dark:border-gray-600 dark:bg-sky-950';
  let navClass = 'w-full divide-gray-200 border-gray-200 bg-gray-50 dark_bg_theme text-gray-500 dark:divide-gray-700 dark:border-gray-700 dark:transparent dark:text-gray-400 sm:px-4';
  let divClass = 'ml-auto w-full';
  let ulclass = 'dark:lg:bg-transparent lg:space-x-4';
  function isIncluded(url: string, allowedUrls: string[]): boolean {
    return allowedUrls.some((allowedUrl) => url.startsWith(allowedUrl));
  }
  let urlsToIncludeSwitcher = ['/guide']
  let include = $derived(isIncluded(currentUrl, urlsToIncludeSwitcher));
  // dropdown
  let dropdown = uiHelpers();
  let dropdownStatus = $state(false);
  let closeDropdown = dropdown.close;
  let dropdownTransitionParams = {
    y: 0,
    duration: 200,
    easing: sineIn
  };
  // sidebar
  let iconClass = 'fixed inset-0 z-30 flex-none h-full lg:static lg:h-auto lg:overflow-y-visible bg-white dark_bg_theme lg:pt-0 lg:block'
  $effect(() => {
    navStatus = nav.isOpen;
    dropdownStatus = dropdown.isOpen;
    currentUrl = $page.url.pathname;
    metaTags = $page.data.pageMetaTags ? $page.data.pageMetaTags : data.layoutMetaTags;
    isOpen = sidebarUi.isOpen;
  });
</script>

{#snippet navLi(lis:LiType[])}
{#each lis as { name, href, Icon }}
{#if Icon}
<Icon class="mb-3 h-8 w-8 {random_tailwind_color()}"></Icon>
{/if}
<NavLi {href}>{name}</NavLi>
{/each}
{/snippet}

<Runatics {analyticsId} />
<RunesMetaTags {...metaTags} />

<header class={headerCls}>
  <Navbar {navClass} {toggleNav} {closeNav} {navStatus} breakPoint="lg" fluid div2Class={divClass}>
    {#snippet brand()}
      {#if urlsToIncludeSwitcherAndSidebar.some((path) => currentUrl.startsWith(path))}
      <button
        onclick={sidebarUi.toggle}
        type="button"
        class="z-100 mr-4 mt-1 lg:hidden"
        aria-controls="navbar-default"
      >
        <span class="sr-only">Toggle sidebar menu</span>
        <svg
          class="h-5 w-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      {/if}
      {#if siteName}
        <NavBrand
          {siteName}
          spanClass="self-center whitespace-nowrap text-2xl font-semibold text-primary-900 dark:text-primary-500"
        />
      {/if}
      <div class="ml-auto flex items-center lg:order-1">
        {#if include}
          <div class="hidden sm:block">
            <DynamicCodeBlockStyle />
          </div>
        {/if}
        <DotsHorizontalOutline
          onclick={dropdown.toggle}
          class="ml-6 mr-4 dark:text-white"
          size="lg"
        />
        <div class="relative">
          <Dropdown
            {dropdownStatus}
            {closeDropdown}
            params={dropdownTransitionParams}
            class="absolute -left-[50px] top-2 w-12 p-1.5"
          >
            <DropdownUl>
              {#if twitterUrl}
                <DropdownLi href={twitterUrl} target="_blank" aClass="p-2 m-0"
                  ><XSolid /></DropdownLi
                >
              {/if}
              {#if githubUrl}
                <DropdownLi href={githubUrl} target="_blank" aClass="p-2 m-0">
                  <GithubSolid />
                </DropdownLi>
              {/if}
              <DropdownLi>
                <Darkmode class="m-0 p-2" />
              </DropdownLi>
            </DropdownUl>
          </Dropdown>
        </div>
      </div>
    {/snippet}
    {#if lis}
      <NavUl class={ulclass}>
        {@render navLi(lis)}
      </NavUl>
    {/if}
  </Navbar>
</header>

<div class="lg:flex">
  {#if urlsToIncludeSwitcherAndSidebar.some((path) => currentUrl.startsWith(path))}
    <Sidebar {isOpen} {closeSidebar} breakpoint="lg" activeClass="flex items-center p-1 text-base font-normal text-white dark:hover:text-white hover:text-gray-900 bg-primary-700 dark:bg-primary-700 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" nonActiveClass="p-1 hover:bg-gray-200" divClass="dark:bg-gray-900 bg-gray-50" class="lg:top-[70px] h-screen dark:bg-gray-900">
      <CloseButton onclick={closeSidebar} color="gray" class="absolute right-1 top-3 p-2 lg:hidden" />
      <SidebarGroup>
        <SidebarBrand>
          <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Runes Webkit</span>
        </SidebarBrand>
        {#each newSidebarList as { name, Icon, children, href }}
          {#if children}
            <SidebarDropdownWrapper
              label={name}
              isOpen={hasPath('components')}
              svgClass="me-4"
              btnClass="p-1"
            >
              {#snippet iconSlot()}
                <Icon />
              {/snippet}
              {#each children as { name, Icon, href }}
                <SidebarItem label={name} onclick={closeSidebar} {href} aClass="ml-4">
                  {#snippet iconSlot()}
                    <Icon />
                  {/snippet}
                </SidebarItem>
              {/each}
            </SidebarDropdownWrapper>
          {:else}
            <SidebarItem label={name} onclick={closeSidebar} {href}>
              {#snippet iconSlot()}
                <Icon />
              {/snippet}
            </SidebarItem>
          {/if}
        {/each}
      </SidebarGroup>
    </Sidebar>
  {/if}
  <div class="relative">
    <OnThisPage {extract} headingSelector="#mainContent > :where(h2, h3)" />
  </div>
    {@render children()}
</div>
<Footer {brand} {lis} />
