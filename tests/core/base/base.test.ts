import {
  test,
  Browser,
  chromium,
  Page,
  BrowserContext
} from '@playwright/test';

export let page_context: BrowserContext;

test.beforeEach(async () => {
  const browser = await chromium.launch({ headless: false });
  page_context = await browser.newContext();
});

test.afterEach(() => {
  page_context.close();
})
