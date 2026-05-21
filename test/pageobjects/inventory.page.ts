import page from './page.js';

class inventoryPage extends page {
    public get sortDropdown() {
        return $('[data-test="product-sort-container"]');
    }

    public get burgerMenuButton() {
        return $('#react-burger-menu-btn');
    }

    public get logoutLink() {
        return $('[data-test="logout-sidebar-link"]');
    }

    public get twitterLink() {
        return $('[data-test="social-twitter"]');
    }

    public get facebookLink() {
        return $('[data-test="social-facebook"]');
    }

    public get linkedinLink() {
        return $('[data-test="social-linkedin"]');
    }

    public get cartItemName() {
        return $('[data-test="inventory-item-name"]');
    }

    public getAddToCartButton(productName: string) {
        return $(`[data-test="add-to-cart-sauce-labs-${productName}"]`);
    }

    public async sortBy(option: string) {
        await this.sortDropdown.selectByVisibleText(option);
    }

     public async getProductNames(): Promise<string[]> {
        const items = await $$('[data-test="inventory-item-name"]');
        const itemsArray = Array.from(items);
        return Promise.all(itemsArray.map(async (item) => await item.getText()));
    }

    public async getProductPrices(): Promise<number[]> {
        const items = await $$('[data-test="inventory-item-price"]');
        const itemsArray = Array.from(items);
        const texts = await Promise.all(itemsArray.map(async (item) => await item.getText()));
        return texts.map(t => parseFloat(t.replace('$', '')));
    }

    public async addItemToCart(productName: string) {
        const button = await this.getAddToCartButton(productName);
        await this.clickElement(button);
    }

    public async openBurgerMenu() {
        await this.burgerMenuButton.click();
    }

    public async clickLogout() {
        await this.logoutLink.waitForClickable();
        await this.clickElement(this.logoutLink);
    }

    public async clickTwitter() {
        await this.clickElement(this.twitterLink);
    }

    public async clickFacebook() {
        await this.clickElement(this.facebookLink);
    }

    public async clickLinkedin() {
        await this.clickElement(this.linkedinLink);
    }
}

export default new inventoryPage();
