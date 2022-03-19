import { Page } from '@playwright/test';
import BasePage from '../../core/base/base.page';

export default class HomePage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  // Page locators
  linkLogin = () => this.page.locator('a.login');

  public async openHomePage() {
    await this.page.goto('/');
  }

  public async gotoLogin() {
    await this.click(this.linkLogin());
  }
}
