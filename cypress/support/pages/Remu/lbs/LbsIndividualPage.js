class LbsIndividualPage {
    elements = {
        textBox: () => cy.get('label > .form-control'), 
        boxDni: () => cy.get('.odd > :nth-child(2) > :nth-child(1)'), 
        buttonNo: () => cy.get('#mostrarNoVigentes-switch'), 
        buttonEmployee: () => cy.get(':nth-child(8) > a > .zmdi').first(), 
        buttonLbs: () => cy.get('[data-cy="gdp-employees-request-settlement"]'), 
        breadCrumbs: () => cy.get('#talana-breadcrumbs-world-title > strong'), 
        generateLbs: () => cy.get('[data-cy="gdp-employees-simular-action"]'), 
        verifyModal: () => cy.get('#modalTitleId'), 
        verifyTitle: () => cy.get('.modal-title > b'), 
        buttonClose: () => cy.get('[title="Cerrar mensaje"]'), 
        buttonGenerate: () => cy.get('#GenerarConBoleta'), 
        modalTitle: () => cy.get('#modalTitleId'), 
        modalGenerate: () => cy.get('#modalExitoFiniquitoIndependiente > .modal-dialog > .modal-content > .modal-body'), //Cálculo de LBS Generado
        buttonInicio: () => cy.get('[data-cy="gdp-employees-return-home-action"]'), 
        pageBreadCrumbs: () => cy.get('.talana-breadcrumbs-world > a'), 
        wgenerate: () => cy.get('#modalPreviewPeru > .modal-dialog > .modal-content > .modal-footer'), 
        folder: () => cy.get('#modalExitoFiniquitoIndependiente > .modal-dialog > .modal-content > .modal-footer > .btn-success'),
        viewDoc: () => cy.get('#panelHeadingLBS > .panel-title > a')   
    }
 
    enterDni(dni) {
        this.elements.textBox().clear().type(dni) 
    }

    buttonNoVigentes() {
        this.elements.buttonNo().click() 
    }

    // verifiDni(dni) {
    //     this.elements.boxDni().should('contain', dni) //verificar dni
    // }

    verifiDni(dni) {
        const waitForDni = () => {
            cy.get('body').then(($body) => {
                if ($body.find('.odd > :nth-child(2) > :nth-child(1)').length === 0) {
                    cy.wait(1000); 
                    waitForDni(); 
                } else {
                    cy.wait(4000); 
                    this.elements.boxDni().should('contain', dni); 
                }
            });
        };
    
        cy.wait(2000); 
        waitForDni();
    }
    

    enterToEmployee() {
        this.elements.buttonEmployee().click() 
    }

    enterToLbs() {
        this.elements.buttonLbs().click() 
    }

    pageBreadCrumbs() {
        this.elements.breadCrumbs().should('contain', 'Generar finiquito') 
    }

    generateLbs() {
        this.elements.generateLbs().click() 
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
                    cy.wait(1000); 
                    waitForButtonClose(); 
                } else {
                    this.elements.buttonClose().scrollIntoView().should('be.visible').click({ force: true }).then(() => {
                        cy.get('body').then(($bodyAfterClick) => {
                            if ($bodyAfterClick.find('[title="Cerrar mensaje"]').length > 0) {
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
   
    clickWgenerate() {
        const waitForModalToDisappear = () => {
            cy.get('body').then(($body) => {
                if ($body.find('#modalPreviewPeru > .modal-dialog > .modal-content > .modal-footer').length > 0) {
                    cy.get('#modalPreviewPeru > .modal-dialog > .modal-content > .modal-footer')
                      .click() // Hace clic en la ventana modal
                      .then(() => {
                          cy.wait(500); // Espera breve para que el cambio en la interfaz gráfica se refleje
                          waitForModalToDisappear(); // Llama recursivamente hasta que el modal desaparezca
                      });
                } else {
                    cy.log('El modal ha desaparecido');
                }
            });
        };
    
        waitForModalToDisappear();
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

    verfyModalGenerate() {
        const waitForModalGenerate = () => {
            cy.get('body').then(($body) => {
                const modalContainer = $body.find('#modalExitoFiniquitoIndependiente.modal.fade');
                if (modalContainer.length === 0 || modalContainer.css('display') === 'none') {
                    cy.wait(1000); // Espera antes de verificar de nuevo
                    waitForModalGenerate(); // Llamada recursiva para seguir esperando
                } else {
                    cy.get('#modalExitoFiniquitoIndependiente > .modal-dialog > .modal-content > .modal-header')
                        .should('be.visible') // Asegurarse de que el encabezado del modal es visible
                        .then(() => {
                            cy.log('El modal es visible y activo');
                        });
                }
            });
        };
    
        waitForModalGenerate();
    }
    
    
    
    
    clickButtonInicio() {
        cy.wait(8000)
        this.elements.buttonInicio().click() //boton inicio
    }

    verifyPageBreadCrumbs() {
        this.elements.pageBreadCrumbs().should('contain', 'REMUNERACIONES')
    }

    goToFolder() {
        this.elements.folder().click() 
    }

    clickLbs() {
        this.elements.viewDoc().click()
    }
}

export const lbsIndividualPage = new LbsIndividualPage (); 