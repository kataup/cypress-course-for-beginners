export default new class LoginPage {
  emailInput = () => cy.get('input[data-testid="email-input"]');
  passwordInput = () => cy.get('[data-testid="password-input"]');

  loginButton = () => cy.get('[data-testid="login-btn"]');
  registerButton = () => cy.get('[data-testid="register-btn"]');

  login = (email, password) => {
    this.emailInput().type(email);
    this.passwordInput().type(password);
    this.loginButton().click();
  }
}