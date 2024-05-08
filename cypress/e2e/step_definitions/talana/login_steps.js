import { Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
import { loginPage } from "../../../pages/talana/LoginPage"; 

Given("I open the login page", () => {
  cy.visit(Cypress.env("remPe").baseUrl);
}); //busca en el .env el baseurl

When("I submit login credentials", () => {
   //loginPage.login(Cypress.env('remPe').user, Cypress.env('remPe').password); 
});

Then("I should be logged in", () => { 
  cy.url().should('include', '/dashboard');
});




