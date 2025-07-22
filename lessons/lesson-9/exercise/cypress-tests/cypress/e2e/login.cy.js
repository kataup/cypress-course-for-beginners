describe('login', () => {
    it('prihlaseni', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.fixture('user.json').then((users) => {
            users.forEach((usery) => {
                cy.log(usery.userName)

                cy.get('[data-test="username"]').clear().type(usery.userName)
                cy.get('[data-test="password"]').clear().type(usery.password)
                cy.get('[data-test="login-button"]').click()

                cy.log(usery.isValidLogin)
                if(usery.isValidLogin === true) {
                    cy.url().should('contain', 'inventory')
                    cy.get('[id="react-burger-menu-btn"]').click()
                    cy.get('[id="logout_sidebar_link"]').click()
                }
                else {
                    cy.get('[data-test="error-button"]').should('be.visible')
                }
                
            })
        })
    })

})