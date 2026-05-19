import Page from './page.js';

class CheckoutPage extends Page {
    public async checkoutSubmit() {
        await $('[data-test="checkout"]').scrollIntoView();
        await $('[data-test="checkout"]').click();
    }
    public get inputFirstName () {
            return $('[data-test="firstName"]');
        }
    
        public get inputLastName () {
            return $('[data-test="lastName"]');
        }
    
        public get inputPostalCode () {
            return $('[data-test="postalCode"]');
        }
    
        public get btnSubmit () {
            return $('[data-test="continue"]');
        }
          
       
        public async checkout (firstname: string, lastname: string, postalCode: string) {
            await this.inputFirstName.setValue(firstname);
            await this.inputLastName.setValue(lastname);
            await this.inputPostalCode.setValue(postalCode);
            await this.btnSubmit.scrollIntoView();
            await this.btnSubmit.waitForClickable();
            await this.btnSubmit.click();
        }

        public async checkoutFinish() {
            await $('[data-test="finish"]').scrollIntoView();
            await $('[data-test="finish"]').click();
        }
}
export default new CheckoutPage();