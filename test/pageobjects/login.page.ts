import page from './page.js';

class loginPage extends page {
    
    public get inputUsername () {
        return $('[data-test="username"]');
    }

    public get inputPassword () {
        return $('[data-test="password"]');
    }

    public get btnSubmit () {
        return $('[data-test="login-button"]');
    }

    public get errorMessage () {
        return $('[data-test="error"]');
    }

    public open () {
        return super.open('');
    }

    public async login (username: string, password: string) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.waitForClickable();
        await this.btnSubmit.click();
    }
}

export default new loginPage();
