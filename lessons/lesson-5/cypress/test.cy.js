/// <reference types="cypress" />

describe('Login Form', () => {
  const usernameSelector = '[data-testid="username-input"]';
  const passwordSelector = '[data-testid="password-input"]';
  const loginButtonSelector = '[data-testid="login-button"]';
  const errorMessageSelector = '[data-testid="error-message"]';
  const successMessageSelector = '[data-testid="success-message"]';

  beforeEach(() => {
    // Visit the login page before each test
    cy.visit('http://localhost:8080/login.html');
  });

  it('should show error message when credentials are invalid', () => {
    cy.get(usernameSelector).type('invaliduser');
    cy.get(passwordSelector).type('wrongpassword');
    cy.get(loginButtonSelector).click();

    cy.get(errorMessageSelector).should('be.visible').and('contain', 'Invalid credentials');
    cy.get(successMessageSelector).should('not.be.visible');
  });

  it('should show success message when credentials are valid', () => {
    cy.get(usernameSelector).type('testuser');
    cy.get(passwordSelector).type('password123');
    cy.get(loginButtonSelector).click();

    cy.get(successMessageSelector).should('be.visible').and('contain', 'Login successful');
    cy.get(errorMessageSelector).should('not.be.visible');
  });
});
