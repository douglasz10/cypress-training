
var faker = require('faker');
const { expect } = chai;

module.exports = {

    clickFormLink: function () {
        cy.get('a').contains('Formulário').click({ force: true });
        //cy.get('div').find('>a').filter('.collapsible-header').should('have.text', 'Formulário')
    },

    clickCreateUserLink: function () {
        cy.get('a').contains('Criar Usuários').click({ force: true });
    },

    fillName: function () {
        cy.get('#user_name').type(faker.name.firstName());
    },

    fillLastName: function () {
        cy.get('#user_lastname').type(faker.name.lastName());
    },

    fillEmail: function () {
        cy.get('#user_email').type(faker.internet.email());
    },

    fillAddress: function () {
        cy.get('#user_address').type(faker.address.streetAddress());
    },

    fillUniversity: function () {
        cy.get('#user_university').type("Puccamp");
    },

    fillProfession: function () {
        cy.get('#user_profile').type("Estudante");
    },

    fillGender: function () {
        cy.get('#user_gender').type("Masculino");
    },

    fillAge: function () {
        cy.get('#user_age').type("25");
    },

    clickCreateButton: function () {
        cy.get('input[name=commit').contains('Criar').should('be.visible').click({ force: true });
    },

    messageCreateUserSucess: function () {
        cy.get('#notice', { timeout: 3000 }).should('contain', 'Usuário Criado com sucesso');
    },
    

}