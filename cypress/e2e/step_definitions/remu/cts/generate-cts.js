import { When, Then} from '@badeball/cypress-cucumber-preprocessor'; 
import { paymentAssistantCtsPage } from '../../../../support/pages/Remu/cts/PaymentAssistantCtsPage';  

When("I want to generate the payroll CTS", () => {
    paymentAssistantCtsPage.clickButtonOne();
});

Then("I visualize the progress window to continue with the generation CTS", () => {
    paymentAssistantCtsPage.verifyProgressStatus();
}); 

Then("I confirm the generation of payroll CTS {string}", (result) => {
     paymentAssistantCtsPage.pageBreadCrumbsResult(result); 
     paymentAssistantCtsPage.clickButtonPrint(); 
});