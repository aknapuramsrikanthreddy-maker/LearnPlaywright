import { test, expect } from '@playwright/test';

test('exl loginpage', async ({ page }) => {
    console.log('STEP: Navigate to OrangeHRM login page');
    await page.goto('https://sts.exlservice.com/adfs/ls/idpinitiatedsignon.aspx?logintorp=https://www.allsechro.com/exlpayroll/', { timeout: 90000, waitUntil: 'domcontentloaded' });
    console.log('STEP: Enter admin credentials');
    await page.getByRole('textbox', { name: 'User Account' }).fill('nagula250134@exlservice.com');
    await page.getByRole('textbox', { name: 'Password' }).fill('Chandu@2411');
    await page.getByRole('button').click();
    await page.locator('body.zf--submenus-effect-fade.zf--right-column-absent.zf--left-column-absent.zf-theme-skin--sid.zf--parent-platform-Joomla.zf--parent-platform-release-class-Joomla3')
    await page.locator('body.zf--submenus-effect-fade.zf--right-column-absent.zf--left-column-absent.zf-theme-skin--sid.zf--parent-platform-Joomla.zf--parent-platform-release-class-Joomla3')
    await page.locator('body.zf--submenus-effect-fade.zf--right-column-absent.zf--left-column-absent.zf-theme-skin--sid.zf--parent-platform-Joomla.zf--parent-platform-release-class-Joomla3')
});


