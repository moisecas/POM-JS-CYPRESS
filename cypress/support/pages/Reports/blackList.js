class BlackList {
    elements = {
        breadCrumbs: () => cy.get('.breadcrumb > .active'), 
        value: () => cy.get('#table-filter-value-filter'),
        type: () => cy.get('#table-filter-type-filter'),
        status: () => cy.get('#table-filter-type-filter'),
        filter: () => cy.get('.mb-3 > .btn'),
        columns: () => cy.get('#perPage'),
        addNew: () => cy.get('.btn > .d-none'),         
    }

    

}

export const blackList = new BlackList() 