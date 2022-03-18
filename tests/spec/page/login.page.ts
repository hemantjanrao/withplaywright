import { BrowserContext, Page } from '@playwright/test';
import BasePage from '../../core/base/base.page';

export default class LoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  public async login(username, password):Promise<void> {
    await this.page.locator('#email').fill(username);
    await this.page.locator('#passwd').fill(password);
    await this.page.locator('#SubmitLogin').click();
    await this.page.waitForNavigation();
  }

  public async isOn(): Promise<boolean> {
    return await this.page.locator('a.home').isVisible();
  }
}
