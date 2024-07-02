class PaymentsAssistantPage { 
    elements = {
        salaryOption: () => cy.get('[data-cy="rem-paymentAssistant-salary"]'),
        breadCrumbs: () => cy.get('#talana-breadcrumbs-world-title > strong'),
        addAllEmployeesButton: () => cy.get('[data-cy="talana-fragmentAddPeople-btnAddAll"]'),
        includeTerminatedEployeesOption: () => cy.get('.ts-helper'),
        cleanEmployeesSelectedList: () => cy.get('[data-cy="talana-fragmentAddPeople-btnCleanList"]'),
        addEmployeeButton: () => cy.get('[data-cy="talana-fragmentAddPeople-btnAddPerson"]'),
        searchEmployeeInput: () => cy.get('[data-cy="talana-fragmentAddPeople-inputSearchPeople"]'),
        step1NextButton: () => cy.get('[data-cy="rem-paymentAssistantSalary-step1-btnNext"]'),
        showStep1: () => cy.get('[data-cy="rem-paymentAssistant-showStep1"]'),
        succesMessage: () => cy.get('.bootstrap-growl'),
        //pasos nuevos
        buttonStepOne: () => cy.get('[data-cy="rem-paymentAssistantSalary-step1-btnNext"]'), //primera flecha verde
        buttonStepOneConfirmation: () => cy.get('[data-cy="rem-paymentAssistantSalary-step1-modalError-btnGenerateLiquidation"]'), //botón modal de confirmación
        buttonStepTwo: () => cy.get('[data-cy="rem-paymentAssistantSalary-step2-btnNext"]'), //segunda flecha verde
        modalGenerate: () => cy.get('[data-cy="rem-modalProgressCounter-textTitle"]'), //title: Generando Boletas
        buttonStepThree: () => cy.get('[data-cy="rem-paymentAssistantSalary-step3-btnNext"]'), //tercera flecha verde   
        //se repite en este paso  modalGenerate title: Generando boletas
        butoonStepFour: () => cy.get('[data-cy="rem-paymentAssistant-step4-btnPrintSettlements"]'), //title: Imprimir boletas
    }

    goToSalary(business) {
        this.elements.salaryOption().click()
    }

    pageBreadCrumbs() {
        this.elements.breadCrumbs().should('contain', 'Asistente de Pago - Asistencia')
    }

    addAllEmployees() {
        this.elements.addAllEmployeesButton().click()
    }

    verifyTerminatedEmployeesOff() {
        this.elements.includeTerminatedEployeesOption().should('not.be.checked')
    }

    verifyMessage(message) {
        this.elements.succesMessage().should('contain', 'Se agregaron')
    }   
}

export const paymentAssistantPage = new PaymentsAssistantPage();