// import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
// const homePage = require('../page_objects/homePage_page.js');

// const sizes = [[1366, 768], [360, 640]]

// before(function () {
//     Cypress.on('uncaught:exception', (err, runnable) => { return false })
// });


// describe('Abrir o site com multiplas resoluções', () => {
//     sizes.forEach((size) => {
//         // make assertions on the logo using
//         // an array of different viewports
//         it(`exibir a página inicial na resolução ${size}`, () => {
//             if (Cypress._.isArray(size)) {
//                 cy.viewport(size[0], size[1])
//             } else {
//                 cy.viewport(size)
//             }

//             cy.visit('');
//             homePage.viewTitle();
//         })
//     })
// })
