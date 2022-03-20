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

enum Browsers {
  CHROMIUM = 'chromium',
  FIREFOX = 'firefox',
  WEBKIT = 'webkit'
}

test.beforeEach(async ({ browserName }) => {
  switch (browserName) {
    case Browsers.CHROMIUM: {
      browser = await chromium.launch({
        headless: true
      });
      break;
    }
    case Browsers.FIREFOX: {
      browser = await firefox.launch({
        headless: true
      });
      break;
    }
    case Browsers.WEBKIT: {
      browser = await webkit.launch({
        headless: true
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
