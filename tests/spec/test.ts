/* eslint-disable no-console */
import { test, expect, request} from '@playwright/test';
import { page, page_context } from '../core/base/base.test';
import LoginPage from './page/login.page';

export let loginPage: LoginPage;

test.beforeEach(async () => {
  loginPage = new LoginPage(page);
});

test.describe('Authenticaiton using UI', async () => {
  test('First', async () => {
    await loginPage.login('h-janrao', '@Test1234');
    await expect(page.locator('li.home')).toBeVisible();
  });

  test('Authentication using API and then continue UI test', async () => {
    const formData = new URLSearchParams();
    formData.append('username', 'h-janrao');
    formData.append('password', '@Test1234');

    let response = await page.request.post('/parabank/login.htm', {
    ignoreHTTPSErrors: true,
    headers:{
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: formData.toString(),
    maxRedirects: 1
    });
    
    expect(response.status()).toBe(200);

    await page.goto("/");
    await expect(page.locator('li.home')).toBeVisible();
  });

});
