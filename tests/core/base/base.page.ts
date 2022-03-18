import { Locator, Page } from '@playwright/test';

export default class BasePage {
  protected page!: Page;

  constructor(page: Page) {
    this.page = page;
  }

  protected async click(element: Locator) {
    if (await element.isEnabled()) {
      console.log(`Clicking on ${element} `);
      element.click();
    } else console.log(`Element ${element} is not enabled`);
  }

  protected async enter(element: Locator, text: string) {
    if (await element.isEnabled()) {
      console.log(`Filling on ${element} `);
      element.fill(text);
    } else console.log(`Element ${element} is not enabled`);
  }
}
