export default new class NavigationComponent {
  homeLink = () => cy.get('[data-testid="nav-home"]');
  loginLink = () => cy.get('[data-testid="login-link"]');
  registerLink = () => cy.get('[data-testid="register-link"]');
  profileLink = () => cy.get('[data-testid="profile-link"]');
  logoutLink = () => cy.get('[data-testid="nav-login"]');
}