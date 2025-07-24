import loginPage from '../pages/loginPage'

describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')

/* loginPage.getEmailInput().clear().type('totojeemail@email.com')
loginPage.getPasswordInput().clear().type('Heslo1234!')
loginPage.getLoginButton().click() */

loginPage.login('totojeemail@email.com', 'Heslo1234!')
loginPage.login.getLoginButton().click()

/* login(emailValue, passwordValue) {
        this.getEmailInput().type(emailValue)
        this.getPasswordInput().type(passwordValue)
        this.getLoginButton().click() */ // zápis výše reaguje na tento blok

  })
})