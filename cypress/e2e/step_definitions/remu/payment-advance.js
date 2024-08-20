import { When, Then} from '@badeball/cypress-cucumber-preprocessor'; 
import { paymentsAssistantAdvancePage } from "../../../support/pages/Remu/PaymentsAssistantAdvancePage";

When("I add all employees", () => {
    paymentsAssistantAdvancePage.clickSwitchButton();
    paymentsAssistantAdvancePage.clickAddEmployeesButton();
    paymentsAssistantAdvancePage.visualModalProgressCounter();
}); 

Then("I visualize the added employees modal {string}", (message) => {
    paymentsAssistantAdvancePage.visualModalAddAllEmployees(message); 
});