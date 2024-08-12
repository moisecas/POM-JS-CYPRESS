import { When, Then} from '@badeball/cypress-cucumber-preprocessor'; 
import { sideBarPage } from "../../../support/pages/talana/SideBar";
import { visitEmployeePage } from "../../../support/pages/Remu/VisitEmployeePage";  

When("I search for employees", () => {
    sideBarPage.enterToEmployees(); 
    visitEmployeePage.clickVisitEmployee(); 
    visitEmployeePage.clickButtonVacations();     
});

Then("I should see the vacations", () => {
    visitEmployeePage.verifyAddReduceVacationsVisible(); 
});