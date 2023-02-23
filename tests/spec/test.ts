/* eslint-disable no-console */
import { test, expect, request } from '@playwright/test';
import * as ts from '../core/base/base.test';
import LoginPage from './page/login.page';

export let loginPage: LoginPage;

test.beforeEach(async () => {
  loginPage = new LoginPage(ts.page);
});

test.describe('Test suite', async () => {
  test('First', async () => {
    await loginPage.open();
    await loginPage.login('standard_user', 'secret_sauce'); 
    expect(ts.page.locator("select")).toHaveClass("product_sort_container")
  });
});
