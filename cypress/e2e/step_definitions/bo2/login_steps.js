import { Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
import {loginPage} from "../../../support/pages/backoffice/LoginPage";
import { dashboardPage } from '../../../support/pages/backoffice/DashboardPage';

Given("I enter in to the login from page", () => {
  cy.visit(Cypress.env('baseUrl'));
});

When("I login with the valid username", () => {
  loginPage.completeLogin();
});

Then("I should be successfully logged in", () => {
  dashboardPage.verifyLogin(); 
});