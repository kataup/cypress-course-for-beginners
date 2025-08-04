export default class InventoryItemDetail {
    addToCartButton = () => cy.get('[data-test="add-to-cart"]')
    
    addToCart() {
        this.addToCartButton().click()
    }

backToTheListButton = () => cy.get('[data-test="back-to-products"]')

backToTheList(){
    this.backToTheListButton.click()
}
}