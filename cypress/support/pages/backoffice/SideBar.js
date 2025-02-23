import { registeredPlayers } from "../Reports/registeredPlayers";

class SideBarPage {

    elements = {
        home: () => cy.get('[data-cy="sidebar-home"]'),
        employees: () => cy.get('[data-cy="sidebar-employees"]'),
        companies: () => cy.get('[data-cy="sidebar-companies"]'),
        paymentAssistant: () => cy.get('[data-cy="sidebar-paymentAssistant"]'),
        dataLoad: () => cy.get('[data-cy="sidebar-dataLoad"]'),
        adminAbsences: () => cy.get('[data-cy="sidebar-adminAbsences"]'),
        reports: () => cy.get('[data-cy="sidebar-reports"]'),
        itemsWorkflow: () => cy.get('[data-cy="sidebar-itemsWorkflow"]'),
        advancedTools: () => cy.get('[data-cy="sidebar-advancedTools"]'),
        ResumePayments: () => cy.get(':nth-child(25) > .waves-effect > .pcoded-mtext'),
        blacklist: () => cy.get(':nth-child(2) > :nth-child(2) > :nth-child(5) > .waves-effect > .pcoded-mtext'),
        registeredPlayers : () => cy.get(':nth-child(2) > :nth-child(2) > :nth-child(4) > .waves-effect > .pcoded-mtext'),
    }

    enterToHome() {
        this.elements.home().click();
    }

    enterToEmployees() {
        this.elements.employees().click();
    }

    enterToCompanies() {
        this.elements.companies().click();
    }

    enterToPaymentAssistant() {
        this.elements.paymentAssistant().click();
    }

    enterToDataLoad() {
        this.elements.dataLoad().click();
    }

    enterToAdminAbsences() {
        this.elements.adminAbsences().click();
    }

    enterToReports() {
        this.elements.reports().click();
    }

    enterToItemsWorkflow() {
        this.elements.itemsWorkflow().click();
    }
    
    enterToAdvancedTools() {
        this.elements.advancedTools().click();
    }

    enterToResumePayments() {
        this.elements.ResumePayments().click();
    }

}

export const sideBarPage = new SideBarPage(); 