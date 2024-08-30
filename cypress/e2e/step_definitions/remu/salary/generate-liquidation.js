import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { paymentAssistantPage } from "../../../../support/pages/Remu/salary/PaymentsAssistantPage";

When("I want to generate the payroll liquidations", () => {
    paymentAssistantPage.clickButtonStepOne();
    paymentAssistantPage.clickButtonStepOneConfirmation();
    paymentAssistantPage.clickButtonStepTwo();
});

Then("I visualize the progress window to continue with the generation", () => {
    paymentAssistantPage.verifyModalGenerate();  
    paymentAssistantPage.clickButtonStepThree();
});

When("I confirm the generation of payroll liquidations", () => {
    paymentAssistantPage.clickButtonStepFour();
});