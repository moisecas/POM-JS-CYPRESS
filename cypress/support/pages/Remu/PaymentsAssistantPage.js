class PaymentsAssistantPage {
    elements = {
        salaryOption: () => cy.get('[data-cy="rem-paymentAssistant-salary"]'),
        breadCrumbs: () => cy.get('#talana-breadcrumbs-world-title > strong'),
        addAllEmployeesButton: () => cy.get('[data-cy="talana-fragmentAddPeople-btnAddAll"]'),
        includeTerminatedEployeesOption: () => cy.get('.ts-helper'),
        searchEmployeeInput: () => cy.get('[data-cy="talana-fragmentAddPeople-inputSearchPeople"]'),
        step1NextButton: () => cy.get('[data-cy="rem-paymentAssistantSalary-step1-btnNext"]'),
        showStep1: () => cy.get('[data-cy="rem-paymentAssistant-showStep1"]'),
        succesMessage: () => cy.get('.bootstrap-growl'),
        buttonStepOne: () => cy.get('[data-cy="rem-paymentAssistantSalary-step1-btnNext"]'),
        buttonStepOneConfirmation: () => cy.get('[data-cy="rem-paymentAssistantSalary-step1-modalError-btnGenerateLiquidation"]'),
        buttonStepTwo: () => cy.get('[data-cy="rem-paymentAssistantSalary-step2-btnNext"]'),
        modalGenerate: () => cy.get('[data-cy="rem-modalProgressCounter-textTitle"]'),
        buttonStepThree: () => cy.get('[data-cy="rem-paymentAssistantSalary-step3-btnNext"]'),
        butoonStepFour: () => cy.get('[data-cy="rem-paymentAssistant-step4-btnPrintSettlements"]'),
        advanceOption: () => cy.get('[data-cy="rem-paymentAssistant-advance"]')
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

    verifyMessage() {
        this.elements.succesMessage().should('contain', 'Se agregaron')
    }   

    clickButtonStepOne() {
        this.elements.buttonStepOne().click()
    }

    clickButtonStepOneConfirmation() {
        this.elements.buttonStepOneConfirmation().click()
    }

    clickButtonStepTwo() {
        this.elements.buttonStepTwo().click()
    }

    verifyModalGenerate() {
        cy.intercept('GET', '**/es-pe/remuneraciones/asistenteDePago/progress?liquidacionProcessID=*').as('generationProgress')
        this.elements.modalGenerate().should('contain', 'Generando Boletas')
        cy.wait('@generationProgress', { timeout: 60000 }).its('response.statusCode').should('eq', 200) 
    }

    clickButtonStepThree() {       
        const waitForButtonStepThree = () => {
            cy.get('body').then(($body) => { 
                if ($body.find('[data-cy="rem-paymentAssistantSalary-step3-btnNext"]').length === 0) { 
                    cy.wait(10000)
                    waitForButtonStepThree()
                } else {
                    this.elements.buttonStepThree().should('be.visible').click()
                }
            });
        };
        waitForButtonStepThree()
    }

    clickButtonStepFour() {
        this.elements.butoonStepFour().click()
    }

    verifyModalGenerateTwo() {
        const waitForModalToDisappear = () => {
            cy.get('body').then(($body) => {
                if ($body.find('[data-cy="rem-modalProgressCounter-textTitle"]').length > 0) {
                    cy.wait(1000)
                    waitForModalToDisappear()
                } else { 
                    cy.log('Modal de progreso ha desaparecido');                    
                }
            });
        };
        waitForModalToDisappear()
    }

    goToAdvance() {
        this.elements.advanceOption().click() 
    }

}

export const paymentAssistantPage = new PaymentsAssistantPage()