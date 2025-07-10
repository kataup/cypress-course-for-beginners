describe('template spec', () => {
  it('passes', () => {
    cy.visit('index.html')
    cy.get('form[data-testid="login-form"]')
      .find('input[data-testid="username-input"]')
      .clear()
      .type('Katerina')


    cy.get('form[data-testid="login-form"]')
      .find('input[data-testid="password-input"]')
      .clear()
      .type('Heslo123')


    cy.get('select[id="role"]').select('Administrátor')
    

    cy.get('input[data-testid="accept-terms"]').check()

    cy.get('form[data-testid="login-form"]').submit()

    cy.get('p[data-testid=]')
    .should('be.visible').should('contain.text', 'Přihlášení je úspěšné!')
  })
})

