const { Given, When, Then } = require("@cucumber/cucumber");
const loginPage = require("../pages/login.page.js");

Given(
  "User is located on the main page of saucedemo website",
  async function () {
    await loginPage.open();
  }
);

When("User clicks {string} button", async function (buttonName) {
  await loginPage.clickSubmitButton(buttonName);
});

Then("User should see {string} error message", async function (errorMessage) {
  const actualError = await loginPage.getErrorMessage();
  expect(actualError).toBe(errorMessage);
});
