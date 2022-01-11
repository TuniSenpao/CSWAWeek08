context('Task 2', () => {
  it('Create a new room', () => {
      cy.visit('http://localhost:4200/rooms');
      cy.get('tr').then((len) => {
          const initialCount = len.length;
          cy.visit('http://localhost:4200/rooms/new');
          cy.get('[name="name"').type('testName');
          cy.get('[name="address"').type('testAddress');
          cy.get('[name="capacity"').type(4);
          cy.get('[name="features"').type('testFeatures');
          cy.get('[type="submit"]').click();
          cy.wait(2000);
          cy.visit('http://localhost:4200/rooms');
          cy.get('table').find('tr').should('have.length', initialCount+1);
    })
  });
})
