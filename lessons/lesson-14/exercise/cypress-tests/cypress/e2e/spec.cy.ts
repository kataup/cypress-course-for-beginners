
describe('template spec', () => {
  it('generate value', () => {
    cy.visit('http://localhost:8080/')

    cy.get('[data-testid="nav-generate-button"]').click()
    cy.get('[data-testid="input1"]').type('ahoj')
    cy.get('[data-testid="confirm-button"]').click()
    cy.get('[data-testid="result-text"]').then(($result) => {
      const generetedText = $result.text().replace('Result 1:', '').trim()

      cy.task('saveSharedData', generetedText)

      cy.task('saveSharedDataToFile', generetedText)
     /*  cy.task('getSharedDataFromFile').then((generovanyText) => {
        cy.log('RETRIEVED SHARED DATA FROM FILE:' + generovanyText)
      }) */
    })
  })

  it('validate value', () => {
    cy.visit('http://localhost:8081')

    cy.task('getSharedDataFromFile').then((sharedData) => {
      cy.get('[data-testid="nav-validate-button"]').click()

      const textData = sharedData
      cy.get('input[data-testid="validate-input"]').type(textData)
      cy.get('[data-testid="verify-button"]').click()
      cy.get('[data-testid="verified-text"]').should('contain', textData)

    })

    // cy.get('button[data-testid="verify-button"').click()
    //  cy.get('[data-testid="verified-text"]').should('contain', 'Verified')
  })
})