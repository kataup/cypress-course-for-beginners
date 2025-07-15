describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')


  // ze prvek existuje v DOM
  cy.get('selector').should('exist')
  })
})