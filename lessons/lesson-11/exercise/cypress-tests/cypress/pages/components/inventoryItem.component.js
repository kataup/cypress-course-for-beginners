export default class InventoryPage {
    itemName = ''
    constructor(itemName) {
        this.itemName = itemName
    }

    // selectory 
    parentElement = () => cy.get('[data-test="inventory-item"]')
    .find('data-test="inventory-item-name"]').contains(this.itemName)

    name = () => this.parentElement().find('[data.test="inventory-item-name"]')
    addToCartButton = () => this.parentElement().find('button').contains('Add to cart')
    // metody

    openDetail() {
    this.name().click()
    }

    addToCard() {
        this.addToCartButton().click()

    }
}