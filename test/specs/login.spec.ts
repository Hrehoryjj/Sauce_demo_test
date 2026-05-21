import loginPage from '../pageobjects/login.page.js';

describe('login tests', () => {
    it('tc01 login with valid credentials', async () => {
        await loginPage.open();
        await loginPage.login('standard_user', 'secret_sauce');
        const currentUrl = await loginPage.getCurrentUrl();
        await expect(currentUrl).toContain('/inventory.html');
    });

    it('tc02 login with invalid password', async () => {
        await loginPage.open();
        await loginPage.login('standard_user', 'wrong_password');
        await expect(loginPage.errorMessage).toHaveText(
            expect.stringContaining('Epic sadface: Username and password do not match any user in this service')
        );
    });

    it('tc03 login with locked out user', async () => {
        await loginPage.open();
        await loginPage.login('locked_out_user', 'secret_sauce');
        await expect(loginPage.errorMessage).toHaveText(
            expect.stringContaining('Epic sadface: Sorry, this user has been locked out.')
        );
    });

    it('tc04 login with empty fields', async () => {
        await loginPage.open();
        await loginPage.login('', '');
        await expect(loginPage.errorMessage).toHaveText(
            expect.stringContaining('Epic sadface: Username is required')
        );
    });
});
