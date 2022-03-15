import { test, expect } from '@playwright/test';
import * as ts from '../core/base/base.test';
import HomePage from './page/home.page';
import LoginPage from './page/login.page';

export let homePage: HomePage;
export let loginPage: LoginPage;

test.beforeEach(async () => {
  homePage = new HomePage(ts.page_context);
  loginPage = new LoginPage(ts.page_context);
});

test.describe('Test suite', async () => {
  // test('First', async () =>{
  //   const pag = await homePage.openHomePage();
  //   expect(pag.locator('[data-attrid="title"]'), 'test');
  // });

  test('Second', async () => {
    await homePage.openHomePage();
    await homePage.gotoLogin();
    await loginPage.login('hf_challenge_123456@hf123456.com', '12345678');
    expect(await loginPage.isOn()).toBeTruthy();
  });
});
