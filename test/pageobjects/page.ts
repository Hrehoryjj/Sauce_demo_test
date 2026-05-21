import { browser } from '@wdio/globals';

export default class page {
    public open(path: string) {
        return browser.url(`https://saucedemo.com/${path}`);
    }

    public async clickElement(element: any) {
        await element.waitForExist();
        await element.scrollIntoView();
        await element.click();
}

    public async getCurrentUrl() {
        return await browser.getUrl();
    }
}
