import MenuPage from '../../support/pageObjects/menu_page'


describe('Check "Menu" page ', () => {
    before(function () {
        cy.fixture('exam_data').then(function (data) {
            this.data = data
        })
    })
    it('Verify if sum of product prices in cart matches total price', function () {
        cy.visit('/menu');
        const menuPage = new MenuPage()

        this.data.productName.forEach(function (element) {
            cy.selectProduct(element)
        });
        var sum = 0
        menuPage.getProductCartPrice().each(($el, index, $list) => {
            var amount = $el.text()
            sum = Number(sum) + Number(amount)
        }).then(function () {
            cy.log(sum)
        })
        menuPage.getTotalCartPrice().then(function (element) {
            var total = element.text()
            expect(Number(total)).to.equal(sum)
        })
    })
})