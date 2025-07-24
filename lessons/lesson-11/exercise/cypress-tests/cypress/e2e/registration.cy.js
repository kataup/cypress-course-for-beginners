import registrationPage from "../pages/registrationPage"
import registrationUserdata from "../fixtures/registrationUser.json"
describe('template spec', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/register')
    })

    it('should validate html elements on page', () => {
        registrationPage.heading()
            .should('be.visible')
            .and('have.text', 'Register')

        registrationPage.usernameInput().should('be.visible')
        registrationPage.emailInput().should('be.visible')
        registrationPage.passwordInput().should('be.visible')
        registrationPage.registrationButton().should('be.visible')
    })

    it('register new user with valid', () => {
        registrationPage.insertRegistrationData(registrationUserdata.username, registrationUserdata.email, registrationUserdata.password)
        registrationPage.registrationButton().click()

    })

    cy.url().should('contain', 'account')

    it('register new user with invalid', () => {
        registrationPage.insertRegistrationData(registrationUserdata.username, registrationUserdata.invalidEmail, registrationUserdata.password)

        // assert 

        cy.contains('invalid email format').should('be.visible')
    })
})
