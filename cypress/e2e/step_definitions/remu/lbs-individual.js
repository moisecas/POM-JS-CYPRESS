import { Given, When, Then} from '@badeball/cypress-cucumber-preprocessor'; 
import { sideBarPage } from "../../../support/pages/talana/SideBar";
import { lbsIndividualPage } from "../../../support/pages/Remu/LbsIndividualPage";  

When("I search for the employee and select them", () => {
    sideBarPage.enterToEmployees();
    lbsIndividualPage.enterDni();
    lbsIndividualPage.verifiDni(); 
    lbsIndividualPage.enterToEmployee();
});

Then("I enter their record to generate their individual LBS", () => {
    lbsIndividualPage.enterToLbs();
    lbsIndividualPage.pageBreadCrumbs();
    lbsIndividualPage.generateLbs();
    lbsIndividualPage.verifyModal();
    lbsIndividualPage.verifyTitle();
    lbsIndividualPage.clickButtonGenerate();
});