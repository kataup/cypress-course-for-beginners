describe('User Registration Form', () => {
  it('Submits the form with valid data', () => {
    cy.visit('/register');

    // Fill out the form
    cy.get('#username').type('testUser');
    cy.get('#email').type('testuser@example.com');
    cy.get('#password').type('SecurePass123');

    // Conditional Check: Ensure the Submit button is enabled
    cy.get('#submit').then(($btn) => {
      if (!$btn.is(':disabled')) {
        cy.wrap($btn).click();
      } else {
        throw new Error('Submit button is disabled');
      }
    });

    // Verify successful registration
    cy.contains('Registration Successful!').should('be.visible');
  });

  it('Displays error with invalid email', () => {
    cy.visit('/register');

    // Fill out the form with invalid email
    cy.get('#username').type('testUser');
    cy.get('#email').type('invalid-email');
    cy.get('#password').type('SecurePass123');

    // Attempt to submit the form
    cy.get('#submit').click();

    // Conditional Check: Display error message if email is invalid
    cy.get('.error-message').then(($msg) => {
      if ($msg.is(':visible')) {
        cy.wrap($msg).should('contain', 'Invalid email address');
      } else {
        throw new Error('Error message not displayed for invalid email');
      }
    });
  });
});
