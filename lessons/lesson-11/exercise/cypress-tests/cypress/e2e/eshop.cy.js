
import InventoryPage from "../pages/components/inventoryItem.component";
import InventoryItemDetail from "../pages/inventoryItemDetail";

describe('Saucelabs shopping cart tests', () => {
        beforeEach(() => {
cy.visit('https://www.saucedemo.com/')
cy.login('standard_user','secret_sauce')

})
    it('Should add products to cart and all items be available in Shopping cart detail page', () => {
        const inventoryItem = new InventoryPage('Sauce Labs Backpack')
        inventoryItem.name().should('have.text', 'Sauce Labs Backpack')
        inventoryItem.openDetail()
        inventoryItem.addToCard()
        

    })
});