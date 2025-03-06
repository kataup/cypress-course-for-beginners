/// <reference types="cypress" />

describe('Login Page @login', () => {

  before(() => {
    cy.visit('login.html');
  })

  beforeEach(() => {
    cy.visit('login.html');
  });

  describe('Validation Errors', () => {
    it('should display error messages for username and password', () => {
      cy.get('[data-cy="login-submit-button"]').click();
      cy.get('[data-cy="error-username"]')
        .should('be.visible')
        .and('contain', 'Username is required.');
      cy.get('[data-cy="error-password"]')
        .should('be.visible')
        .and('contain', 'Heslo je povinné.');
    });

    it('should display an error message for username only', () => {
      cy.get('[data-cy="login-password-input"]').type('demoPass');
      cy.get('[data-cy="login-submit-button"]').click();
      cy.get('[data-cy="error-username"]')
        .should('be.visible')
        .and('contain', 'Používateľské meno je povinné.');
      cy.get('[data-cy="error-password"]').should('not.be.visible');
    });

    it('should display an error message for password only', () => {
      cy.get('[data-cy="login-username-input"]').type('demoUser');
      cy.get('[data-cy="login-submit-button"]').click();
      cy.get('[data-cy="error-password"]')
        .should('be.visible')
        .and('contain', 'Heslo je povinné.');
      cy.get('[data-cy="error-username"]').should('not.be.visible');
    });

    it('should display an invalid credentials error', () => {
      cy.get('[data-cy="login-username-input"]').type('wrongUser');
      cy.get('[data-cy="login-password-input"]').type('wrongPass');
      cy.get('[data-cy="login-submit-button"]').click();
      cy.get('[data-cy="error-invalid"]')
        .should('be.visible')
        .and('contain', 'Nesprávne prihlasovacie údaje');
    });
  });

  describe('Successful Login', () => {
    it('should log in successfully with valid credentials', () => {
      cy.get('[data-cy="login-username-input"]').type('demoUser');
      cy.get('[data-cy="login-password-input"]').type('demoPass');
      cy.get('[data-cy="login-submit-button"]').click();
      cy.get('[data-cy="login-success-message"]')
        .should('be.visible')
        .and('contain', 'Prihlásenie úspešné');
      // Optionally, assert that the URL changes to include dashboard.html after redirection
      cy.url().should('include', 'dashboard.html');

      // Overenie obsahu na dashboarde
      cy.get('[data-cy="dashboard-title"]')
        .should('be.visible')
        .and('contain', 'Nástenka');
      cy.get('[data-cy="welcome-message"]')
        .should('be.visible')
        .and('contain', 'Vitajte, demoUser!');

      // Overenie zoznamu technológií
      cy.get('[data-cy="tech-list"]').should('be.visible');
      cy.get('[data-cy="tech-item"]').should('have.length', 3);
    });
  });
});


// In your test file, e.g., cypress/integration/login.spec.js

describe('User Login @login', () => {
  beforeEach(() => {
    cy.visit('login.html');
  });

  it('should logs in successfully with valid credentials', () => {
    cy.login('demoUser', 'demoPass');
    cy.get('[data-cy="login-success-message"]')
      .should('be.visible')
      .and('contain', 'Login successful');
  });
});

