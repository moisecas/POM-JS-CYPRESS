import { When, Then} from '@badeball/cypress-cucumber-preprocessor'; 
import { paymentAssistantPage } from '../../../../support/pages/Remu/menu/PaymentAssistantPage';
import { paymentsAssistantAdvancePage } from "../../../../support/pages/Remu/advance/PaymentsAssistantAdvancePage";  
import { sideBarPage } from "../../../../support/pages/talana/SideBar";

When("I go to section advance", () => {
    sideBarPage.enterToPaymentAssistant();
    paymentAssistantPage.goToAdvance();
});

Then("I should be loaded onto {string} page", (advance) => {
    paymentsAssistantAdvancePage.pageBreadCrumbs(advance);      
}); 