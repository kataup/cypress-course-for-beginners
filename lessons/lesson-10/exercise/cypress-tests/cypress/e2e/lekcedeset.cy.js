describe('Account - login tests', () => {
  beforeEach(() => {
      cy.visit('http://127.0.0.1:5500/cypress-course-for-beginners/lessons/lesson-10/exercise/login.html')
    })
  it('Should valide all html elements on Login page', () => { // všechny uživ. kroky, které očekávám .... it.only = spustí pouze ten test, může být více testů ... it.skip = všechny testy spustí, kromě toho, který má skip 
    // arrange
    

    cy.get('input[data-testid="username-input"]').should('be.visible').and('have.value', '')
    cy.get('[id="password"]').should('be.visible').and('have.value', '')


  })

  it('Should display error message when invalid login details are submited on Login page', () => {


    const username = 'invalidUser'
    const password = 'invalidPass'

    cy.nasLogin(username, password)

   /*  cy.get('[data-testid="username-input"]').type(username)
    cy.get('[id="password"]').type(password)
    cy.get('[data-testid="login-button"]').should('be.visible').click() */

    // act 

    // assert

    cy.get('div[data-testid="error-message"]').should('be.visible').and('contain.text', 'Nesprávne prihlasovacie údaje')
  })

  it('Should display success message and be redirected to Dashboard page after submit valit login', () => {

    //arrange 

    const username = 'user'
    const password = 'pass'

     cy.nasLogin('user', 'password')

    cy.get('[data-testid="username-input"]').type(username)
    cy.get('[id="password"]').type(password)
    cy.get('[data-testid="login-button"]').click()

    cy.url().should('contain', 'dashboard')

  })
})