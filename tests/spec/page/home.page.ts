import { BrowserContext, Page } from '@playwright/test';
import BasePage from '../../core/base/base.page';

export default class HomePage extends BasePage {

  constructor(page: Page) {
    super(page);
  }

  public async openHomePage() {
    await this.page.goto('/');
    // await this.page.waitForNavigation();
  }

  public async gotoLogin() {
    await this.page.locator('a.login').click();
    // await this.page.waitForNavigation();
  }
}
