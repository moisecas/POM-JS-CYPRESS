class PaymentsAssistantPageAdvance {
    elements = {
        advanceOption: () => cy.get('[data-cy="rem-paymentAssistant-advance"]'),
        breadCrumbs: () => cy.get('#talana-breadcrumbs-world-title > strong')       
    }

    goToAdvance(business) {
        this.elements.advanceOption().click() 
    }

    pageBreadCrumbs() {
        this.elements.breadCrumbs().should('contain', 'Asistente de Anticipo')
    }
}

export const paymentAssistantPageAdvance = new PaymentsAssistantPageAdvance ()