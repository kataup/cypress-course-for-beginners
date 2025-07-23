// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('nasLogin', (username, password) => {
    cy.get('[data-testid="username-input"]').type(username)
    cy.get('[id="password"]').type(password)
    cy.get('[data-testid="login-button"]').should('be.visible').click()
}) // prvni je nazev commandu, druhy parametr je function

Cypress.Commands.add('items', (itemNazev) => {
    cy.get('input[data-testid="search-input"]').clear().type(itemNazev)
})