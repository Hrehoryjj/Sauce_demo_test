import loginPage from "../pageobjects/login.page.js";
import inventoryPage from "../pageobjects/inventory.page.js";
import cartPage from "../pageobjects/cart.page.js";
import checkoutPage from "../pageobjects/checkout.page.js";

beforeEach(async () => {
    await browser.reloadSession(); 
    await loginPage.open();
    await loginPage.login('standard_user', 'secret_sauce');
    });

describe('checkout tests', () => {

    it('tc08 Valid checkout with one product', async () => {
        await inventoryPage.addItemToCart('backpack');
        await cartPage.openCart();
        await checkoutPage.checkoutSubmit();
        await checkoutPage.checkout('Tester', 'Testerovic', '00001');
        await checkoutPage.checkoutFinish();

        const currentUrl = await checkoutPage.getCurrentUrl();
        await expect(currentUrl).toContain('/checkout-complete.html');
    });

    it('tc09 Valid checkout with multiple products', async () => {
        await inventoryPage.addItemToCart('backpack');
        await inventoryPage.addItemToCart('bike-light');
        await inventoryPage.addItemToCart('bolt-t-shirt');
        await cartPage.openCart();
        await checkoutPage.checkoutSubmit();
        await checkoutPage.checkout('Tester', 'Testerovic', '00001');
        await checkoutPage.checkoutFinish();

        const currentUrl = await checkoutPage.getCurrentUrl();
        await expect(currentUrl).toContain('/checkout-complete.html');
    });

    it('tc10 Checkout with invalid information', async () => {
        await inventoryPage.addItemToCart('backpack');
        await cartPage.openCart();
        await checkoutPage.checkoutSubmit();
        await checkoutPage.checkout('111', '111', 'a');
        await expect(checkoutPage.errorMessage).toHaveText(
            expect.stringContaining('Error: invalid information')
        );
    });

    it('tc11 Checkout with whitespace information', async () => {
        await inventoryPage.addItemToCart('bike-light');
        await cartPage.openCart();
        await checkoutPage.checkoutSubmit();
        await checkoutPage.checkout(' ', ' ', ' ');
        await expect(checkoutPage.errorMessage).toHaveText(
            expect.stringContaining('Error: First Name is required')
        );
    });

    it('tc12 Checkout with empty information', async () => {
        await inventoryPage.addItemToCart('onesie');
        await cartPage.openCart();
        await checkoutPage.checkoutSubmit();
        await checkoutPage.checkout('', '', '');

        await expect(checkoutPage.errorMessage).toHaveText(
            expect.stringContaining('Error: First Name is required')
        );
    });

    it('tc13 Checkout without products', async () => {
        await cartPage.openCart();
        await checkoutPage.checkoutSubmit();
        await expect(checkoutPage.errorMessage).toHaveText(
            expect.stringContaining('Cart is empty')
        );
    });
});
