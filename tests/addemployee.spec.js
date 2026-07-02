import { test, expect } from '@playwright/test';

test('Verify Addemployee with basic details', async ({ page }) => {
  console.log('STEP: Navigate to OrangeHRM login page');
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', { timeout: 90000, waitUntil: 'domcontentloaded' });
  console.log('STEP: Enter admin credentials');
  await page.getByRole('textbox', { name: 'Username' }).fill('admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  console.log('STEP: Open PIM and navigate to Add Employee');
  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole('link', { name: 'Add Employee' }).click();
  console.log('STEP: Fill employee first and last name');
  await page.getByRole('textbox', { name: 'First Name' }).fill('Srikanth');
  await page.getByRole('textbox', { name: 'Last Name' }).fill('Reddy');
  await page.getByRole('button', { name: 'Save' }).click();
});


test('Verify Valodation Message', async ({ page }) => {
  console.log('STEP: Navigate to OrangeHRM login page');
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', { timeout: 60000, waitUntil: 'domcontentloaded' });
  console.log('STEP: Enter admin credentials');
  await page.getByRole('textbox', { name: 'Username' }).fill('admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  console.log('STEP: Open PIM and navigate to Add Employee');
  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole('link', { name: 'Add Employee' }).click();
  console.log('STEP: Enter invalid values to trigger validation messages');
  await page.getByRole('textbox', { name: 'First Name' }).fill('dfsdfdsfgdsgfdhdfhgfhgfhhfghgfhfdh');
  await page.getByRole('textbox', { name: 'Middle Name' }).fill('hljkdshfkdsjfldmfkdhslfjds;kgfsdfkl');
  await page.getByRole('textbox', { name: 'Last Name' }).fill('jkdfdsjlfnkds.fnmdsfldsflkdsnfksdfn');
  await page.getByRole('textbox').nth(4).fill('ljhdlkfskdsfkdsfm,dsfndsjfdslfngdskgnldskgnldsgn');
  console.log('STEP: Assert validation messages are visible');
  await expect(page.getByText('Should not exceed 30').first()).toBeVisible();
  await expect(page.getByText('Should not exceed 30').nth(1)).toBeVisible();
  await expect(page.getByText('Should not exceed 30').nth(2)).toBeVisible();
  await expect(page.getByText('Should not exceed 10')).toBeVisible();
});