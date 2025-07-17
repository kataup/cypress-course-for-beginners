/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

describe('registrace', () => {
    it('faker registrace', () => {
        cy.visit('http://127.0.0.1:5500/cypress-course-for-beginners/lessons/lesson-9/exercise2/login.html')
        
        const userName = faker.internet.username()
        const userEmail = faker.internet.email()
        const userPassword = faker.internet.password()
        
        cy.log(userName)
        cy.log(userEmail)
        cy.log(userPassword)

        cy.get('[data-testid="reg-username-input"]').type(userName)
        cy.get('[data-testid="reg-email-input"]').type(userEmail)
        cy.get('[data-testid="reg-password-input"]').type(userPassword)

    })
})
