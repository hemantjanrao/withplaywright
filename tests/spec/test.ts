/* eslint-disable no-console */
import { test, expect, request } from '@playwright/test';
import * as ts from '../core/base/base.test';
import HomePage from './page/home.page';
import LoginPage from './page/login.page';

export let homePage: HomePage;
export let loginPage: LoginPage;

test.beforeEach(async () => {
  homePage = new HomePage(ts.page);
  loginPage = new LoginPage(ts.page);
});

test.describe('Test suite', async () => {
  test('First', async ({ request }) => {
    await homePage.openHomePage();
    await homePage.gotoLogin();
    await loginPage.login('hf_challenge_123456@hf123456.com', '12345678');
    expect(await loginPage.isOn()).toBeTruthy();
    const _response = await request.get('/index.php?controller=history');
    expect(_response.status()).toBe(200);
    expect(_response.ok()).toBeTruthy();
  });
});
