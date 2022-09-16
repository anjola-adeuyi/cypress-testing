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

  it('Login Page looks good', () => {
    cy.visit('https://codedamn.com');
    cy.get('[data-bypassmenuclose="true"]').click();
    // cy.contains('Open main menu').click();
    cy.contains('Create Account').click();
    cy.contains('free account').should('exist');
    cy.get('[data-testid="google-oauth-btn"]').should('exist');
    cy.get('[data-testid="github-oauth-btn"]').should('exist');
    cy.contains('Or use email to signup').should('exist');
  });

  it.only('The Login page links work', () => {
    cy.visit('https://codedamn.com');
    cy.get('[data-bypassmenuclose="true"]').click();
    cy.contains('Login').click();
    cy.contains('Forgot your password?').click({ force: true });
    cy.url().should('include', '/password-reset');
  });

  it('Form submission Test', () => {
    cy.visit('https://codedamn.com');
    cy.contains('Create Free Account').click();
    cy.get('#email').type('Jola');
    // data-testid="name"
  });
});
