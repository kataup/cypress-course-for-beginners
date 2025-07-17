describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://127.0.0.1:5500/cypress-course-for-beginners/lessons/lesson-8/exercise/login.html')

// should čeká timeout, expect ihned porovná
  // ze prvek existuje v DOM
  // cy.get('selector').should('exist')
/*   cy.get('[data-testid="page-title"]').should('exist')
  cy.get('[data-testid="page-title"]').should('have.text', 'Prihlásenie') //doslovný text
  cy.get('[data-testid="page-title"]').should('contain.text', 'Pri') // obsahuje část textu
  cy.get('[data-testid="page-title"]').should('contain.value', ''). type('K')
  cy.get('[data-testid="page-title"]').should('have.value', 'Pri') */
// have.attr , href

// arange

// act

// assert 


cy.get('[data-testid="username-input"]').should('exist')
cy.get('[data-testid="password-input"]').should('be.visible')
cy.get('[data-testid="login-button"]').should('be.disabled')

cy.get('[data-testid="username-input"]').clear().type('nick')
cy.get('[data-testid="password-input"]').clear().type('heslo')
cy.get('[data-testid="login-button"]').should('be.enabled')

cy.get('[data-testid="username-input"]').clear().type('nick')
cy.get('[data-testid="password-input"]').clear().type('heslo')
cy.get('[data-testid="reset-button"]').click()


cy.get('[data-testid="username-input"]').should('have.value', '')
cy.get('[data-testid="login-button"]').should('be.disabled')

cy.get('[data-testid="username-input"]').clear().type('user')
cy.get('[data-testid="password-input"]').clear().type('pass')
cy.get('[data-testid="role-select"]').select(1)
cy.get('[data-testid="remember-me"]').check()
cy.get('[data-testid="login-button"]').click()

cy.url().should('contain', 'dashboard')
cy.get('[data-testid="dashboard-title"]').should('exist')





})
})