export default class CourseComponent {
    testid = ''
    constructor(testid) {
        this.testid = testid
    }

    wrapper = () => cy.get(`div[data-testid="${this.testid}"]`)

    heading = () => this.wrapper().find('h3')
    price = () => this.wrapper().find('price') 
}