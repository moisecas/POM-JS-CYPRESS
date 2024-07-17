import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { sideBarPage } from "../../../support/pages/talana/SideBar";
import { loginPage } from "../../../support/pages/talana/LoginPage";
import { paymentAssistantPage } from "../../../support/pages/Remu/PaymentsAssistantPage";
import { dashboardPage } from "../../../support/pages/talana/DashboardPage";

Given("I am logged in and on the payments assistant page", () => {
    cy.visit(Cypress.env("baseUrl"));
    loginPage.completeLogin();
    dashboardPage.verifyLogin(); 
    sideBarPage.enterToPaymentAssistant();
    paymentAssistantPage.goToSalary(); 
});

When("I have added all employees without terminated ones", () => {
    paymentAssistantPage.verifyTerminatedEmployeesOff(); 
    paymentAssistantPage.addAllEmployees(); 
    paymentAssistantPage.verifyMessage('Se agregaron'); 
});

When("I click on the step one", () => {
    paymentAssistantPage.clickButtonStepOne();
});

When("I confirm the generation of payroll liquidations", () => {
    paymentAssistantPage.clickButtonStepOneConfirmation();
});

When("I click on the step two", () => {
    paymentAssistantPage.clickButtonStepTwo();
});

When("I see the payroll liquidation processing window", () => {
    paymentAssistantPage.verifyModalGenerate();
});

When("I click on the step three", () => {
    paymentAssistantPage.clickButtonStepThree();
});

Then("I should see the payroll generation processing window", () => {
    paymentAssistantPage.verifyModalGenerateTwo();
});

Then("I visualize the print liquidations button", () => {
    paymentAssistantPage.clickButtonStepFour();
});