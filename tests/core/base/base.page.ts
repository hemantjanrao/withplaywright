import { Locator, Page } from '@playwright/test';

export default class BasePage {
  protected page!: Page;

  constructor(page: Page) {
    this.page = page;
  }

  protected async click(element: Locator) {
    try {
      if (await element.isEnabled()) element?.click();
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(
        `Element ${element} is not enabled => ${(e as Error).message}`
      );
    }
  }

  protected async enter(element: Locator, text: string) {
    try {
      if (await element.isEnabled()) element?.type(text);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(
        `Element ${element} is not enabled => ${(e as Error).message}`
      );
    }
  }
}
