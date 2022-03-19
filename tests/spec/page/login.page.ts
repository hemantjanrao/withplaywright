import { Page } from '@playwright/test';
import BasePage from '../../core/base/base.page';

export default class LoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  // Page locators
  inputEmail = () => this.page.locator('#email');
  inputPassword = () => this.page.locator('#passwd');
  buttonSubmit = () => this.page.locator('#SubmitLogin');
  linkHome = () => this.page.locator('a.home');

  public async login(username: string, password: string): Promise<void> {
    await this.enter(this.inputEmail(), username);
    await this.enter(this.inputPassword(), password);
    await this.click(this.buttonSubmit());
    await this.page.waitForNavigation();
  }

  public async isOn(): Promise<boolean> {
    return await this.linkHome().isVisible();
  }
}
