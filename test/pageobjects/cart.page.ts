import Page from './page.js';

class CartPage extends Page {
    public async cartPage() {
        await $('[data-test="shopping-cart-link"]').waitForClickable();
        await $('[data-test="shopping-cart-link"]').click();
    }
}
export default new CartPage();