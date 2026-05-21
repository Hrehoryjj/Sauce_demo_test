import page from './page.js';

class checkoutPage extends page {
    public get btnCheckout() {
        return $('[data-test="checkout"]');
    }
    
    public get inputFirstName() {
        return $('[data-test="firstName"]');
    }

    public get inputLastName() {
        return $('[data-test="lastName"]');
    }

    public get inputPostalCode() {
        return $('[data-test="postalCode"]');
    }

    public get btnContinue() {
        return $('[data-test="continue"]');
    }

    public get btnFinish() {
        return $('[data-test="finish"]');
    }

    public get errorMessage() {
        return $('[data-test="error"]');
    }
          
    public async checkoutSubmit() {
        await this.clickElement(this.btnCheckout);
    }

    public async checkout(firstname: string, lastname: string, postalCode: string) {
        await this.inputFirstName.setValue(firstname);
        await this.inputLastName.setValue(lastname);
        await this.inputPostalCode.setValue(postalCode);
        await this.btnContinue.scrollIntoView();
        await this.btnContinue.waitForClickable();
        await this.btnContinue.click();
    }

    public async checkoutFinish() {
        await this.clickElement(this.btnFinish);
    }
}

export default new checkoutPage();
