import {
  test,
  chromium,
  BrowserContext,
  Page
} from '@playwright/test';

export let page_context: BrowserContext;
export let page:Page;

test.beforeEach(async () => {
  const browser = await chromium.launch({ headless: false });
  // const browser = await chromium.launch({ headless: true });
  const page_context = await browser.newContext();
  page = await page_context.newPage();
});

test.afterEach(() => {
  page.close();
})
