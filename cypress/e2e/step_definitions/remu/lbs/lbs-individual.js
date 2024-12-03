import { Given, When, Then} from '@badeball/cypress-cucumber-preprocessor'; 
import { lbsIndividualPage } from '../../../../support/pages/Remu/lbs/LbsIndividualPage';
import { sideBarPage } from "../../../../support/pages/talana/SideBar"; 

Given("the user visits the employee's profile with ID {string}", (dni) => {
    sideBarPage.enterToEmployees(); 
    lbsIndividualPage.buttonNoVigentes();     
    lbsIndividualPage.enterDni(dni); 
    lbsIndividualPage.verifiDni(dni);
    lbsIndividualPage.enterToEmployee();   
});

When("the user clicks on the {string} button", () => {
    lbsIndividualPage.enterToLbs(); 
    lbsIndividualPage.pageBreadCrumbs(); 
}); 

When("the user clicks on {string}", () => {
    lbsIndividualPage.generateLbs();
    lbsIndividualPage.verfyModal();
    lbsIndividualPage.verifyTitle(); 
    lbsIndividualPage.clickButtonGenerate(); 
    lbsIndividualPage.verfyModal(); 
    lbsIndividualPage.verfyModalGenerate(); 
}); 

Then("the payslip should exist in the employee's folder", (message) => {
    lbsIndividualPage.goToFolder(); 
    lbsIndividualPage.clickLbs(); 
}); 