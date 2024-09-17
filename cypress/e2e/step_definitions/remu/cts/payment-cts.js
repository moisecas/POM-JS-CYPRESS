import { When, Then} from '@badeball/cypress-cucumber-preprocessor'; 
import { paymentAssistantCtsPage } from '../../../../support/pages/Remu/cts/PaymentAssistantCtsPage';  

When("I include all employees for CTS", () => {
    paymentAssistantCtsPage.clickSwitchButton();
    paymentAssistantCtsPage.clickAddEmployeesButton();
    paymentAssistantCtsPage.visualModalProgressCounter();    
});

Then("I should visualize the {string} modal", (message) => {
    paymentAssistantCtsPage.visualModalAddAllEmployees(message); 
}); 