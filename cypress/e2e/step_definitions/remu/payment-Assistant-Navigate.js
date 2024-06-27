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
    //paymentAssistantPage.pageBreadCrumbs();
}); 