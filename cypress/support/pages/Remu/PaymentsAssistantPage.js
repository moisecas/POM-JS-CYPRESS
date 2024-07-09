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

    //metodos nuevos para el asistente de pagos
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
        cy.intercept('GET', '**/es-pe/remuneraciones/asistenteDePago/progress?liquidacionProcessID=*').as('generationProgress');
        this.elements.modalGenerate().should('contain', 'Generando Boletas');
        cy.wait('@generationProgress', { timeout: 60000 }).its('response.statusCode').should('eq', 200);  
    }

    clickButtonStepThree() {       
        const waitForButtonStepThree = () => {
            cy.get('body').then(($body) => { //se obtiene el body para buscar el elemento 
                if ($body.find('[data-cy="rem-paymentAssistantSalary-step3-btnNext"]').length === 0) { //se busca el elemento
                    cy.wait(10000); //espera para volver a buscar el elemento
                    waitForButtonStepThree(); // Llamada recursiva para seguir esperando
                } else {
                    this.elements.buttonStepThree().should('be.visible').click(); // Verificar visibilidad y hacer clic
                }
            });
        };

        waitForButtonStepThree();
    }

    clickButtonStepFour() {
        this.elements.butoonStepFour().click()
    }

    verifyModalGenerateTwo() {
        const waitForModalToDisappear = () => {
            cy.get('body').then(($body) => {
                if ($body.find('[data-cy="rem-modalProgressCounter-textTitle"]').length > 0) {
                    cy.wait(1000); // Espera breve antes de verificar de nuevo
                    waitForModalToDisappear(); // Llamada recursiva para seguir esperando
                } else {
                    // Modal ha desaparecido
                }
            });
        };

        waitForModalToDisappear();
    }

}

export const paymentAssistantPage = new PaymentsAssistantPage();