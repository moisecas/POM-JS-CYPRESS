import { Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
import {loginPage} from "../../../pages/talana/LoginPage";

Given("I am a user with username {string}", (environment) => {
  cy.visit(Cypress.env(environment).baseUrl);
});

When("I log in with the username {string}", (environment) => {
  loginPage.completeLogin(environment);
});

Then("I should be successfully logged in", () => {
  cy.url().should('include', '/remuneraciones');  
});





