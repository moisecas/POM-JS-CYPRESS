class VisitEmployeePage {
    elements = {
        visitEmployee: () => cy.get(':nth-child(1) > :nth-child(8) > a > .zmdi'),
        buttonVacations: () => cy.get('[data-cy="gdp-employees-request-vacations"]'), 
        addReduceVacations: () => cy.get('.tln-mb-\[4px\] > .btn')
    }

    clickVisitEmployee() {
        this.elements.visitEmployee().click(); 
    }

    clickButtonVacations() {
        this.elements.buttonVacations().click(); 
    }

    verifyAddReduceVacationsVisible() {
        const waitForAndClickButton = () => {
            cy.get('body').then(($body) => {
                const button = $body.find('.tln-mb-[4px] > .btn');
                if (button.length === 0 || !button.is(':visible')) {
                    cy.wait(1000); 
                    waitForAndClickButton(); 
                } else {
                    cy.wrap(button).scrollIntoView().should('be.visible').click({ force: true });
                }
            });
        };
    
        waitForAndClickButton();
    }
    
    
    
}

export const visitEmployeePage = new VisitEmployeePage () 