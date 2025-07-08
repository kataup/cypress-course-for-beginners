describe('template spec', () => {
  it('passes', () => {
    cy.visit('/login.html')

        const nameInput = cy.get('input[data-testid="username-input"]')
        nameInput.type('Katerina')

        const loginButton = cy.get('button[data-testid="login-button"]')
        loginButton.click()
  
  })
})

