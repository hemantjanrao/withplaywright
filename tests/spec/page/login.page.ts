import { Locator, Page } from '@playwright/test';
import BasePage from '../../core/base/base.page';

export default class LoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  // Page locators
  inputEmail = (): Locator => this.page.locator('#user-name');
  inputPassword = (): Locator => this.page.locator('#password');
  buttonSubmit = (): Locator => this.page.locator('#login-button');

  /**
   * Login to the application
   * @param  {string} username
   * @param  {string} password
   * @returns Promise
   */
  public async login(username: string, password: string): Promise<void> {
    await this.inputEmail().fill(username);
    await this.inputPassword().fill(password);
    await this.buttonSubmit().click();
  }

  public async open(): Promise<void> {
    this.page.goto('/');
  }

  /**
   * Verify is the user on the
   * @returns Promise
   */
  public async isOn(): Promise<boolean> {
    return await this.buttonSubmit().isVisible();
  }
}
