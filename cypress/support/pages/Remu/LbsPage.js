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
        filterCalendar: () => cy.get('[data-cy="rem-massiveLBS-step1-select-retirementDate"]'), //filtro de calendario
        filterReasonTermination: () => cy.get('[data-cy="rem-massiveLBS-step1-select-reasonForTermination"]'), //filtro de motivo de terminación
        checkBoxIncludeTrue: () => cy.get('[data-cy="rem-massiveLBS-step1-checkbox-includeTruncatedRewardForCTSBase"]'), //checkbox incluir trabajadores activos
        checkBoxConsiderPayment: () => cy.get('[data-cy="rem-massiveLBS-step1-checkbox-considerPayment"]'), //checkbox considerar pago de beneficios
        labelOne: () => cy.get(':nth-child(14) > .tln-gap-3'), //label de la interfaz
        checkBoxIncludeWorkers: () => cy.get('[data-cy="rem-massiveLBS-step1-checkbox-includeWorkersWithGeneratedLBS"]'), //checkbox incluir trabajadores
        checkVacation: () => cy.get('[data-cy="rem-massiveLBS-step1-checkbox-considerPaymentForVacationCompensation"]'), //checkbox considerar vacaciones
        label: () => cy.get('[data-cy="rem-massiveLBS-step1-vacationCompensationMessageValidation"]'), //Pago por indemnización por despido activado
        closeLabel: () => cy.get('[data-cy="rem-massiveLBS-step1-vacationCompensationMessageValidation"] > .tln-text-primary-100') //cerrar label
    }

    goToLbs(business) {
        this.elements.lbsOption().click() 
    }

    pageBreadCrumbs() {
        this.elements.breadCrumbs().should('contain', 'Enlaces Avanzados')
    }

    verifyTitle() {
        const waitForTitle = () => {
            cy.get('body').then(($body) => {
                if ($body.find('.tln-text-title-lg').length === 0) {
                    cy.wait(1000); // Espera breve antes de verificar de nuevo
                    waitForTitle(); //para seguir esperando
                } else {
                    this.elements.title().should('contain', 'Liquidación de Beneficios Sociales (LBS) masivo'); // Verificar contenido del título
                }
            });
        };

        waitForTitle();
    }
    

    verifyStepOne() {
        this.elements.stepOne().should('contain', 'Seleccionar trabajadores a liquidar')
    }

    verifyTitleStepOne() {
        this.elements.titleStepOne().should('contain', 'Seleccionar trabajadores a procesar')
    }

    selectFilterWorker() {
        this.elements.filterWorker().click()
    }

    selectFilterBussinesName() {
        this.elements.filterBussinesName().click()
    }

    selectFilterCostCenter() {
        this.elements.filterCostCenter().click()
    }

    selectFilterBranch() {
        this.elements.filterBranch().click()
    }

    selectFilterCalendar() {
        this.elements.filterCalendar().click()
    }

    selectFilterReasonTermination() {
        this.elements.filterReasonTermination().click()
    }

    clickCheckBoxIncludeTrue() {
        this.elements.checkBoxIncludeTrue().click()
    }

    // clickCheckBoxConsiderPayment() {
    //     this.elements.checkBoxConsiderPayment().click()
    // }

    verifyLabelOne() {
        this.elements.labelOne().should('contain', 'Incluir trabajadores activos')
    }

    clickCheckBoxIncludeWorkers() {
        cy.wait(2000) 
        this.elements.checkBoxIncludeWorkers().click()
    }

    clickCheckVacation() {
        const waitForCheckVacation = () => {
            cy.get('body').then(($body) => {
                if ($body.find('[data-cy="rem-massiveLBS-step1-checkbox-considerPaymentForVacationCompensation"]').length === 0) {
                    cy.wait(1000); // Espera breve antes de verificar de nuevo
                    waitForCheckVacation(); //para seguir esperando
                } else {
                    this.elements.checkVacation()
                        .scrollIntoView({ ensureScrollable: false })
                        .should('be.visible')
                        .click({ force: true }); // forzar clic
                }
            });
        };

        waitForCheckVacation();
    }

    verifyLabel() {
        this.elements.label().should('contain', 'Pago por indemnización por despido activado')
    }

}

export const lbsPage = new LbsPage () 