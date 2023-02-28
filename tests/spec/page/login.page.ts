import { Locator, Page } from '@playwright/test';
import BasePage from '../../core/base/base.page';

export default class LoginPage extends BasePage {
  private inputEmail: Locator;
  private inputPassword: Locator;
  private buttonSubmit: Locator;

  constructor(page: Page) {
    super(page);
    this.inputEmail = this.page.locator('#user-name');
    this.inputPassword = this.page.locator('#password');
    this.buttonSubmit = this.page.locator('#login-button');
  }

  /**
   * Login to the application
   * @param  {string} username
   * @param  {string} password
   * @returns Promise<void>
   */
  public async login(username: string, password: string): Promise<void> {
    this.page.goto("/");
    await this.inputEmail.fill(username);
    await this.inputPassword.fill(password);
    await this.buttonSubmit.click();
  }

  /**
   * Verify whether the user is on the login page
   * @returns Promise<boolean>
   */
  public async isOn(): Promise<boolean> {
    return await this.buttonSubmit.isVisible();
  }
}
