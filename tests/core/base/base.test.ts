import {
  test,
  chromium,
  BrowserContext,
  Page,
  Browser,
  firefox,
  webkit
} from '@playwright/test';

export let page_context: BrowserContext;
export let page: Page;
export let browser: Browser;

test.describe.configure({ mode: 'parallel' });

test.beforeEach(async ({ browserName }) => {
  switch (browserName) {
    case 'chromium': {
      browser = await chromium.launch({
        headless: false
      });
      break;
    }
    case 'firefox': {
      browser = await firefox.launch({
        headless: false
      });
      break;
    }
    case 'webkit': {
      browser = await webkit.launch({
        headless: false
      });
      break;
    }
    default: {
      // eslint-disable-next-line no-console
      console.log('No broswer specified');
    }
  }

  page_context = await browser.newContext();
  await page_context.tracing.start({ screenshots: true, snapshots: true });
  page = await page_context.newPage();
});

test.afterEach(async () => {
  await page_context.tracing.stop({ path: 'trace.zip' });
  page.close();
  page_context.close();
  browser.close();
});
