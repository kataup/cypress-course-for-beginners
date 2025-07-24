export default new class MenuComponent {

    navigation = () => cy.get('nav')


    homeLink = () => this.navigation().find('[data.testid="nav-home"]')
    coursesLink = () => this.navigation().find('[data.testid="nav-courses"]')
    aboutLink = () => this.navigation().find('[data-testid="nav-about"]')


    navigate(pageLink) {
        switch (pageLink) {
            case 'home':
                this.homeLink().click()
                break
            case 'courses':
                this.coursesLink().click()
                break
            case 'about':
                this.aboutLink().click()
            default:
                throw new Error(`Unknown page link: ${pageLink}`)
        }
    }
}