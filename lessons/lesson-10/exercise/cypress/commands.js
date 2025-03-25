// In cypress/support/commands.js

Cypress.Commands.add('login', (username, password) => {
  // Clear the inputs and type the credentials
  cy.get('[data-cy="login-username-input"]').clear().type(username);
  cy.get('[data-cy="login-password-input"]').clear().type(password);
  // Click the login button
  cy.get('[data-cy="login-submit-button"]').click();
});
