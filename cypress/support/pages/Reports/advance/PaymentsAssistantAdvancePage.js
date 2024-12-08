class PaymentsAssistantAdvancePage {
    elements = {
        breadCrumbs: () => cy.get('#talana-breadcrumbs-world-title > strong'),  
        switchButton: () => cy.get('.ts-helper'),
        addEmployeesButton: () => cy.get('[data-cy="talana-fragmentAddPeople-btnAddAll"]'),
        modalProgressCounter: () => cy.get('.swal2-modal'),
        modalAddAllEmployees: () => cy.get('.bootstrap-growl'),
        listItem: () => cy.get('.filter-option'), 
        item: () => cy.get('[data-original-index="0"] > a'), 
        btnStepOne: () => cy.get('[data-cy="rem-paymentAssistantAdvance-step1-btnNext"]'), 
        modalProgress: () => cy.get('[data-cy="rem-modalProgress-textTitle"]'),
        modalConfirmation: () => cy.get('.tln-flex-col'),
        btnPrint: () => cy.get('[data-cy="rem-paymentAssistantAdvance-step2-btnPrintSettlements"]')
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

    clicklistItemButton() {
        this.elements.listItem().click()
    }

    clickItem() {
        this.elements.item().click()
    }

    clickBtnStepOne() {
        this.elements.btnStepOne().click()
    }

    verifyModalProgress() {
        cy.intercept('GET', '**/es/celeryapi/status/*').as('progressStatus') 
        this.elements.modalProgress().should('be.visible')
        cy.wait('@progressStatus', { timeout: 80000 }).its('response.statusCode').should('eq', 200)
    }    

    waitForModalConfirmation() {
        const waitForModal = () => {
            cy.get('body').then(($body) => {
                const modal = $body.find('.tln-flex-col')
                if (modal.length === 0 || !modal.is(':visible')) {
                    cy.wait(1000)
                    waitForModal()
                } else {
                    cy.wrap(modal).should('be.visible') 
                }
            });
        };
        waitForModal()
    }    

    clickButtonPrint() {
        const waitForButtonPrint = () => {
            cy.get('body').then(($body) => {
                const button = $body.find('[data-cy="rem-paymentAssistantAdvance-step2-btnPrintSettlements"]')
                if (button.length === 0 || !button.is(':visible')) {
                    cy.wait(1000); 
                    waitForButtonPrint()
                } else {
                    cy.wrap(button)
                        .scrollIntoView({ ensureScrollable: false }) 
                        .should('be.visible')
                        .click({ force: true })
                }
            })
        }
        waitForButtonPrint()
    }
                    
}

export const paymentsAssistantAdvancePage = new PaymentsAssistantAdvancePage() 