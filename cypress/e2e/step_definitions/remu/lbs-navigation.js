import { Given, When, Then} from '@badeball/cypress-cucumber-preprocessor'; 
import { sideBarPage } from "../../../support/pages/talana/SideBar";
import { lbsPage } from "../../../support/pages/Remu/LbsPage";  

When("I go to the payments advanced tools section lbs masive", () => {
    sideBarPage.enterToAdvancedTools();
    lbsPage.pageBreadCrumbs(); 
    lbsPage.goToLbs();
});

Then("I should be loaded into the lbs masive", () => {
    lbsPage.verifyTitle();  
});