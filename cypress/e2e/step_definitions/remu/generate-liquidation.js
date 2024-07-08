import { Given, When, Then} from '@badeball/cypress-cucumber-preprocessor'; 
import { paymentAssistantPage } from "../../../support/pages/Remu/PaymentsAssistantPage";  

When("I click on the step one", () => {
    paymentAssistantPage.clickButtonStepOne();
});

Then("I confirm the generation of payroll liquidations", () => {
    paymentAssistantPage.clickButtonStepOneConfirmation();
});

When("I click on the step two", () => {
    paymentAssistantPage.clickButtonStepTwo();
});

Then("I see the payroll liquidation processing window", () => {
    paymentAssistantPage.verifyModalGenerate();
});

When("I click on the step three", () => {
    paymentAssistantPage.clickButtonStepThree();
});

Then("I see the payroll generation processing window", () => {
    paymentAssistantPage.verifyModalGenerate();
});

Then("I visualize the print liquidations button", () => {
    paymentAssistantPage.clickButtonStepFour();
});