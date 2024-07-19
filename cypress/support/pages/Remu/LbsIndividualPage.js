class LbsIndividualPage {
    elements = {
        textBox: () => cy.get('label > .form-control'), //escribir dni
        boxDni: () => cy.get('.odd > :nth-child(2) > :nth-child(1)'), //escribir dni
        buttonEmployee: () => cy.get(':nth-child(8) > a > .zmdi').first(), //entrar a la ficha del empleado
        buttonLbs: () => cy.get('[data-cy="gdp-employees-request-settlement"]'), //entrar a lbs
        breadCrumbs: () => cy.get('#talana-breadcrumbs-world-title > strong'), //Generar finiquito
        generateLbs: () => cy.get('[data-cy="gdp-employees-simular-action"]'), //clic Generar finiquito
        verifyModal: () => cy.get('#modalTitleId'), //modal de espera
        verifyTitle: () => cy.get('.modal-title > b'), //titulo de ventana generar lbs 
        buttonGenerate: () => cy.get('#GenerarConBoleta'), //boton generar
        
    }

    //metodos 
    enterDni() {
        this.elements.textBox().type('41692381') //escribir dni
    }

    verifiDni() {
        this.elements.boxDni().should('contain', '41692381') //verificar dni
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
        this.elements.buttonGenerate().click() //boton generar
    }
}

export const lbsIndividualPage = new LbsIndividualPage () 