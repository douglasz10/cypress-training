const { expect } = chai;

module.exports = {

    
    clickIterationLink: function () {
        cy.get('a', {timeout:3000}).contains('Iterações').click({ force: true });
    },

    clickDragAndDropLink: function () {
        cy.get('a', {timeout:4000}).contains('Drag And Drop').click({ force: true });
    },

    clickMousehoverLink: function () {
        cy.get('a').contains('Mousehover').click({ force: true });
    },

    dragAndDropTest: function () {
        cy.wait(2000)

        cy.wait(1000).get('#winston').eq(0)
        .wait(300).trigger('mousedown', {which: 1, pageX: 0, pageY: 0})
        .wait(300).trigger('mousemove', {which: 1, pageX: 275, pageY: 34})
        .wait(300).trigger('mouseup', {force:true})
    },

    colorBackgroundSucess: function () {
        cy.get('#dropzone')
            .should('have.css', 'background-color')
            .and('eq', 'rgb(0, 200, 0)')
    },

}