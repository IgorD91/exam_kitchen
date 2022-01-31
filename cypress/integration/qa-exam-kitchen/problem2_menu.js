describe('Check "Menu" page ', () => {
    before(function () {
        cy.fixture('exam_data').then(function (data) {
            this.data = data
        })
    })
    it('Verify if sum of products prices in cart matches total price', function () {
        cy.visit('/menu');

        this.data.productName.forEach(function (element) {
            cy.selectProduct(element)
        });
        var sum = 0
        cy.get('.cartPrice').each(($el, index, $list) => {
            var amount = $el.text()
            // cy.log("selected price " + amount)
            sum = Number(sum) + Number(amount)
            // cy.log("sum " + sum)
        }).then(function () {
            cy.log(sum)
        })
        cy.get('#ukupno').then(function (element) {
            var total = element.text()
            expect(Number(total)).to.equal(sum)
        })

    })
})