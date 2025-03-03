// In your Cypress test file for registration (e.g., registration.spec.js)
import faker from 'faker';

describe('User Registration', () => {
  it('should register a new user with fake data', () => {
    const fakeUsername = faker.internet.userName();
    const fakeEmail = faker.internet.email();
    const fakePassword = faker.internet.password();

    cy.visit('http://127.0.0.1:5500/lessons/lesson-9/exercise2/registration.html');
    cy.get('[data-testid="reg-username-input"]').type(fakeUsername);
    cy.get('[data-testid="reg-email-input"]').type(fakeEmail);
    cy.get('[data-testid="reg-password-input"]').type(fakePassword);
    cy.get('[data-testid="reg-submit-button"]').click();

    cy.get('[data-testid="reg-success-message"]').should('be.visible');
  });
});
