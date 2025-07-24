import menuComponent from "../components/menuComponent"
export default new class RegistrationPage {
    heading = () => cy.get('h1')
    usernameInput = () => cy.get('input[data-testid="username-input"]')
    emailInput = () => cy.get('input[data-testid="email-input"]')
    passwordInput = () => cy.get('input[data-testid="password-input"]')
    registrationButton = () => cy.get('button[data-testid="register-btn"]')

    insertRegistrationData(usernamValue, emailValue, passwordValue) {
        this.usernameInput().clear().type(usernamValue).blur()
        this.emailInput().clear().type(emailValue).blur()
        this.passwordInput().clear().type(passwordValue).blur()
        cy.wait(2000)
    }
        visit() {
            menu.navigate('register')
        }
    }
