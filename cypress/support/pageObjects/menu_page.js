class MenuPage {

    getProductCartPrice() {
        return cy.get('.cartPrice')
    }
    getTotalCartPrice() {
        return cy.get('#ukupno')
    }
}
export default MenuPage;