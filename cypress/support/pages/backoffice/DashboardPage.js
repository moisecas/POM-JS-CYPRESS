import { generalUtils } from "../../utils/GeneralUtils"; 
import { ResumePayments } from "../Reports/resumePayments";

class DashboardPage {

    elements = {
        //recommendationModal: () => cy.get('[data-testid="survey"]'),
        rolesModal: () => cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .waves-effect'),
        modulo: () => cy.get(':nth-child(1) > :nth-child(2) > :nth-child(2) > .waves-effect'),
        users:() => cy.get(':nth-child(1) > :nth-child(2) > :nth-child(3) > .waves-effect'),
        skins:() => cy.get(':nth-child(1) > :nth-child(2) > :nth-child(4) > .waves-effect'),
        crons:() => cy.get(':nth-child(1) > :nth-child(2) > :nth-child(5) > .waves-effect'),
        banks:() => cy.get(':nth-child(1) > :nth-child(2) > :nth-child(6) > .waves-effect'),
        atributes:() => cy.get(':nth-child(1) > :nth-child(2) > :nth-child(7) > .waves-effect'),
        providers:() => cy.get(':nth-child(1) > :nth-child(2) > .pcoded-hasmenu > [href="javascript:void(0)"]'),
        solicitudes:() => cy.get(':nth-child(1) > :nth-child(2) > :nth-child(9) > .waves-effect > .pcoded-mtext'),
        balancePlayer:() => cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > .waves-effect > .pcoded-mtext'),
        listPlayers:() => cy.get('.pcoded-trigger > :nth-child(2) > :nth-child(2) > .waves-effect'),
        balanceATM:() => cy.get('.pcoded-trigger > :nth-child(2) > :nth-child(3) > .waves-effect'),
        players:() => cy.get('.pcoded-trigger > :nth-child(2) > :nth-child(4) > .waves-effect'),
        blacklist:() => cy.get('.pcoded-trigger > :nth-child(2) > :nth-child(5) > .waves-effect'),
        automaticRecharge:() => cy.get('.pcoded-trigger > :nth-child(2) > :nth-child(5) > .waves-effect'),
        playerConciliation:() => cy.get('.pcoded-trigger > :nth-child(2) > :nth-child(5) > .waves-effect'),
        notificationsList:() => cy.get('.pcoded-trigger > :nth-child(2) > :nth-child(8) > .waves-effect'),
        supplierIncome:() => cy.get('.pcoded-trigger > :nth-child(2) > :nth-child(9) > .waves-effect'),
        balanceBox:() => cy.get(':nth-child(10) > .waves-effect'),    
        recommendationModalCloseButton: () => cy.get('.sv__btn-close'),
        breadCrumbs: () => cy.get('.alert'),
        
    }

    clickBalancePlayer() {
        this.elements.balancePlayer().click();
    }

    homePageBreadCrumbs() {
        this.elements.breadCrumbs().should('contain', 'La Autenticación de dos pasos esta Desactivada.');
    }

    clearRecommendationModal() {
        generalUtils.validatePathUrlOfPageLoaded("talana.dev/es/remuneraciones/");
        cy.get('body').then($body => {
            if ($body.find('[data-testid="survey"]').length > 0) {
                this.elements.recommendationModal().should('exist').then(() => {
                this.elements.recommendationModalCloseButton().click();
              });
            } else {
                cy.log('The satisfaction survey modal is not visible');
            }
        })
    }    

    verifyLogin() {
        //this.clearRecommendationModal()
        this.homePageBreadCrumbs();
    }

}

export const dashboardPage = new DashboardPage(); 