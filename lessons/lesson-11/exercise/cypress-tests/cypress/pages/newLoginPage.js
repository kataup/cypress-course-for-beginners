// POM pro login page

export default new class NewLoginPage {

    loginInput = () => cy.get('input[data-test="username"]')
    passwordInput = () => cy.get('input[data-test="password"]')
    loginButton = () => cy.get('input[data-test="login-button"]')

    login(username, password) {
        this.loginInput().type(username)
        this.passwordInput().type(password)
        this.loginButton().click()
    }
}