const BasePage = require("./base.page.js");

class LoginPage extends BasePage {
  get errorMessageContainer() {
    return $(".error-message-container");
  }

  async getErrorMessage() {
    return await this.errorMessageContainer.getText();
  }

  async clickSubmitButton(buttonName) {
    await $(`input[type=submit][value=${buttonName}]`).click();
  }
}

module.exports = new LoginPage();
