class AdvanceAssistantPage {
    elements = {
        breadCrumbs: () => cy.get('#talana-breadcrumbs-world-title > strong'),  
        switchButton: () => cy.get('.ts-helper'),
        addEmployeesButton: () => cy.get('[data-cy="talana-fragmentAddPeople-btnAddAll"]'),
        modalProgressCounter: () => cy.get('.swal2-modal'),
        modalAddAllEmployees: () => cy.get('.bootstrap-growl')
    }

    pageBreadCrumbs(advance) {
        this.elements.breadCrumbs().should('contain', advance)
    }

    clickSwitchButton() {
        this.elements.switchButton().click()
    }

    clickAddEmployeesButton() {
        this.elements.addEmployeesButton().click()
    }

    visualModalProgressCounter() {
        this.elements.modalProgressCounter().should('be.visible')
    }

    visualModalAddAllEmployees(message) {
        this.elements.modalAddAllEmployees().should('contain', message)
    }
}

export const advanceAssistantPage = new AdvanceAssistantPage(); 