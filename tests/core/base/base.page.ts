import { BrowserContext, Page } from '@playwright/test';

export default class BasePage {
  protected page!: Page;
  protected context: BrowserContext;

  constructor(context: BrowserContext) {
    this.context = context;
  }

  protected async getPage(context: BrowserContext) {
    this.page = await context.newPage();
  }
}
