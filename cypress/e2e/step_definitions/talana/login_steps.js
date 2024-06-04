import { Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
import {loginPage} from "../../../pages/talana/LoginPage";

Given("I enter in to the login from page", () => {
  cy.visit(Cypress.env('baseUrl'));
});

When("I login with the valid username", () => {
  loginPage.completeLogin();
});

Then("I should be successfully logged in", () => {
  cy.url().should('include', '/remuneraciones');
});