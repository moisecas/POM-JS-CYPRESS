class PaymentAssistantCtsPage {
    elements = {
        breadCrumbs: () => cy.get('strong'), 
        switchButton: () => cy.get('.ts-helper'),
        addAllEmployeesButton: () => cy.get('[data-cy="talana-fragmentAddPeople-btnAddAll"]'),
        includeTerminatedEployeesOption: () => cy.get('.ts-helper'),
        modalProgressCounter: () => cy.get('.swal2-modal'),
        succesMessage: () => cy.get('.bootstrap-growl'),
        buttonStepOne: () => cy.get('[data-cy="rem-paymentAssistantCTS-step1-btnNext"]'), 
        modalProgress: () => cy.get('[data-cy="rem-modalProgress-textTitle"]'), 
        buttonPrint: () => cy.get('[data-cy="rem-paymentAssistantCTS-step2-btnPrintSettlements"]')
    }

    pageBreadCrumbs(cts) { 
        this.elements.breadCrumbs().should('contain', cts); 
    }

    clickSwitchButton() {
        this.elements.switchButton().click(); 
    }

    clickAddEmployeesButton() {
        this.elements.addAllEmployeesButton().click(); 
    }

    visualModalProgressCounter() {
        this.elements.modalProgressCounter().should('be.visible'); 
    }

    visualModalAddAllEmployees(message) {
        this.elements.succesMessage().should('contain', message);  
    }

    clickButtonOne() {
        this.elements.buttonStepOne().click(); 
    }

    verifyProgressStatus() {
        cy.intercept('GET', '**/es/celeryapi/status/*').as('progressStatus');
        this.elements.modalProgress().should('contain', 'Generando Documento');
        cy.wait('@progressStatus', { timeout: 60000 }).its('response.statusCode').should('eq', 200);
    }
    
    pageBreadCrumbsResult(result) { 
        const verifyBreadCrumbs = () => {
            cy.get('body').then(($body) => {
                const breadCrumbs = $body.find('strong');
                if (breadCrumbs.length === 0 || !breadCrumbs.text().includes(result)) {
                    cy.wait(1000); 
                    verifyBreadCrumbs(); 
                } else {
                    cy.get('strong').should('contain', result);
                }
            });
        };    
        verifyBreadCrumbs();
    }
    
    clickButtonPrint() {
        this.elements.buttonPrint().click();  
    }

}

export const paymentAssistantCtsPage = new PaymentAssistantCtsPage() 