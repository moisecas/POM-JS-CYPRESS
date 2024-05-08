class LoginPage {
    elements = {
        userNameInput: () => cy.get('[data-cy="talana-user-input"]'),
        passwordInput: () => cy.get('[data-cy="talana-password-input"]'),
        buttonSubmit: () => cy.get('[data-cy="talana-login-button"]'),
        // errorWrapper: () => cy.get('.errors-wrapper'), validar
    }


    typeUserName(username){
        this.elements.userNameInput().type(username);
    }

    typePassword(password) {
        this.elements.passwordInput().type(password, { log: false });
    }

    clickButtonLogin() {
        this.elements.buttonSubmit().click();
    }

    submitLogin(environment){
        // cy.intercept('POST', (Cypress.env(environment).baseUrl + "/es/api/login/check-login-methods")).as('checkLoginMethods');
        this.clickButtonLogin();
        // cy.wait('@checkLoginMethods').then((interception) => {
        //     expect(interception.response.statusCode).to.eq(200);
        // })
        this.clickButtonLogin();
    }

    completeLogin(environment){
        this.typeUserName(Cypress.env(environment).user);
        this.typePassword(Cypress.env(environment).password);
        this.submitLogin(environment);
    }  
}

export const loginPage = new LoginPage(); 