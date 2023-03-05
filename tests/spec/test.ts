/* eslint-disable no-console */
import { test, expect, request } from '@playwright/test';
import { page, page_context } from '../core/base/base.test';
import LoginPage from './page/login.page';

export let loginPage: LoginPage;

test.beforeEach(async () => {
  loginPage = new LoginPage(page);
});

test.describe('Authentication', async () => {
  test('Authenticaiton using UI', async () => {
    await loginPage.login('h-janrao', '@Test1234');
    await expect(page.locator('li.home')).toBeVisible();
  });

  test('Authentication using API and then continue UI test', async () => {
    let response = await page.request.post('/parabank/login.htm', {
      form: {
        username: 'h-janrao',
        password: '@Test1234'
      }
    });

    expect(response.status()).toBe(200);

    await page.goto('/');
    await expect(page.locator('li.home')).toBeVisible();
  });
});
