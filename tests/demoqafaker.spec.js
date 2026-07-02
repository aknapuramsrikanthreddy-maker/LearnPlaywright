import { test, expect } from '@playwright/test';


test('Verify demoqa Login with ENV', async ({ page }) => {
  
    await page.goto('https://demoqa.com/login', { timeout: 60000, waitUntil: 'domcontentloaded' });
    await page.getByRole('textbox', { name: 'UserName' }).fill(process.env.APP_USERNAME);
    await page.getByRole('textbox', { name: 'Password' }).fill(process.env.APP_PASSWORD);
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByText('Elements', { exact: true }).click();
    await page.locator('span').filter({ hasText: 'Text Box' }).click();
    await page.getByRole('textbox', { name: /Full Name/i }).fill(process.env.APP_FULL_NAME);
    await page.getByRole('textbox', { name: /name@example\.com/i }).fill(process.env.APP_EMAIL);
    await page.getByRole('textbox', { name: /Current Address/i }).fill(process.env.APP_CURRENT_ADDRESS);
    await page.locator('#permanentAddress').fill(process.env.APP_PERMANENT_ADDRESS);
    await page.getByRole('button', { name: 'Submit' }).click();
 
});
