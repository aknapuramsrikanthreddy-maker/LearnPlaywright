import { test, expect } from '@playwright/test';

test('check addjobtitle', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByText('Job', { exact: true }).click();
  await page.getByRole('menuitem', { name: 'Job Titles' }).click();
  await page.getByRole('button', { name: ' Add' }).click();
  await page.getByRole('textbox').nth(1).fill('Srikanth Tester');
  await page.getByRole('textbox', { name: 'Type description here' }).fill('Testing Practise');
  await page.getByRole('textbox', { name: 'Add note' }).fill('Playwright course');
  await page.getByRole('button', { name: 'Save' }).click();
});