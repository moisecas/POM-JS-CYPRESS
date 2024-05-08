

// Comando personalizado de inicio de sesión
Cypress.Commands.add('login', (username, password) => {
    cy.get('[data-cy="talana-user-input"]').type(username);
    cy.get('[data-cy="talana-password-input"]').type(password);
    cy.get('[data-cy="talana-login-button"]').click(); 
  });
  