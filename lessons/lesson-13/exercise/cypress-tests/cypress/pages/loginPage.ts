export default new class LoginPage {
    loginInput = () => cy.get('[data-testid="login-email-input"]')
    passwordInput = () => cy.get('[data-testid="login-password-input"]')
    loginButton = () => cy.get('[data-testid="login-submit-button"]')

    login(emailValue: string, passwordValue: string, age?: number) { // , otazník znamená že je optional, je třeba zadefinovat typ :..... any (když nevíme typ)
        this.loginInput().clear().type(emailValue) // proměnná v type přijima jen string
        this.passwordInput().clear().type(passwordValue)
        this.loginButton().click()
    }

    loginWithInterface(credentials: LoginCredential) {
        credentials.email
        credentials.password
        this.loginInput().type(credentials.email)
        this.passwordInput().type(credentials.password)
    }
}

export interface LoginCredential {
    email: string;
    password: string;

}
//v objektu, který vytvořím, tak mu dodám jasně stanovenou formu, tzn. musí mít jedině mail a heslo 

export type LoginCredentialType = { // podobné, jako interface, ale liší se, že může mít dva typy v testu
    email: string;
    password: string;
    vek?: number
}

enum UserRole { // přesně zadefinované konstanty
    ADMIN = 'Admin',
    EDITOR = 'editor',
    VIEWER = 'Viewer'
}