import { BrowserContext } from '@playwright/test';
import BasePage from '../../core/base/base.page';

export default class HomePage extends BasePage {
  constructor(context: BrowserContext) {
    super(context);
  }

  public async openHomePage() {
    await this.getPage(this.context);
    this.page.goto('http://automationpractice.com/index.php');
  }

  public async gotoLogin() {
    this.page.locator('a.login').click();
  }
}
