export default new class ContactPage {

    heading = () => cy.get('h1')
    input = () => cy.get('input[data-testid="name-input"]')
    errorMessage = () => cy.get('span[data-testid="name-error"]')
    email = () => cy.get('input[data-testid="email-input"]')
    emailError = () => cy.get('span[data-testid="email-error"]')
    message = () => cy.get('[data-testid="message-input"]')
    messageError = () => cy.get('span[data-testid="message-error"]')
    submit = () => cy.get('button[data-testid="submit-button"]')

    login(emailValue, passwordValue) {
        this.email().type(emailValue).blur()
        this.getPasswordInput().type(passwordValue).blur()
        this.getLoginButton().blur.apply().click()
    }
    

}