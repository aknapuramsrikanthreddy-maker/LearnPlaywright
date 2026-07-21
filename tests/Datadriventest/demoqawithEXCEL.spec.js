import { test, expect } from '@playwright/test';


import { getExcelData } from '../../utils/ExcelUtility.js';


test('Verify demoqa Login with EXCEL', async ({ page }) => {
  
     const excelData = await getExcelData();
    const user = excelData[0];

    await page.goto('https://demoqa.com/login');

    await page.getByRole('textbox', { name: 'UserName' }).fill(user.username);
    await page.getByRole('textbox', { name: 'Password' }).fill(user.password);
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page.locator('#userName-value')).toHaveText(user.username);

    await page.goto('https://demoqa.com');

    await page.locator('.card').filter({ hasText: 'Elements' }).click();
    await page.getByText('Text Box').click();

    await page.getByRole('textbox', { name: /Full Name/i }).fill(user.fullname);
    await page.getByRole('textbox', { name: /name@example\.com/i }).fill(user.email);
    await page.getByRole('textbox', { name: /Current Address/i }).fill(user.currentaddress);
    await page.locator('#permanentAddress').fill(user.permanentaddress);

    await page.getByRole('button', { name: 'Submit' }).click();

});