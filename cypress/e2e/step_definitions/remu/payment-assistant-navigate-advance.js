import { When, Then} from '@badeball/cypress-cucumber-preprocessor'; 
import { advanceAssistantPage } from "../../../support/pages/Remu/AdvanceAssistantPage"; 
import { paymentAssistantPage } from '../../../support/pages/Remu/PaymentsAssistantPage'; 

When("I go to section advance", () => {
    paymentAssistantPage.goToAdvance();
});

Then("I should be loaded onto {string} page", (advance) => {
    advanceAssistantPage.pageBreadCrumbs(advance);      
}); 