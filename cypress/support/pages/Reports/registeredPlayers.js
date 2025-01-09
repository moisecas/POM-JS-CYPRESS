class RegisteredPlayers {
  elements = {
        dateOne: () => cy.get(':nth-child(1) > .mb-3 > .col-12 > .input'),
        dateTwo: () => cy.get(':nth-child(1) > .mb-3 > .col-12 > .input'),
        export: () => cy.get(':nth-child(1) > .mb-3 > .col-12 > .input'),
        skin: () => cy.get(':nth-child(1) > .mb-3 > .col-12 > .input'),
        user: () => cy.get('#table-filter-user-name-filter'),
        afilaited: () => cy.get('.w-100 > .input-group > .form-control'),
        page: () => cy.get('#perPage'),

  }
}

export const registeredPlayers = new RegisteredPlayers()