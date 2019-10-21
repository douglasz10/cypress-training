import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
const form = require('../page_objects/form_page.js');
const homePage = require('../page_objects/homePage_page.js');

before(function () {
    Cypress.on('uncaught:exception', (err, runnable) => { return false })
});

beforeEach(() => {
Given('que eu acesso a pagina inicial do site de Automação', () => {
    cy.viewport(1366,768);
    cy.visit('');
    homePage.viewTitle();
});
})

And('preencho o formulário para cadastrar um novo usuário', () => {
    homePage.clickStartWebAutomationButton();
    form.clickFormLink();
    form.clickCreateUserLink();
    form.fillName();
    form.fillLastName();
    form.fillEmail();
    form.fillAddress();
    form.fillUniversity();
    form.fillProfession();
    form.fillGender();
    form.fillAge();

});

When('finalizar o cadastro', () => {
    form.clickCreateButton();
});

Then('devo visualizar a mensagem que o usuário foi cadastrado com sucesso', () => {
    form.messageCreateUserSucess();
});

