
describe('testovani adres', () => {
    it('overeni stranky', () => {
        cy.visit('http://127.0.0.1:5500/cypress-course-for-beginners/lessons/lesson-9/exercise/index.html')

        cy.url().should('include', 'lesson-9/exercise/index.html')
        cy.get('input[data-testid="search-input"]').should('be.visible').and('have.value', '')

        cy.get('button[data-testid="search-button"]').should('be.visible').and('be.enabled')


        cy.fixtures('adresy.json').then((adresy) => {
            adresy.forEach((adresa) => {
            cy.log(adresa.hledanaAdresa)
            cy.get('input[data-testid="search-input"]').clear().type(adresa.hledanaAdresa)
            cy.get('button[data-testid="search-button"]').click()
            cy.get('[data-testid="result-display"]').find('[class="result-item"]').eq(0).should('contain', adresa.ruianKod)
            })
        })
        

      /*   cy.get('input[data-testid="search-input"]').type('123')
        cy.get('button[data-testid="search-button"]').click()

        cy.get('[data-testid="result-display"]').find('.result-item').eq(0).should('contain', 'RU123') */



    
    })
})

