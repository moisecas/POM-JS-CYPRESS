import { Given, When, Then} from '@badeball/cypress-cucumber-preprocessor'; 
import { sideBarPage } from "../../../support/pages/talana/SideBar";
import { paymentAssistantPageAdvance } from "../../../support/pages/Remu/PaymentsAssistantPageAdvance";  

When("I go to the payments assistant section advance", () => {
    sideBarPage.enterToPaymentAssistant();
    paymentAssistantPageAdvance.goToAdvance();
});

Then("I should be loaded onto the advance page", () => {
    paymentAssistantPageAdvance.pageBreadCrumbs();  
});