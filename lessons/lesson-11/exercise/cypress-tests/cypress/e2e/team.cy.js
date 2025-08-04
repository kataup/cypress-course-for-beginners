import { teamComponent, TeamComponent } from "../pages/components/teamComponent";

describe('Team tests', () => {
    it('should validate team members name', () => {
        cy.visit('http://localhost:3000/about')

        const member1 = teamComponent(0)
        member1.name().should('have.text','Jane Smith')
        member1.role().should('have.text','Lead Instructor')

        const member2 = teamComponent(1)
        member2.name().should('have.text', 'Mike Johnson')
        member2.role().should('have.text','Course Developer')

        const member3 = teamComponent(2)
        member3.name().should('have.text', 'Anna Brown')
        member3.role().should('have.text','Technical Mentor')

    })
});