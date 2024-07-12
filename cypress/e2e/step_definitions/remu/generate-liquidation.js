import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { sideBarPage } from "../../../support/pages/talana/SideBar";
import { loginPage } from "../../../support/pages/talana/LoginPage";
import { paymentAssistantPage } from "../../../support/pages/Remu/PaymentsAssistantPage";
import { dashboardPage } from "../../../support/pages/talana/DashboardPage";

Given("I am logged in and prepared to generate liquidation", () => {
    cy.visit(Cypress.env("baseUrl"));
    loginPage.completeLogin();
    dashboardPage.verifyLogin(); 
    sideBarPage.enterToPaymentAssistant();
    paymentAssistantPage.goToSalary();  
    paymentAssistantPage.verifyTerminatedEmployeesOff();  
    paymentAssistantPage.addAllEmployees();  
    paymentAssistantPage.verifyMessage('Se agregaron'); 
});

When("I complete the liquidation steps", () => {
    paymentAssistantPage.clickButtonStepOne();
    paymentAssistantPage.clickButtonStepOneConfirmation();
    paymentAssistantPage.clickButtonStepTwo();
    paymentAssistantPage.verifyModalGenerate();
    paymentAssistantPage.clickButtonStepThree();
    paymentAssistantPage.verifyModalGenerateTwo();
});

Then("I should visualize the print liquidations button", () => {
    paymentAssistantPage.clickButtonStepFour();
});