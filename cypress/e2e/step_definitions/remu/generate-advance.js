import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { paymentsAssistantAdvancePage } from "../../../support/pages/Remu/PaymentsAssistantAdvancePage";

When("I want to generate the payroll advance", () => {
    paymentsAssistantAdvancePage.clicklistItemButton();
    paymentsAssistantAdvancePage.clickItem(); 
    paymentsAssistantAdvancePage.clickBtnStepOne(); 
});

Then("I visualize the progress window to continue with the generation advance", () => {
    paymentsAssistantAdvancePage.verifyModalProgress(); 
    paymentsAssistantAdvancePage.waitForModalConfirmation;
});

When("I confirm the generation of payroll advance", () => {
    paymentsAssistantAdvancePage.clickButtonPrint(); 
});