class LoginPage {
    elements = {
      userNameInput: () => cy.get('.validate'),
      passwordInput: () => cy.get('.input-group > .form-control'),
      buttonSubmit: () => cy.get('.btn'), 
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
        // cy.intercept('POST', '/es/api/login/check-login-methods').as('checkLoginMethods');
        // this.clickButtonLogin();
        // cy.wait('@checkLoginMethods').then((interception) => {
        //   expect(interception.response.statusCode).to.eq(200);
        // })
        this.clickButtonLogin();
      }
  
    completeLogin() {
      this.typeUserName(Cypress.env('user'));
      this.typePassword(Cypress.env('password'));
      this.submitLogin();
    }
  }
  
  export const loginPage = new LoginPage();
  