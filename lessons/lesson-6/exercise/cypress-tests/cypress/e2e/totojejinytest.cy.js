describe('Toto je můj první Cypress test', () => {
    it('Toto je prvni test'), () => {
        cy.visit('/login.html')

        const nameInput = cy.get('input[data-testid="username-input"]')
        nameInput.type('Katerina')
    }
})

