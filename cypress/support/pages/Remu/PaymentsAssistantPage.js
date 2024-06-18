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
        showStep1: () => cy.get('[data-cy="rem-paymentAssistant-showStep1"]')
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

    validateEmployeesUrl() { //metodo para validar la carga de los empleados 
        const expectedUrl = 'https://qa-remuperu.talana.dev/es-pe/remuneraciones/asistenteDePagoSueldo/seleccionPersonasAjax?todos=true&reproceso=false&incluirFiniquitados=true';
        cy.intercept('GET', expectedUrl).as('loadEmployees');
        cy.wait('@loadEmployees').then((interception) => {
            expect(interception.request.url).to.eq(expectedUrl);
            expect(interception.response.statusCode).to.eq(200);
        });
    }

}

export const paymentAssistantPage = new PaymentsAssistantPage();
