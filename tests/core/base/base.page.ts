import { Locator, Page } from '@playwright/test';

export default class BasePage {
  protected page!: Page;

  constructor(page: Page) {
    this.page = page;
  }

  protected async click(element: Locator): Promise<void> {
    try {
      if (await element.isEnabled()) element?.click();
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(
        `Element ${element} is not enabled => ${(e as Error).message}`
      );
    }
  }

  protected async enter(element: Locator, text: string): Promise<void> {
    try {
      if (await element.isEnabled()) element?.fill(text);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(
        `Element ${element} is not enabled => ${(e as Error).message}`
      );
    }
  }
}
