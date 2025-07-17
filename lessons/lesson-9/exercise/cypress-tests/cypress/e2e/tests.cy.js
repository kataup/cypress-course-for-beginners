describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')

    cy.fixture('example.json').then((example) => { // cypress najde obsah a vlozi ji do te promenne example
      cy.log(example.toString())
    }
  ) 
  })
})


