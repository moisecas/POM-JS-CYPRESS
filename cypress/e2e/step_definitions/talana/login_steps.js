import { Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
import {loginPage} from "../../../pages/talana/LoginPage";

Given("I am a user with username {string}", () => {
  cy.visit(Cypress.env('baseUrl'));
});

When("I log in with the username {string}", () => {
  loginPage.completeLogin();
});

Then("I should be successfully logged in", () => {
  cy.url().should('include', '/remuneraciones');  
});





