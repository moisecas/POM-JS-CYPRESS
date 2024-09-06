import { Given, When, Then} from '@badeball/cypress-cucumber-preprocessor'; 
import { sideBarPage } from '../../../../support/pages/talana/SideBar';
import { paymentAssistantSalaryPage } from "../../../../support/pages/Remu/salary/PaymentsAssistantSalaryPage";
import { paymentAssistantPage } from '../../../../support/pages/Remu/menu/PaymentAssistantPage';

When("I go to the payments assistant menu option", () => {
    sideBarPage.enterToPaymentAssistant();
});

When("I go to the salary option", () => {
    paymentAssistantPage.goToSalary();
});

Then("I should be loaded into the payments page", () => {
    paymentAssistantSalaryPage.pageBreadCrumbs();
}); 