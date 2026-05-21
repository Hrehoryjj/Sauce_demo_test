import loginPage from '../pageobjects/login.page.js';
import inventoryPage from '../pageobjects/inventory.page.js';
import cartPage from '../pageobjects/cart.page.js';

beforeEach(async () => {
        await browser.reloadSession(); 
        await loginPage.open();
        await loginPage.login('standard_user', 'secret_sauce');
    });

describe('inventory and navigation tests', () => {
    
    it('tc05 scenario a - simple logout', async () => {
        await loginPage.open();
        await loginPage.login('standard_user', 'secret_sauce');

        await inventoryPage.openBurgerMenu();
        await inventoryPage.clickLogout();

        const currentUrl = await inventoryPage.getCurrentUrl();
        await expect(currentUrl).toBe('https://www.saucedemo.com/');
    });

    it('tc05 scenario b - cart persists after logout', async () => {

        await inventoryPage.addItemToCart('backpack');

        await inventoryPage.openBurgerMenu();
        await inventoryPage.clickLogout();

        await loginPage.login('standard_user', 'secret_sauce');
        await cartPage.openCart();
        
        await expect(inventoryPage.cartItemName).toHaveText('Sauce Labs Backpack');

    });

    it('tc06 sorting products by all options', async () => {

        await inventoryPage.sortBy('Price (low to high)');
        const pricesLowHigh = await inventoryPage.getProductPrices();
        const sortedPricesLowHigh = [...pricesLowHigh].sort((a, b) => a - b);
        await expect(pricesLowHigh).toEqual(sortedPricesLowHigh);

        await inventoryPage.sortBy('Price (high to low)');
        const pricesHighLow = await inventoryPage.getProductPrices();
        const sortedPricesHighLow = [...pricesHighLow].sort((a, b) => b - a);
        await expect(pricesHighLow).toEqual(sortedPricesHighLow);

        await inventoryPage.sortBy('Name (A to Z)');
        const namesAZ = await inventoryPage.getProductNames();
        const sortedNamesAZ = [...namesAZ].sort();
        await expect(namesAZ).toEqual(sortedNamesAZ);

        await inventoryPage.sortBy('Name (Z to A)');
        const namesZA = await inventoryPage.getProductNames();
        const sortedNamesZA = [...namesZA].sort().reverse();
        await expect(namesZA).toEqual(sortedNamesZA);

    });

        it('tc07 footer social links', async () => {
        await loginPage.open();
        await loginPage.login('standard_user', 'secret_sauce');

        await inventoryPage.clickTwitter();
        const twitterHandles = await browser.getWindowHandles();
        await browser.switchToWindow(twitterHandles[1]);
        const twitterUrl = await inventoryPage.getCurrentUrl();
        await expect(twitterUrl).toContain('x.com');
        await browser.closeWindow();
        await browser.switchToWindow(twitterHandles[0]);

        await inventoryPage.clickFacebook();
        const facebookHandles = await browser.getWindowHandles();
        await browser.switchToWindow(facebookHandles[1]);
        const facebookUrl = await inventoryPage.getCurrentUrl();
        await expect(facebookUrl).toContain('facebook.com/saucelabs');
        await browser.closeWindow();
        await browser.switchToWindow(facebookHandles[0]);

        await inventoryPage.clickLinkedin();
        const linkedinHandles = await browser.getWindowHandles();
        await browser.switchToWindow(linkedinHandles[1]);
        const linkedinUrl = await inventoryPage.getCurrentUrl();
        await expect(linkedinUrl).toContain('linkedin.com');
        await browser.closeWindow();
        await browser.switchToWindow(linkedinHandles[0]);
    });



});
