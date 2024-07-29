class LbsIndividualPage {
    elements = {
        textBox: () => cy.get('label > .form-control'), //escribir dni
        boxDni: () => cy.get('.odd > :nth-child(2) > :nth-child(1)'), //escribir dni
        buttonNo: () => cy.get('#mostrarNoVigentes-switch'), //boton no vigentes 
        buttonEmployee: () => cy.get(':nth-child(8) > a > .zmdi').first(), //entrar a la ficha del empleado
        buttonLbs: () => cy.get('[data-cy="gdp-employees-request-settlement"]'), //entrar a lbs
        breadCrumbs: () => cy.get('#talana-breadcrumbs-world-title > strong'), //Generar finiquito
        generateLbs: () => cy.get('[data-cy="gdp-employees-simular-action"]'), //clic Generar finiquito
        verifyModal: () => cy.get('#modalTitleId'), //modal de espera
        verifyTitle: () => cy.get('.modal-title > b'), //titulo de ventana generar lbs 
        buttonGenerate: () => cy.get('#GenerarConBoleta'), //boton generar
        modalTitle: () => cy.get('#modalTitleId'), //titulo de ventana 
        modalGenerate: () => cy.get('#modalExitoFiniquitoIndependiente > .modal-dialog > .modal-content > .modal-footer > .btn-success'), //Cálculo de LBS Generado
        buttonInicio: () => cy.get('#modalExitoFiniquitoIndependiente > .modal-dialog > .modal-content > .modal-footer > .btn-warning'), //boton inicio
        pageBreadCrumbs: () => cy.get('.talana-breadcrumbs-world > a'), //REMUNERACIONES
    }

    //metodos 
    enterDni(dni) {
        this.elements.textBox().clear().type(dni) //escribir dni
    }

    buttonNoVigentes() {
        this.elements.buttonNo().click() //boton no vigentes
    }

    verifiDni(dni) {
        this.elements.boxDni().should('contain', dni) //verificar dni
    }

    enterToEmployee() {
        this.elements.buttonEmployee().click() //entrar a la ficha del empleado
    }

    enterToLbs() {
        this.elements.buttonLbs().click() //entrar a lbs
    }

    pageBreadCrumbs() {
        this.elements.breadCrumbs().should('contain', 'Generar finiquito') //Generar finiquito
    }

    generateLbs() {
        this.elements.generateLbs().click() //Generar finiquito
    }

    verifyModal() {
        this.elements.verifyModal().should('be.visible');
    }
    
    verifyTitle() {
        this.elements.verifyTitle().should('contain', 'Información del empleado LBS')
    }

    clickButtonGenerate() {
        const waitForButtonGenerate = () => {
            cy.get('body').then(($body) => {
                if ($body.find('#GenerarConBoleta').length === 0) {
                    cy.wait(1000); // Espera breve antes de verificar de nuevo
                    waitForButtonGenerate(); // Llamada recursiva para seguir esperando
                } else {
                    this.elements.buttonGenerate().should('be.visible').click(); // Verificar visibilidad y hacer clic
                }
            });
        };

        waitForButtonGenerate();
    }

    verfyModal () {
        this.elements.modalTitle().should('be.visible') 
    }

    verfyModalGenerate () {
        this.elements.modalGenerate().should('be.visible') //Cálculo de LBS Generado
    }

    clickButtonInicio() {
        this.elements.buttonInicio().click() //boton inicio
    }

    verifyPageBreadCrumbs() {
        this.elements.pageBreadCrumbs().should('contain', 'REMUNERACIONES')
    }
}

export const lbsIndividualPage = new LbsIndividualPage () 