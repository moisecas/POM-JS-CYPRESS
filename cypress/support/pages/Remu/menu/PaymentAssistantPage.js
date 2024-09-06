class PaymentAssistantPage {
    elements = {
        salaryOption: () => cy.get('[data-cy="rem-paymentAssistant-salary"]'),
        advanceOption: () => cy.get('[data-cy="rem-paymentAssistant-advance"]'),
        ctsOption: ()=> cy.get('[data-cy="rem-paymentAssistant-CTS"]')
    }

    goToSalary(business) {
        this.elements.salaryOption().click()
    }   

    goToAdvance() {
        this.elements.advanceOption().click() 
    }

    goToCts() {
        this.elements.ctsOption().click() 
    }
    
}

export const paymentAssistantPage = new PaymentAssistantPage() 