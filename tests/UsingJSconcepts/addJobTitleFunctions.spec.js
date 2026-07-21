import { test, expect } from '@playwright/test';

// Function with return
function getJobTitle() {
  return 'Srikanth Tester ' + Date.now().toString().slice(-6);
}

//  Default parameter
function greetUser(name = 'Guest') {
  console.log('Hello ' + name);
}

//  Function with parameters
function printLoginDetails(username, password) {
  console.log('Username is ' + username);
  console.log('Password is ' + password);
}

//  Function calling another function
function printStartMessage() {
  console.log('Test started');
}

function startTest() {
  printStartMessage();
  console.log('OrangeHRM Add Job Title test running');
}

//  Playwright style function
async function login(page, username, password) {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByPlaceholder('Username').fill(username);
  await page.getByPlaceholder('Password').fill(password);
  await page.getByRole('button', { name: 'Login' }).click();
}

test('Add job title using function concepts', async ({ page }) => {
  startTest();

  greetUser('Srikanth');
  greetUser();

  const username = 'Admin';
  const password = 'admin123';

  printLoginDetails(username, password);

  const jobTitle = getJobTitle();

  await login(page, username, password);

  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByText('Job', { exact: true }).click();
  await page.getByRole('menuitem', { name: 'Job Titles' }).click();
  await page.getByRole('button', { name: /Add/ }).click();

  await page.getByRole('textbox').nth(1).fill(jobTitle);
  await page.getByRole('textbox', { name: 'Type description here' }).fill('Testing Practice');
  await page.getByRole('textbox', { name: 'Add note' }).fill('Playwright course');

  await page.getByRole('button', { name: 'Save' }).click();

  await expect(page.getByText(jobTitle)).toBeVisible();
});