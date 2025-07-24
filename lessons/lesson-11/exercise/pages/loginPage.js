export default new class LoginPage { 
    getEmailInput() {
        return cy.get('input[data-testid="email-input"]')
    }

    getPasswordInput() {
        return cy.get('input[data-testid="password-input"]')
    }

    getLoginButton() {
        return cy.get('input[data-testid="login-btn"]')
    }

   // emailInput = () => cy.get('input[data-testid="email-input"]')

    login(emailValue, passwordValue) {
        this.getEmailInput().type(emailValue)
        this.getPasswordInput().type(passwordValue)
        this.getLoginButton().click()
    }
    
}


// nebo:
// export const loginPage = new LoginPage()