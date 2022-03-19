import { Page } from '@playwright/test';
import BasePage from '../../core/base/base.page';

export default class HomePage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  // Page locators
  readonly linkLogin = () => this.page.locator('a.login');

  public async openHomePage(): Promise<void> {
    await this.page.goto('/');
  }

  public async gotoLogin(): Promise<void> {
    await this.click(this.linkLogin());
    await this.page.waitForNavigation();
  }
}
