/// <reference types="cypress"/>

describe('Basic Test', () => {
  it('We have homepage Title', () => {
    cy.visit('https://codedamn.com');
  });
});
