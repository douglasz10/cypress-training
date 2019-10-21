/// <reference types="Cypress" />

const homePageData = require('../page_data/homePage_data.js');
const { expect } = chai;

module.exports = {

    viewTitle: function () {
        cy.title().should('contain', 'Automação com Batista');
    },

    clickStartWebAutomationButton: function () {
        cy.get('a', { timeout: 4000 }).contains('Começar Automação Web').should('be.visible').click({ force: true });
    },

    textTitleWelcome: function () {
        cy.get('h5', { timeout: 3000 }).contains('Bem vindo ao Site de Automação do Batista.').should('be.visible');
    },


}