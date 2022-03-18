import { BrowserContext, Page } from '@playwright/test';
import BasePage from '../../core/base/base.page';

export default class LoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  public async login(username, password): Promise<void> {
    await this.enter(this.page.locator('#email'), username);
    await this.enter(this.page.locator('#passwd'), password);
    await this.click(this.page.locator('#SubmitLogin'));
    await this.page.waitForNavigation();
  }

  public async isOn(): Promise<boolean> {
    return await this.page.locator('a.home').isVisible();
  }
}
