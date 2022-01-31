// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
var cartLength = 0;
Cypress.Commands.add("selectProduct", (productName) => {
    cy.get('.text').each(($el, index, $list) => {
        if ($el.text().includes(productName)) {
            cy.get('.btn-primary.btnPlus').eq(index).click()
            cartLength = cartLength + 1
            // Ovo je ubaceno zato sto je potrebno par sekundi da se pojave proizvodi u korpu
            cy.get('#listaItema li').should('have.length', cartLength)
        }

    })
})
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
