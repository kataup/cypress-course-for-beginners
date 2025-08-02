import courseComponents from "../pages/components/courseComponents";
describe('Should validate heading on course', () => {
   beforeEach(() => {
    cy.visit('http://localhost:3000/courses')
   })
   it('should validate heading on course', () => {
    const course2 = new courseComponents('course-2')
    course2.heading().should('have.text', 'Advanced E2E Testing')
    course2.price().should('have.text', '149€')
   })
    // cy.get('data-testid="course-2"').find('h3').should('have.text', 'Advanced E2E Testing')
})