class LoginPage {
    elements = {
      userNameInput: () => cy.get('[data-cy="talana-user-input"]'),
      passwordInput: () => cy.get('[data-cy="talana-password-input"]'),
      buttonSubmit: () => cy.get('[data-cy="talana-login-button"]'),
    }
  
    typeUserName(username) {
      this.elements.userNameInput().type(username);
    }
  
    typePassword(password) {
      this.elements.passwordInput().type(password, { log: false });
    }
  
    clickButtonLogin() {
      this.elements.buttonSubmit().click();
    }
  
    submitLogin() {
      this.clickButtonLogin();
    }
  
    completeLogin() {
      this.typeUserName(Cypress.env("remPe").user);
      this.typePassword(Cypress.env("remPe").password);
      this.submitLogin();
      this.submitLogin();
    }
  }
  
  export const loginPage = new LoginPage();
  