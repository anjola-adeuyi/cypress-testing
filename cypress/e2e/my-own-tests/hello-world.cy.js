/// <reference types="cypress"/>

describe('Codedamn Test', () => {
  beforeEach(() => {
    cy.viewport(1280, 1020);
    cy.visit('https://codedamn.com');
  });

  it('Basic tests', () => {
    cy.contains('Learn Programming').should('be.visible');

    cy.contains('Explore All Roadmaps').click();
  });

  it('Login Page looks good', () => {
    cy.get('[data-bypassmenuclose="true"]').click();
    // cy.contains('Open main menu').click();
    cy.contains('Create Account').click();
    cy.contains('free account').should('exist');
    cy.get('[data-testid="google-oauth-btn"]').should('exist');
    cy.get('[data-testid="github-oauth-btn"]').should('exist');
    cy.contains('Or use email to signup').should('exist');
  });

  it('The Login page links work', () => {
    // 1. Visit homepage - done already on beforeEach block
    // cy.visit('https://codedamn.com');

    // 2. Click on the menu button
    cy.get('[data-bypassmenuclose="true"]').click();

    // 3. Click on the "Login"
    cy.contains('Login').click();

    // 4. Click on the "Forgot Password" link
    cy.contains('Forgot your password?').click({ force: true });

    // 5. Verify that the URL is correct
    cy.url().should('include', '/password-reset');

    cy.log('Current URL from log: ', cy.url());
    cy.url().then((val) => {
      cy.log('Current URL from cb: ', val);
    });

    // 6. Click on the "Back to Login" link
    cy.go('back');

    // 7. click on the "Create Account" link
    cy.contains('Create one').click({ force: true });

    // 8. Verify that the URL is correct
    cy.url().should('include', '/register');
  });

  it('Form submission Test', () => {
    cy.contains('Sign in').click();
    // cy.get('#email').type('Jola' + Math.random() + '@gmail.com', {
    //   force: true,
    // });
    cy.get('[data-testid="username"]').type(
      'Jola' + Math.random() + '@gmail.com',
      { force: true }
    );
    // data-testid="name"
  });

  it.only('Authenticating test and New file feature works', () => {
    cy.contains('Sign in').click();
    cy.get('[data-testid="username"]').type('Jola');
  });
});
