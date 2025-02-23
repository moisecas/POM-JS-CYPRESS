class LoginPage {
    elements = {
      userNameInput: () => cy.get('.validate'),
      passwordInput: () => cy.get('.input-group > .form-control'),
      buttonSubmit: () => cy.get('.btn')   
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
      this.typeUserName(Cypress.env('user'));
      this.typePassword(Cypress.env('password'));
      this.submitLogin();
    }
  }
  
  export const loginPage = new LoginPage();
  