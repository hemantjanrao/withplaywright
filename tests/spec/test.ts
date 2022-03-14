import { test, expect, Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc');
});

test.describe('Test suite', () => {
    test('First test', async({ page })=> {
        await page.goto('https://www.google.com');
        await page.locator('input[name="q"]').fill('test');
        await page.locator('input[name="q"]').press('Escape');
        await page.locator('input[name="q"]').press('Enter');
        expect(page.locator('[data-attrid="title"]'), "test");
    });
});