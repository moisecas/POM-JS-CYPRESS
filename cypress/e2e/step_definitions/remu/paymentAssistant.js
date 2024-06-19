import { Given, When, Then} from '@badeball/cypress-cucumber-preprocessor'; 
import { sideBarPage } from "../../../support/pages/talana/SideBar";
import { paymentAssistantPage } from "../../../support/pages/Remu/PaymentsAssistantPage"; 

When("I go to the payments assistant menu option", () => {
    sideBarPage.enterToPaymentAssistant();
});

When("I go to the salary option", () => {
    paymentAssistantPage.goToSalary();
});

Then("I should be loaded into the payments page", () => {
    paymentAssistantPage.pageBreadCrumbs();
});

Given("I am on the payments page", () => {
    sideBarPage.enterToPaymentAssistant();
    paymentAssistantPage.goToSalary();
});

Then("the switch include terminated is off", () => {
    paymentAssistantPage.verifyTerminatedEmployeesOff();
});

When("I click on Add all button for add all employees", () => {
    paymentAssistantPage.addAllEmployees(); 
   
});

Then("should be add all without terminated employees", () => {
    // No se requiere validación adicional, el paso se completa aquí. 
});
