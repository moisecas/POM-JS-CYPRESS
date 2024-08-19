import { When, Then} from '@badeball/cypress-cucumber-preprocessor'; 
import { advanceAssistantPage } from "../../../support/pages/Remu/AdvanceAssistantPage";

When("I add all employees", () => {
    advanceAssistantPage.clickSwitchButton();
    advanceAssistantPage.clickAddEmployeesButton();
    advanceAssistantPage.visualModalProgressCounter();
}); 

Then("I visualize the added employees modal {string}", (message) => {
    advanceAssistantPage.visualModalAddAllEmployees(message);
}); 