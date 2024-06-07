import { Given, When, Then} from '@badeball/cypress-cucumber-preprocessor'; 
import { sideBarPage } from "../../../support/pages/talana/SideBar";
import { paymentAssistantPage } from "../../../support/pages/Remu/PaymentsAssistantPage"; 

Given("I go to the payments assistant menu option", () => {
    sideBarPage.enterToPaymentAssistant()
});

When("I got to the salary option", () => {
    paymentAssistantPage.goToSalary()
});

Then("I should be loaded into the payments page", () => {
    paymentAssistantPage.pageBreadCrumbs()
});

Given("I go to salary page in to the payment assistant", () => {
    sideBarPage.enterToPaymentAssistant()
    paymentAssistantPage.goToSalary()
});

When("I click on Add all button for add al employees", () => {
    paymentAssistantPage.addAllEmployees()
});

Then("the switch inlude terminated is off", () => {
    paymentAssistantPage.verifyTerminatedEmployeesOff()
})

Then("should be add all without terminated employees", () => {
    
});