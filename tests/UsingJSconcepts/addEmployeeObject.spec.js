import { test, expect } from '@playwright/test';

test('Add employee using my object details', async ({ page }) => {
  const students = {
    firstname: 'Srikanth',
    lastname: 'Reddy',
    course: 'Playwright',
    City: 'Hyderabad'
  };

  console.log(students.firstname);

  students['course'] = 'JavaScript';

  students.mobile = 9390932445;
  students.email = 'srikanth.reddy@example.com';

  delete students.mobile;

  students.address = {
    street: '',
    pincode: 0
  };

  students.address.street = 'Karmanghat';
  students.address.pincode = 560079;

  const courses = {
    course1: 'Playwright',
    course2: 'JavaScript',
    course3: 'Python',
    course4: 'Java'
  };

  for (let key in courses) {
    console.log('Loop starts here');
    console.log('Key is: ' + key);
    console.log('Value is: ' + courses[key]);
    console.log(key + ' : ' + courses[key]);
    console.log('Loop ends here');
  }

  const loginDetails = {
    username: 'Admin',
    password: 'admin123'
  };

  const employeeId = Date.now().toString().slice(-6);

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  await page.getByPlaceholder('Username').fill(loginDetails.username);
  await page.getByPlaceholder('Password').fill(loginDetails.password);
  await page.getByRole('button', { name: 'Login' }).click();

  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole('button', { name: 'Add' }).click();

  await page.getByPlaceholder('First Name').fill(students.firstname);
  await page.getByPlaceholder('Last Name').fill(students.lastname);

  await page
    .locator('xpath=(//label[text()="Employee Id"]/following::input)[1]')
    .fill(employeeId);

  await page.getByRole('button', { name: 'Save' }).click();

  await expect(page.getByText(students.firstname + ' ' + students.lastname)).toBeVisible();
});