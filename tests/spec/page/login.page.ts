import { BrowserContext } from '@playwright/test';
import BasePage from '../../core/base/base.page';

export default class LoginPage extends BasePage {
  constructor(context: BrowserContext) {
    super(context);
  }

  public async gotoLogin() {
    await this.getPage(this.context);
    await this.page.locator('a.login').click();
  }

  public async login(username, password) {
    await this.page.locator('#email').fill(username);
    await this.page.locator('#passwd').fill(password);
    await this.page.locator('#SubmitLogin').click();
  }

  public async isOn(): Promise<boolean> {
    return await this.page.locator('a.home').isVisible();
  }
}
