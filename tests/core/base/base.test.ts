import {
  test,
  chromium,
  BrowserContext,
  Page,
  Browser
} from '@playwright/test';

export let page_context: BrowserContext;
export let page: Page;
export let browser: Browser;

test.beforeEach(async () => {
  browser = await chromium.launch({ headless: false });
  page_context = await browser.newContext();
  page = await page_context.newPage();
});

test.afterEach(() => {
  page.close();
  page_context.close();
  browser.close();
});
