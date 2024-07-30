class AdvanceAssistantPage {
    elements = {
        breadCrumbs: () => cy.get('#talana-breadcrumbs-world-title > strong')  
    }

    pageBreadCrumbs(advance) {
        this.elements.breadCrumbs().should('contain', advance)
    }
}

export const advanceAssistantPage = new AdvanceAssistantPage(); 