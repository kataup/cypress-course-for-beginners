import contactPage from "../pages/contactPage"

describe('Contact US', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('elements', () => {
    contactPage.heading().should('be.visible')
    contactPage.email().should('be.visible')
    contactPage.message().should('be.visible')
    contactPage.submit().should('be.visible')
  })

  it('fill and submit form', () => {
    cy.fixture('contactUs').then((contactUs) => {
      contactPage.name().type(contactUs.name)
      contactPage.email().type(contactUs.email)
      contactPage.message().type(contactUs.message)

      cy.get('div[data-testid="submit-status"]')
      cy.contains('Message sent sucessfully!').should('be.visible')
    })
  })

  it('fill and submit form w invalid email data', () => {
    cy.fixture('contactUs').then((contactUs) => {
    contactPage.name().type(contactUs.name)
    contactPage.name().type(contactUs.emailInvalid)

    cy.get('div[data-testid="submit-status"]')
    cy.contains('Message').should('be.visible')
    
  
    })
  })
})