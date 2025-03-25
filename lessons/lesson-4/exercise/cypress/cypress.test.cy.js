// Cypress Test
describe('User Registration', () => {
  beforeEach(() => {
    cy.fixture('users').as('usersData');
  });

  it('Registers multiple users from JSON data', function () {
    this.usersData.forEach(user => {
      cy.visit('/register');
      cy.get('#username').type(user.name);
      cy.get('#email').type(user.email);
      cy.get('#role').select(user.role);
      cy.get('#submit').click();
      cy.contains('Registration Successful!').should('be.visible');
    });
  });
});
