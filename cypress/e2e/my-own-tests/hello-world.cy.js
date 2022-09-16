/// <reference types="cypress"/>

describe('Codedamn Test', () => {
  it('Basic tests', () => {
    cy.visit('https://codedamn.com');

    cy.contains('Learn Programming').should('be.visible');

    cy.contains('Explore All Roadmaps').click();
  });

  it('Mobile viewport size', () => {
    cy.viewport(320, 568);
    cy.visit('https://codedamn.com');
    cy.contains('Learn Programming').should('be.visible');
    cy.contains('Explore All Roadmaps').click();
  });

  it.only('Login Page looks good', () => {
    cy.visit('https://codedamn.com');
    cy.contains('Open main menu').click();
    cy.contains('Create Account').click();
    cy.contains('free account').should('exist');
  });

  it('Form submission Test', () => {
    cy.visit('https://codedamn.com');
    cy.contains('Create Free Account').click();
    cy.get('#email').type('Jola');
    // data-testid="name"
  });
});
