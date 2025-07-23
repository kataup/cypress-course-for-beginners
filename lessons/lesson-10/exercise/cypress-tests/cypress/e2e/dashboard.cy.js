/// <reference types="cypress" />
import ItemsNeco from "../fixtures/items.json"
describe('Dashboard - test', () => {
    beforeEach(() => {
        cy.visit('http://127.0.0.1:5500/cypress-course-for-beginners/lessons/lesson-10/exercise/login.html')
        cy.fixture('users.json').then((users) => {
            cy.nasLogin(users.validUserName, users.validPassword)
        })
    })

    it('should be able to read valid user name', () => {
        cy.get('[data-testid="username"]').should('be.visible').and('contain.text', 'demoUser')
    })

    it('display only active items', () => {
        cy.get('input[data-testid="checkbox1"]').check().should('be.checked')
        cy.get('tr[data-testid="table-row-1"]').should('be.visible')
        cy.get('tr[data-testid="table-row-3"]').should('be.visible')
        cy.get('tr[data-testid="table-row-2"]').should('not.exist')
    })

    it('Filter items by item name', () => {
        cy.fixture('items.json').then((data) => {
            data.forEach((item) => {
                cy.items(item.nazevItem)
                cy.get('span[data-testid="item-count"]').should('contain.text', item.count)           
            })
        })
    })

    ItemsNeco.forEach((polozka) => {
        it(`should search by item ${polozka.nazevItem}`, () => {
            cy.items(polozka.nazevItem)
            cy.get('span[data-testid="item-count"]').should('contain.text', polozka.count) 
        })
    })
})


