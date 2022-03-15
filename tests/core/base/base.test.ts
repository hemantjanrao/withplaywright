import {
  test,
  Browser,
  chromium,
  Page,
  BrowserContext
} from '@playwright/test';

// export let browser:Browser;
// export let page:Page;

// test.beforeEach(async () => {
//   browser = await chromium.launch({headless: false});
//   const context = await browser.newContext();
//   page =await context.newPage();
// });

// test.afterEach(() => {
//   browser.close();
// })

export let page_context: BrowserContext;

test.beforeEach(async () => {
  const browser = await chromium.launch({ headless: false });
  page_context = await browser.newContext();
});
