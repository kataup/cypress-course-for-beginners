describe('template spec', () => {
  it('passes', () => {
    cy.visit('index.html')
  /*  cy.get('form[data-testid="login-form"]')
      .find('input[data-testid="username-input"]')
      .clear()
      .type('Katerina')

    cy.get('form[data-testid="login-form"]').within(() => {

      cy.get('input[data-testid="username-input"]')
      .clear()
      .type('Katerina')

    }) */

  
    /* cy.get('form[data-testid="login-form"]')
      .find('input[data-testid="password-input"]')
      .clear()
      .type('Heslo123')


    cy.get('select[id="role"]').select('Administrátor')
    

    cy.get('input[data-testid="accept-terms"]').check()


    cy.get('form[data-testid="login-form"]').submit() */

   /*  cy.get('p[data-testid="success-message"]')
    .should('be.visible').should('contain.text', 'Přihlášení je úspěšné!') */

    // cy.get('input[data-testid="file-upload"]').selectFile('cypress/fixtures/img_24.jpeg')

/*     cy.get('button[data-testid="hover-button"]').trigger('mouseover')
    cy.get('span[data-testid="hover-feedback"]').should('be.visible')

    cy.wait(2000)

    cy.get('button[data-testid="hover-button"]').trigger('mouseleave')
    cy.get('span[data-testid="hover-feedback"]').should('not.be.visible')
 */
/* 
     cy.get('div[data-testid="within-container"]').within(() => {
       cy.get('input').type('Hey')
       cy.get('button[data-testid="within-button"]').click()
    }) */


  /*   cy.get('[data-testid="target-siblings"]').prev()  // předchozí
    cy.get('[data-testid="target-siblings"]').next(). // následující

    cy.get('[data-testid="parent-element"]').children().eq(1) */
 
/*     cy.get('button').contains('Process')

    cy.get('h2').contains('Nastavenia') */


    cy.get('input[data-testid="dynamic-search"]').type('l')
    cy.get('ul[data-testid="search-results"]').within(() => {
      cy.get('li').eq(0).should('be.visible').should('contain.text', 'Alice')
      cy.get('li').eq(1).should('not.be.visible').should('contain.text', 'Bob')
      cy.get('li').eq(2).should('be.visible').should('contain.text', 'Charlie')
    })

    })
  })