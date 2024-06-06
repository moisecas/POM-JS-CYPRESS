import { generalUtils } from "../../utils/GeneralUtils"; 

class DashboardPage {

    elements = {
        recommendationModal: () => cy.get('[data-testid="survey"]'),
        recommendationModalCloseButton: () => cy.get('.sv__btn-close'),
        breadCrumbs: () => cy.get('#talana-breadcrumbs-world-title > strong'),
    }

    homePageBreadCrumbs() {
        this.elements.breadCrumbs().should('contain', 'Talana | Dashboard');
    }

    clearRecommendationModal() {
        generalUtils.validatePathUrlOfPageLoaded("talana.dev/es/remuneraciones/#/");
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
        this.clearRecommendationModal()
        this.homePageBreadCrumbs();
    }

}

export const dashboardPage = new DashboardPage(); 