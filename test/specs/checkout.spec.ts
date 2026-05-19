import LoginPage from "../pageobjects/login.page.js";
import CartPage from "../pageobjects/cart.page.js";
import CheckoutPage from "../pageobjects/checkout.page.js";
import inventoryPage from "../pageobjects/inventory.page.js";

beforeEach(async () => {
    await LoginPage.open();
    await LoginPage.login('standard_user', 'secret_sauce');
});

describe('checkout tests', () => {

    it('tc04 Checkout with product and valid information', async () => {
        await inventoryPage.addFirstItemToCart();
        await CartPage.cartPage();
        await CheckoutPage.checkoutSubmit();
        await CheckoutPage.checkout('tester', 'testerovic', '00001');
        await CheckoutPage.checkoutFinish();
        await expect(await browser.getUrl()).toContain('/checkout-complete.html');
    });

    it('tc05 Checkout with product and valid information', async () => {
        await inventoryPage.addFirstItemToCart();
        await inventoryPage.addSecondItemToCart();
        await inventoryPage.addThirdItemToCart();
        await CartPage.cartPage();
        await CheckoutPage.checkoutSubmit();
        await CheckoutPage.checkout('tester', 'testerovic', '00001');
        await CheckoutPage.checkoutFinish();
        await expect(await browser.getUrl()).toContain('/checkout-complete.html');
    });

    it('tc06 Checkout with product and invalid information', async () => {
        await inventoryPage.addFirstItemToCart();
        await CartPage.cartPage();
        await CheckoutPage.checkoutSubmit();
        await CheckoutPage.checkout('111', '111', 'a');
        await CheckoutPage.checkoutFinish();
        const errorContainer = $('[data-test="error"]');
        await expect(errorContainer).toHaveText(
            expect.stringContaining('Invalid name and postal code')
        );
    });

    it('tc07 Checkout with product and invalid information', async () => {
        await inventoryPage.addFirstItemToCart();
        await CartPage.cartPage();
        await CheckoutPage.checkoutSubmit();
        await CheckoutPage.checkout(' ', ' ', ' ');
        await CheckoutPage.checkoutFinish();
        const errorContainer = $('[data-test="error"]');
        await expect(errorContainer).toHaveText(
            expect.stringContaining('Error: First Name is required')
        );
    });

    it('tc08 Checkout with product and empty information', async () => {
        await inventoryPage.addFirstItemToCart();
        await CartPage.cartPage();
        await CheckoutPage.checkoutSubmit();
        await CheckoutPage.checkout('', '', '');
        const errorContainer = $('[data-test="error"]');
        await expect(errorContainer).toHaveText(
            expect.stringContaining('Error: First Name is required')
        );
    }); 

    it('tc09 Checkout without products', async () => {
        await CartPage.cartPage();
        await CheckoutPage.checkoutSubmit();
        await CheckoutPage.checkout('tester', 'testerovic', '00001');
        await CheckoutPage.checkoutFinish();
        const errorContainer = $('[data-test="error"]');
        await expect(errorContainer).toHaveText(
            expect.stringContaining('Error: Your cart is empty')
        );
    });
});