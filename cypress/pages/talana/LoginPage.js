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
        cy.intercept('POST', '/es/api/login/check-login-methods').as('checkLoginMethods');
        this.clickButtonLogin();
        cy.wait('@checkLoginMethods').then((interception) => {
          expect(interception.response.statusCode).to.eq(200);
        })
        this.clickButtonLogin();
      }
  
    completeLogin() {
      this.typeUserName(Cypress.env('user'));
      this.typePassword(Cypress.env('password'));
      this.submitLogin();
    }
  }
  
  export const loginPage = new LoginPage();
  