import { When, Then} from '@badeball/cypress-cucumber-preprocessor'; 
import { paymentAssistantPage } from '../../../../support/pages/Remu/salary/PaymentsAssistantPage'; 
import { paymentAssistantCtsPage } from '../../../../support/pages/Remu/cts/PaymentAssistantCtsPage';  
import { sideBarPage } from "../../../../support/pages/talana/SideBar"; 

When("I go to section cts", () => {
    sideBarPage.enterToPaymentAssistant();
    paymentAssistantPage.goToCts(); 
});

Then("I should be redirected to the {string} page", (cts) => {
    paymentAssistantCtsPage.pageBreadCrumbs(cts);       
}); 