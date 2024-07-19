class LbsPage {
    elements = {
        lbsOption: () => cy.get('[data-cy="rem-advancedTools-massiveLBS"] > .big-round-icon > .mdi'),
        breadCrumbs: () => cy.get('#talana-breadcrumbs-world-title > strong'), 
        title: () => cy.get('.tln-text-title-lg')
    }

    goToLbs(business) {
        this.elements.lbsOption().click() 
    }

    pageBreadCrumbs() {
        this.elements.breadCrumbs().should('contain', 'Enlaces Avanzados')
    }

    verifyTitle() {
        this.elements.title().should('contain', 'Liquidación de Beneficios Sociales (LBS) masivo')
    }
}

export const lbsPage = new LbsPage () 