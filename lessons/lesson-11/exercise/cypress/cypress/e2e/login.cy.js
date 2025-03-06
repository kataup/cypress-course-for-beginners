import loginPage from '../pages/login.page'
import navigationComponent from '../pages/component/navigation.component'

describe('Login Page', () => {
  beforeEach(() => {
    //cy.visit('/login').wait(500)
    navigationComponent.loginLink().click()
  })

  it('should display login form', () => {
    loginPage.emailInput().should('be.visible')
    loginPage.passwordInput().should('be.visible')
    loginPage.loginButton().should('be.visible')
    loginPage.registerButton().should('be.visible')
  })

  it.only('should navigate to account page on successful login', () => {
    const testEmail = 'test@example.com'
    const testPassword = 'CypressTests123!'

    loginPage.login(testEmail, testPassword)

    cy.url().should('include', '/account')
    cy.get('[data-testid="email-display"]').should('contain', testEmail)
  })

  it('should navigate to account page on successful register', () => {
    const testEmail = 'test@example.com'
    cy.get('[data-testid="email-input"]').type(testEmail)
    cy.get('[data-testid="password-input"]').type('CypressTests123!')
    cy.get('[data-testid="register-button"]').click()

    cy.url().should('include', '/account')
    cy.get('[data-testid="email-display"]').should('contain', testEmail)
  })
})