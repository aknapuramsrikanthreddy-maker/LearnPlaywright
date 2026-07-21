import { test, expect } from '@playwright/test';

import loginData from "../../testdata/login.json";


test('Verify demoqa Login with JSON', async ({ page }) => {
  
    await page.goto('https://demoqa.com/login', { timeout: 60000, waitUntil: 'domcontentloaded' });
    await page.getByRole('textbox', { name: 'UserName' }).fill(loginData.username);
    await page.getByRole('textbox', { name: 'Password' }).fill(loginData.password);
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByText('Elements', { exact: true }).click();
    await page.locator('span').filter({ hasText: 'Text Box' }).click();
    await page.getByRole('textbox', { name: /Full Name/i }).fill(loginData.fullname);
    await page.getByRole('textbox', { name: /name@example\.com/i }).fill(loginData.email);
    await page.getByRole('textbox', { name: /Current Address/i }).fill(loginData.currentaddress);
    await page.locator('#permanentAddress').fill(loginData.permanentaddress);
    await page.getByRole('button', { name: 'Submit' }).click();
 
});
