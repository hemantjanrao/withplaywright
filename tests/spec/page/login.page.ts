import { Locator, Page } from '@playwright/test';
import BasePage from '../../core/base/base.page';

export default class LoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  // Page locators
  inputEmail = (): Locator => this.page.locator('#email');
  inputPassword = (): Locator => this.page.locator('#passwd');
  buttonSubmit = (): Locator => this.page.locator('#SubmitLogin');
  linkHome = (): Locator => this.page.locator('a.home');

  /**
   * Login to the application
   * @param  {string} username
   * @param  {string} password
   * @returns Promise
   */
  public async login(username: string, password: string): Promise<void> {
    await this.enter(this.inputEmail(), username);
    await this.enter(this.inputPassword(), password);
    await this.click(this.buttonSubmit());
    await this.page.waitForNavigation();
  }

  /**
   * Verify is the user on the
   * @returns Promise
   */
  public async isOn(): Promise<boolean> {
    return await this.linkHome().isVisible();
  }
}
