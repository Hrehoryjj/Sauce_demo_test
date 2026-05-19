import LoginPage from '../pageobjects/login.page.js';

describe('login tests', () => {
    it('tc01 login with valid credentials', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
        await expect(await browser.getUrl()).toContain('/inventory.html');
    });
    it('tc02 login with invalid credentials', async () => {
        await LoginPage.open();
        await LoginPage.login('error', 'error');
        const errorContainer = $('[data-test="error"]');
        await expect(errorContainer).toHaveText(
            expect.stringContaining('Epic sadface: Username and password do not match any user in this service')
        );
    });
    it('tc03 login with empty credentials', async () => {
        await LoginPage.open();
        await LoginPage.login('', '');
        const errorContainer = $('[data-test="error"]');
        await expect(errorContainer).toHaveText(
            expect.stringContaining('Epic sadface: Username is required')
        );
    });
});