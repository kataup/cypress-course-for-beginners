describe('swag labs tests', () => {
  it('add product to cart', () => {
    cy.visit('https://www.saucedemo.com/')

cy.get('[data-test="username"]').type('standard_user')
cy.get('[data-test="password"]').type('secret_sauce')
cy.get('[data-test="login-button"]').click()

cy.url().should('contain', 'inventory')
cy.get('[data-test="inventory-item-name"]').contains('Sauce Labs Bolt T-Shirt').click()

cy.url().should('contain', 'inventory-item')
cy.get('[data-test="add-to-cart"]').click()

cy.get('[data-test="back-to-products"]').click()
cy.url().should('contain', 'inventory')

cy.get('[data-test="inventory-container"]').within(() => {
  cy.get('[data-test="inventory-item-name"]').contains('Sauce Labs Backpack')
  cy.get('button[data-test="add-to-cart-sauce-labs-backpack"]').should('exist').click()
})

cy.get('[data-test="shopping-cart-link"]').should('have.text', '2')

cy.get('[data-test="shopping-cart-link"]').click()
cy.get('[data-test="inventory-item"').eq(0).should('contain.text', 'Sauce Labs Bolt T-Shirt')
cy.get('[data-test="inventory-item"]').eq(1).should('contain.text', 'Sauce Labs Backpack')


  })
})