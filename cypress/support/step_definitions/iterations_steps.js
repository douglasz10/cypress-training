import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
const homePage = require('../page_objects/homePage_page.js');
const iteration = require('../page_objects/iterations_page.js');

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

And('acesso a tela para Drag and Drop', () => {
    homePage.clickStartWebAutomationButton();
    iteration.clickIterationLink();
    iteration.clickDragAndDropLink();
});

When('segurar e arrastar a imagem', () => {
    iteration.dragAndDropTest();
});

Then('devo visualizar a imagem no local correto', () => {
    iteration.colorBackgroundSucess();
});