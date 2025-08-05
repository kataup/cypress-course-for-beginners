import menuComponents from "../pages/Components/menuComponents"
import loginPage from "../pages/loginPage"
import { LoginCredential } from "../pages/loginPage"
import { MenuItem } from "../pages/Components/menuComponents"
describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
    menuComponents.navigate(MenuItem.LOGIN)

    const credentials: LoginCredential = {
      email: 'email@email.com',
      password: 'heslo'
    }
    loginPage.loginWithInterface(credentials)

      cy.login()
  })
})