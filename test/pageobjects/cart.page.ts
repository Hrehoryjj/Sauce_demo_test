import page from './page.js';

class cartPage extends page {
    public async openCart() {
        await $('[data-test="shopping-cart-link"]').waitForClickable();
        await $('[data-test="shopping-cart-link"]').click();
    }
}
export default new cartPage();