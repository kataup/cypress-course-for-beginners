export default class CourseComponent {
    testid = ''
    constructor(testid) {
        this.testid = testid
    }

    wrapper = () => cy.get(`div[data-testid="${this.testid}"]`)

    heading = () => this.wrapper().find('h3')
    price = () => this.wrapper().find('price') 

    commentForm = () => this.wrapper().find('.comment-form')
    commentInput = () => this.commentForm().find('input')

    addCommentButton = () => this.commentForm().find('button')

    commentSection = () => this.wrapper().find('.comment-section')
    komentar = ''
    addComment(commentText) {
        // prida komentar nazev toho kurzu
        this.commentInput().clear().type(commentText)
        this.addComment().click()
    }
 

}