import { Locator, Page } from '@playwright/test';

export default class BasePage {
  protected page!: Page;

  constructor(page: Page) {
    this.page = page;
  }

  protected async click(element: Locator) {
    console.log(`Clicking on `);
    element.click();
  }

  protected async enter(element: Locator, text: string) {
    console.log(`Filling on `);
    element.fill(text);
  }
}
