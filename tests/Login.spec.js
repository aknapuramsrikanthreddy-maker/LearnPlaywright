import { test, expect } from '@playwright/test';

test('Verify Login Page', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', { timeout: 60000, waitUntil: 'domcontentloaded' });
  await expect(page.getByRole('img', { name: 'company-branding' })).toBeVisible();
});

test('Verify Login with Valid Credentials', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', { timeout: 60000, waitUntil: 'domcontentloaded' });
  await page.getByRole('img', { name: 'company-branding' }).click();
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('link', { name: 'Dashboard' })).toBeVisible();
  await expect(page.getByText('Time at Work')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
});

test('Verify Login with Invalid Credentials', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', { timeout: 60000, waitUntil: 'domcontentloaded' });
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('sgsdgkjsgsdg');

  await page.getByRole('button', { name: 'Login' }).click(),


  // Assertion: give the locator more time in case rendering is slightly delayed.
  await expect(page.getByText('Invalid credentials')).toBeVisible({ timeout: 10000 });
});

test('Verify Login with out entering User id and Password', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', { timeout: 60000, waitUntil: 'domcontentloaded' });
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('Required').first()).toBeVisible();
  await expect(page.getByText('Required').nth(1)).toBeVisible();
});




test('Test Login with Valid Credentials', async ({ page }) => {
  // Test timeout: total time allowed for this test
  test.setTimeout(120000);

  // Default timeout for actions like click(), fill(), locator waits
  page.setDefaultTimeout(30000);

  // Default timeout for navigations like page.goto()
  page.setDefaultNavigationTimeout(60000);

  await page.goto(
    'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
    {
      timeout: 60000,
      waitUntil: 'domcontentloaded',
    }
  );

  await page
    .getByRole('textbox', { name: 'Username' })
    .fill('Admin', { timeout: 10000 });
  console.log('Status: Username entered successfully');

  await page
    .getByRole('textbox', { name: 'Password' })
    .fill('admin123', { timeout: 10000 });
  console.log('Status: Password entered successfully');

  await page
    .getByRole('button', { name: 'Login' })
    .click({ timeout: 15000 });
  console.log('Status: Login button clicked');

  await expect(page.getByRole('link', { name: 'Dashboard' }))
    .toBeVisible({ timeout: 20000 });
  console.log('Status: Dashboard link is visible');

  await expect(page.getByText('Time at Work'))
    .toBeVisible({ timeout: 20000 });
  console.log('Status: Time at Work text is visible');

  await expect(page.getByRole('heading', { name: 'Dashboard' }))
    .toBeVisible({ timeout: 20000 });
  console.log('Status: Dashboard heading is visible');

  // Explicit wait timeout example
  await page.waitForLoadState('networkidle', { timeout: 30000 });
  console.log('Status: Page reached networkidle');
  });