/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'
import QuestionarePage from '../../support/pageObjects/questionare_page'

describe('Check "Questionare" page', () => {
    before(function () {
        cy.fixture('exam_data').then(function (data) {
            this.data = data
        })
    })
    it('Verify if populated data are stored in cookies', function () {
        cy.visit('/questionaire');
        const questionarePage = new QuestionarePage()
        questionarePage.getRadioButton().check('food')
        cy.frameLoaded("#first")
        cy.iframe('#first').find('.form-check-input').check(['muckalica', 'Sarma'])
        questionarePage.getLikeFoodButton().click()
        questionarePage.getRatingRadio().check('vb')
        questionarePage.getTextarea().click().type(this.data.text)
        questionarePage.getSubmitModalButton().click()
        cy.frameLoaded("#third")
        cy.iframe('#third').find('input[type=range]').invoke('val', 6).trigger('change')
        questionarePage.getRateStaff7().click()
        cy.frameLoaded("#second")
        cy.iframe('#second').find('#frta').click().type(this.data.text)
        questionarePage.getSubmitQuestionaire().click()
        cy.getCookies()
            .should('have.length', 1)
            .then((cookies) => {
                expect(cookies[0]).to.have.property('value', 'food,vb,Test,Sarma,muckalica,Test,6,7')
            })
    })
})