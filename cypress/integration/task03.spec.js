context('Task 3', () => {
    it('Display a single room', () => {
        cy.visit('http://localhost:4200/rooms/new');
        cy.get('[name="name"]').type('testName');
        cy.get('[name="address"]').type('testAddress');
        cy.get('[name="capacity"]').type(4);
        cy.get('[name="features"]').type('testFeatures');
        cy.get('[type="submit"]').click();
        cy.wait(1000);

        cy.visit('http://localhost:4200/rooms');
        cy.get('[name="roomView"]').first().should('have.attr', 'href').then((href) => {
            cy.get('[name="roomView"]').first().click();
            cy.wait(1000);
            cy.url().should('include', href);
        })
    })
})
