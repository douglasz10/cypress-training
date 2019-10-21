const setupPage = require('../page_objects/welcome.page.js');

module.exports = {

    visitWebsite: function () {
        cy.visit(Cypress.config('baseUrl'))
    },


    getTitle: function () {
        cy.get(setupPage.titlePage)
    }
}
