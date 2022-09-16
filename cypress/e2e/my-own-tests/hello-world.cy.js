/// <reference types="cypress"/>

describe('Basic Test', () => {
  it('We have homepage Title', () => {
    cy.visit('https://codedamn.com');

    cy.contains('Learn Programming').should('be.visible');

    cy.contains('Explore All Roadmaps').click();
  });
});
