import { Given, When, Then} from '@badeball/cypress-cucumber-preprocessor'; 
import { sideBarPage } from "../../../../support/pages/talana/SideBar";
import { paymentAssistantPage } from "../../../../support/pages/Remu/salary/PaymentsAssistantPage"; 

Then("the switch include terminated is off", () => {
    paymentAssistantPage.verifyTerminatedEmployeesOff();
});

When("I click on Add all button for add all employees", () => {
    paymentAssistantPage.addAllEmployees();
});

Then("should be add all without terminated employees", () => {
    paymentAssistantPage.verifyMessage();
});  