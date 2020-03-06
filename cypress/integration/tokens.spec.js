/// <reference types="cypress" />
import { getStory } from './utils';

context('Compose', () => {
  it('simple', () => {
    cy.visit('http://localhost:5400/?path=/story/compose--simple');
    getStory()
      .find('.color__RED')
      .should('have.text', 'Hello World');
  });
});
