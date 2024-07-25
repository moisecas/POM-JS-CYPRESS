class LbsPage {
    elements = {
        //navegación
        lbsOption: () => cy.get('[data-cy="rem-advancedTools-massiveLBS"] > .big-round-icon > .mdi'),
        breadCrumbs: () => cy.get('#talana-breadcrumbs-world-title > strong'), 
        title: () => cy.get('.tln-text-title-lg'),

        //botones de la interfaz
        stepOne: () => cy.get('.tln-justify-between > :nth-child(1) > .tln-text-body-sm'), //contiene titulo Seleccionar trabajadores a liquidar
        titleStepOne: () => cy.get('.tln-text-title-md'), //titulo Seleccionar trabajadores a procesar
        filterWorker: () => cy.get('[data-cy="rem-massiveLBS-step1-select-groups"]'), //filtro de grupos de trabajadores
        filterBussinesName: () => cy.get('[data-cy="rem-massiveLBS-step1-select-businessName"]'), //filtro de nombre de empresa o razón social
        filterCostCenter: () => cy.get('[data-cy="rem-massiveLBS-step1-select-costCenter"]'), //filtro de centro de costo
        filterBranch: () => cy.get('[data-cy="rem-massiveLBS-step1-select-branch"]'), //filtro de sucursal
        filterCalendar: () => cy.get('.dp__input_icon > .tln-flex > iconify-icon'), //filtro de calendario
        filterReasonTermination: () => cy.get('[data-cy="rem-massiveLBS-step1-select-reasonForTermination"]'), //filtro de motivo de terminación
        checkBoxIncludeTrue: () => cy.get('[data-cy="rem-massiveLBS-step1-checkbox-includeTruncatedRewardForCTSBase"]'), //checkbox incluir trabajadores activos
        checkBoxConsiderPayment: () => cy.get('[data-cy="rem-massiveLBS-step1-checkbox-considerPayment"]'), //checkbox considerar pago de beneficios
        labelOne: () => cy.get(':nth-child(14) > .tln-gap-3'), //label de la interfaz
        checkBoxIncludeWorkers: () => cy.get('[data-cy="rem-massiveLBS-step1-checkbox-includeWorkersWithGeneratedLBS"]'), //checkbox incluir trabajadores
    }

    goToLbs(business) {
        this.elements.lbsOption().click() 
    }

    pageBreadCrumbs() {
        this.elements.breadCrumbs().should('contain', 'Enlaces Avanzados')
    }

    verifyTitle() {
        this.elements.title().should('contain', 'Liquidación de Beneficios Sociales (LBS) masivo')
    }
}

export const lbsPage = new LbsPage () 