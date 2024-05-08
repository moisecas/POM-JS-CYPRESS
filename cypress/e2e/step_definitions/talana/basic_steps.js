import { Given } from "@badeball/cypress-cucumber-preprocessor/steps";

Given("I see this basic step", () => {
  cy.log("Basic step detected");
});
