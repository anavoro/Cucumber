const { Given, When, Then } = require('@cucumber/cucumber');
const loginPage = require('../pages/login.page.js');

Given('the user is on login page', async function () {
    await loginPage.open();
});

When('the user leaves the username blank and enters the password {string}', async function (password) {
    await loginPage.login('', password);
});

When('clicks on Login button', async function () {
    await loginPage.btnSubmit.click();
});

Then('the user must remain on login page displaying a message {string}', async function (errorMessage) {
    const actualError = await loginPage.getErrorMessage();
    expect(actualError).toBe(errorMessage);
});