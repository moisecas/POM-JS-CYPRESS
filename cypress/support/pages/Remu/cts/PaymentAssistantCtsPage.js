class PaymentAssistantCtsPage {
    elements = {
        breadCrumbs: () => cy.get('strong'), 
        switchButton: () => cy.get('.ts-helper'),
        addAllEmployeesButton: () => cy.get('[data-cy="talana-fragmentAddPeople-btnAddAll"]'),
        includeTerminatedEployeesOption: () => cy.get('.ts-helper'),
        modalProgressCounter: () => cy.get('.swal2-modal'),
        succesMessage: () => cy.get('.bootstrap-growl')
    }

    pageBreadCrumbs(cts) { 
        this.elements.breadCrumbs().should('contain', cts)
    }

    clickSwitchButton() {
        this.elements.switchButton().click()
    }

    clickAddEmployeesButton() {
        this.elements.addAllEmployeesButton().click()
    }

    visualModalProgressCounter() {
        this.elements.modalProgressCounter().should('be.visible')
    }

    visualModalAddAllEmployees(message) {
        this.elements.succesMessage().should('contain', message) 
    }

}

export const paymentAssistantCtsPage = new PaymentAssistantCtsPage() 