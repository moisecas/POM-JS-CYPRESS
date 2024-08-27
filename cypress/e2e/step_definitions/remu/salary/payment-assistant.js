import { Given, When, Then} from '@badeball/cypress-cucumber-preprocessor'; 
import { sideBarPage } from "../../../../support/pages/talana/SideBar";
import { paymentAssistantSalaryPage } from "../../../../support/pages/Remu/salary/PaymentsAssistantSalaryPage";

Then("the switch include terminated is off", () => {
    paymentAssistantSalaryPage.verifyTerminatedEmployeesOff();
});

When("I click on Add all button for add all employees", () => {
    paymentAssistantSalaryPage.addAllEmployees();
});

Then("should be add all without terminated employees", () => {
    paymentAssistantSalaryPage.verifyMessage();
});  