import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { paymentAssistantSalaryPage } from "../../../../support/pages/Remu/salary/PaymentsAssistantSalaryPage";

When("I want to generate the payroll liquidations", () => {
    paymentAssistantSalaryPage.clickButtonStepOne();
    paymentAssistantSalaryPage.clickButtonStepOneConfirmation();
    paymentAssistantSalaryPage.clickButtonStepTwo();
});

Then("I visualize the progress window to continue with the generation", () => {
    paymentAssistantSalaryPage.verifyModalGenerate();  
    paymentAssistantSalaryPage.clickButtonStepThree();
});

When("I confirm the generation of payroll liquidations", () => {
    paymentAssistantSalaryPage.clickButtonStepFour(); 
});