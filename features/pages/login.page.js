const BasePage = require("./base.page.js");

class LoginPage extends BasePage {
  get usernameInput() {
    return $("#user-name");
  }

  get passwordInput() {
    return $("#password");
  }

  get loginButton() {
    return $("#login-button");
  }

  get errorMessageContainer() {
    return $(".error-message-container");
  }

  async getErrorMessage() {
    return await this.errorMessageContainer.getText();
  }

  async inputCredentials(username, password) {
    await this.usernameInput.setValue(username);
    await this.passwordInput.setValue(password);
  }

  async clickLoginButton() {
    await this.loginButton.click();
  }
}

module.exports = new LoginPage();
