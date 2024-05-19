import { expect, test } from '@playwright/test';

test('svelte-4/getting-started page has expected h1', async ({ page }) => {
  await page.goto('/guide/svelte-4/getting-started');
  await expect(page.locator('h1')).toHaveText('Runes Webkit Starter: v1');
});

test('svelte-4/props page has expected h1', async ({ page }) => {
  await page.goto('/guide/svelte-4/props');
  await expect(page.locator('h1')).toHaveText('Svelte Awesome Icons v1: Props');
});

test('svelte-5/getting-started page has expected h1', async ({ page }) => {
  await page.goto('/guide/svelte-5/getting-started');
  await expect(page.locator('h1')).toHaveText('Svelte Awesome Icons: v2');
});

test('svelte-5/props page has expected h1', async ({ page }) => {
  await page.goto('/guide/svelte-5/props');
  await expect(page.locator('h1')).toHaveText('Props: Svelte Ant Design Icons v2 for Svelte Runes');
});

test('custom-icon page has expected h1', async ({ page }) => {
  await page.goto('/guide/custom-icons');
  await expect(page.locator('h1')).toHaveText('Custom Default Icons');
});

test('global-icon page has expected h1', async ({ page }) => {
  await page.goto('/guide/global-icons');
  await expect(page.locator('h1')).toHaveText('Setting Global Icon using setContext');
});

test('three-tabs page has expected h1', async ({ page }) => {
  await page.goto('/three-tabs');
  await expect(page.locator('h1')).toHaveText('Three Tabs');
});

test('three-tabs-sizebytailwind page has expected h1', async ({ page }) => {
  await page.goto('/three-tabs-sizebytailwind');
  await expect(page.locator('h1')).toHaveText('Three Tabs: Size by Tailwind');
});

test('no-tabs page has expected h1', async ({ page }) => {
  await page.goto('/no-tabs');
  await expect(page.locator('h1')).toHaveText('No Tabs');
});

test('how to use page has expected h1', async ({ page }) => {
  await page.goto('/how-to-use');
  await expect(page.locator('h1')).toHaveText('Documentation');
});
