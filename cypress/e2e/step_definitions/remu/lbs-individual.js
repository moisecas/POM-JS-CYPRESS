import { Given, When, Then} from '@badeball/cypress-cucumber-preprocessor'; 
import { sideBarPage } from "../../../support/pages/talana/SideBar";
import { lbsIndividualPage } from "../../../support/pages/Remu/LbsIndividualPage";  

const employees = ['25635741', '159158357']; 

When("I search for employees and generate LBS for each", () => {
    employees.forEach((dni) => {
        cy.log(`Processing employee with DNI: ${dni}`);
        sideBarPage.enterToEmployees();
        lbsIndividualPage.enterDni(dni);
        lbsIndividualPage.verifiDni(dni);
        lbsIndividualPage.enterToEmployee();
        lbsIndividualPage.enterToLbs();
        lbsIndividualPage.pageBreadCrumbs();
        lbsIndividualPage.generateLbs();
        lbsIndividualPage.verifyModal();
        lbsIndividualPage.verifyTitle();
        lbsIndividualPage.clickButtonGenerate();
        lbsIndividualPage.verfyModal();
        lbsIndividualPage.verfyModalGenerate();
        lbsIndividualPage.clickButtonInicio();
    });
});

Then("I should see the confirmation message", () => {
    lbsIndividualPage.verifyPageBreadCrumbs();
});