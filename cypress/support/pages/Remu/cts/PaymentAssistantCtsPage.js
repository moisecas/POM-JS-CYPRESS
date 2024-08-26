class PaymentAssistantCtsPage {
    elements = {
        breadCrumbs: () => cy.get('strong')    
    }

    pageBreadCrumbs(cts) { 
        this.elements.breadCrumbs().should('contain', cts)
    }

                    
}

export const paymentAssistantCtsPage = new PaymentAssistantCtsPage() 