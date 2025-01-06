class ResumePayments {
    elements = {
        breadCrumbs: () => cy.get('.breadcrumb > .active'),
        filter: () => cy.get('.btn-group > div > .btn'),
        export: () => cy.get('.justify-content-between > :nth-child(2) > .waves-effect'),
        columns: () => cy.get('#columnSelect-table'),
        page: () => cy.get('#perPage'),
        dateOne: () => cy.get(':nth-child(1) > .mb-3 > .col-12 > .input'),
        dateTwo: () => cy.get(':nth-child(2) > .mb-3 > .col-12 > .input'),
        skin: () => cy.get('#table-filter-skin-filter'),
        filter: () => cy.get('.mb-3 > .btn'),

    }

    

}

export const resumePayments = new ResumePayments() 