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
        buttonClose: () => cy.get('[title="Cerrar mensaje"]'), //boton cerrar cy.get('[title="Cerrar mensaje"]')
        buttonGenerate: () => cy.get('#GenerarConBoleta'), //boton generar
        modalTitle: () => cy.get('#modalTitleId'), //titulo de ventana 
        modalGenerate: () => cy.get('#modalExitoFiniquitoIndependiente > .modal-dialog > .modal-content > .modal-footer > .btn-success'), //Cálculo de LBS Generado
        buttonInicio: () => cy.get('#modalExitoFiniquitoIndependiente > .modal-dialog > .modal-content > .modal-footer > .btn-warning'), //boton inicio
        pageBreadCrumbs: () => cy.get('.talana-breadcrumbs-world > a'), //REMUNERACIONES
        wgenerate: () => cy.get('#modalPreviewPeru > .modal-dialog > .modal-content > .modal-footer'), //boton generar
    }

    //metodos 
    enterDni(dni) {
        this.elements.textBox().clear().type(dni) //escribir dni
    }

    buttonNoVigentes() {
        this.elements.buttonNo().click() //boton no vigentes
    }

    // verifiDni(dni) {
    //     this.elements.boxDni().should('contain', dni) //verificar dni
    // }

    verifiDni(dni) {
        const waitForDni = () => {
            cy.get('body').then(($body) => {
                if ($body.find('.odd > :nth-child(2) > :nth-child(1)').length === 0) {
                    cy.wait(1000); // Espera breve antes de verificar de nuevo
                    waitForDni(); // Llamada recursiva para seguir esperando
                } else {
                    cy.wait(4000); // Espera adicional para asegurar que el contenido se cargue completamente
                    this.elements.boxDni().should('contain', dni); // Verificar DNI
                }
            });
        };
    
        cy.wait(2000); // Espera inicial para permitir que el contenido se cargue
        waitForDni();
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

    clickButtonClose() {
        const waitForButtonClose = () => {
            cy.get('body').then(($body) => {
                if ($body.find('[title="Cerrar mensaje"]').length === 0) {
                    cy.wait(1000); // Espera breve antes de verificar de nuevo
                    waitForButtonClose(); // Llamada recursiva para seguir esperando
                } else {
                    this.elements.buttonClose().scrollIntoView().should('be.visible').click({ force: true }).then(() => {
                        // Verificar que la acción de cerrar se completó
                        cy.get('body').then(($bodyAfterClick) => {
                            if ($bodyAfterClick.find('[title="Cerrar mensaje"]').length > 0) {
                                // Si el botón aún está presente, volver a intentar
                                waitForButtonClose();
                            }
                        });
                    });
                }
            });
        };
    
        const ensureIframeVisible = () => {
            cy.get('iframe').then(($iframe) => {
                if ($iframe.css('opacity') === '0' || $iframe.css('position') === 'fixed' || $iframe.is(':hidden')) {
                    cy.wrap($iframe).invoke('css', 'opacity', '1').invoke('css', 'position', 'static').invoke('css', 'display', 'block');
                }
            });
        };
    
        ensureIframeVisible();
        waitForButtonClose();
    }
    
    // clickButtonGenerate() { SIRVE
    //     cy.get('[title="Cerrar mensaje"]').click() //boton cerrar 
    //     const waitForButtonGenerate = () => {
    //         cy.get('body').then(($body) => {
    //             if ($body.find('#GenerarConBoleta').length === 0) {
    //                 cy.wait(1000); // Espera breve antes de verificar de nuevo
    //                 waitForButtonGenerate(); //para seguir esperando
    //             } else {
    //                 cy.wait(5000); // espera adicional porque no se puede hacer clic en el botón
    //                 this.elements.buttonGenerate().should('be.visible').click(); // Verificar visibilidad y hacer clic
    //             }
    //         });
    //     };

    //     waitForButtonGenerate();
    // }

    //OTRA OPCIÓN

    clickWgenerate() {
        cy.get('#modalPreviewPeru > .modal-dialog > .modal-content > .modal-footer').click() //ventana modal
    }

    clickButtonGenerate() {
        cy.get('[title="Cerrar mensaje"]').click(); // botón cerrar
        const waitForButtonGenerate = () => {
            cy.get('body').then(($body) => {
                if ($body.find('#GenerarConBoleta').length === 0) {
                    cy.wait(1000); // Espera breve antes de verificar de nuevo
                    waitForButtonGenerate(); // para seguir esperando
                } else {
                    cy.wait(5000); // Espera adicional para asegurar que el contenido se cargue completamente
                    this.elements.buttonGenerate()
                        .scrollIntoView() // Asegurarse de que el botón esté en la vista
                        .should('be.visible')
                        .click(); // Verificar visibilidad y hacer clic
                }
            });
        };
    
        waitForButtonGenerate();
    }
    

    
    verfyModalGenerate () {
        this.elements.modalGenerate().should('be.visible') //Cálculo de LBS Generado
    }    
          
    

    verfyModal () {
        this.elements.modalTitle().should('be.visible') 
    }

    // verfyModalGenerate () {
    //     cy.wait(5000)
    //     this.elements.modalGenerate().should('be.visible') //Cálculo de LBS Generado
    // }

    // verfyModalGenerate() {
    //     const waitForModalGenerate = () => {
    //         cy.get('body').then(($body) => {
    //             if ($body.find(this.elements.modalGenerate()).length === 0) {
    //                 cy.wait(1000); // Espera breve antes de verificar de nuevo
    //                 waitForModalGenerate(); // Llamada recursiva para seguir esperando
    //             } else {
    //                 this.elements.modalGenerate().should('be.visible');
    //             }
    //         });
    //     };
    
    //     waitForModalGenerate();
    // }
    

    clickButtonInicio() {
        cy.wait(5000)
        this.elements.buttonInicio().click() //boton inicio
    }

    verifyPageBreadCrumbs() {
        this.elements.pageBreadCrumbs().should('contain', 'REMUNERACIONES')
    }
}

export const lbsIndividualPage = new LbsIndividualPage () 