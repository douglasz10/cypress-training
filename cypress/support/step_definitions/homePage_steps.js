import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
const homePage = require('../page_objects/homePage_page.js');

const sizes = [[1366, 768], [360, 640]]

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

When('eu clicar em Começar Automação Web', () => {
    homePage.clickStartWebAutomationButton();
});

Then('devo ser redirecionado para a Home do site', () => {
    homePage.textTitleWelcome();
});




