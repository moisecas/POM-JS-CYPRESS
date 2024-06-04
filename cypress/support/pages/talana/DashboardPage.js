import { generalUtils } from "../../utils/GeneralUtils"; 

class Dashboard {

    elements = {
        recommendationModal: () => cy.get('[data-testid="survey"]'),
        recommendationModalCloseButton: () => cy.get('.sv__btn-close'),
        breadCrumbs: () => cy.get('#talana-breadcrumbs-world-title > strong'),

    }

    homePageBreadCrumbs() {
        this.elements.breadCrumbs().should('contain', 'Remuneraciones'); 
    }

    clearRecommendationModal(){
        generalUtils.pageLoadedComplete() //espera a que la pagina este completamente cargada
        this.elements.recommendationModal().then(($modal) => { //verifica si el modal de recomendacion esta visible
            if ($modal.length > 0 && $modal.is(':visible')) { //si el modal esta visible, lo cierra 
                this.elements.recommendationModalCloseButton().click() //cierra el modal
            } else { //si no esta visible, lanza un error por consola 
                throw new Error('Recommendation modal is not found or is not visible') 
            }
        }) 

    }

    verifyLogin(){
        this.clearRecommendationModal()
        this.homePageBreadCrumbs() 
    }


}

export const dashboard = new Dashboard(); 