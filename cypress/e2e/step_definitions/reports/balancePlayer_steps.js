import { Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
import { balancePlayer } from '../../../support/pages/Reports/balancePlayer';
import { dashboardPage } from '../../../support/pages/backoffice/DashboardPage'; 

Given("I navigate to the Reports section", () => {
    dashboardPage.clickBalancePlayer();
});

When("apply the desired filters", () => {
    balancePlayer.userBox();
    balancePlayer.confirmUser();
    balancePlayer.filter();
});

Then("the report should be downloaded successfully in the selected format", () => {
    balancePlayer.export();
});