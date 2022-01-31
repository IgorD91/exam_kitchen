class QuestionarePage {

    getRadioButton() {
        return cy.get('#radioExample1')
    }
    getLikeFoodButton() {
        return cy.get('[data-toggle="modal"]')
    }
    getRatingRadio() {
        return cy.get('[name="hwofForm"]')
    }
    getTextarea() {
        return cy.get('#hwofTA').click()
    }
    getSubmitModalButton() {
        return cy.get('[data-dismiss="modal"]')
    }
    getRateStaff7() {
        return cy.get('.btn-group > :nth-child(8)')
    }
    getSubmitQuestionaire()
    {
       return cy.get('#submitQuestionaire')
    }

}
export default QuestionarePage;