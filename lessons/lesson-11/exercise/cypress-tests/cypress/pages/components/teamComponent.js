class TeamComponent {
    index = 0
    constructor(index) {
        this.index = index
    }
    teamMemberWrapper = () => cy.get('div[data-testid="team-member"]').eq(this.index)
    
    name = () => this.teamMemberWrapper().find('[data-testid="member-name"]')
    role = () => this.teamMemberWrapper().find('[data-testid="member-role"]')
    description = () => this.teamMemberWrapper().find('[data.testid="member-description"]')
}

export const teamComponent = (index) => new TeamComponent(index)