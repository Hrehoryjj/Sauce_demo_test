
class InventoryPage {
    public async addFirstItemToCart() {
        await $('[data-test="add-to-cart-sauce-labs-backpack"]').scrollIntoView();
        await $('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    }
    public async addSecondItemToCart() {
        await $('[data-test="add-to-cart-sauce-labs-bike-light"]').scrollIntoView();
        await $('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    }   
    public async addThirdItemToCart() {
        await $('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').scrollIntoView();
        await $('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
    }
    public async addFourthItemToCart() {
        await $('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').scrollIntoView();
        await $('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
    }
    public async addFifthItemToCart() {
        await $('[data-test="add-to-cart-sauce-labs-onesie"]').scrollIntoView();
        await $('[data-test="add-to-cart-sauce-labs-onesie"]').click();
    }
    public async addSixthItemToCart() {
        await $('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').scrollIntoView();
        await $('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click();
    }
}
export default new InventoryPage();