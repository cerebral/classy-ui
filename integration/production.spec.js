/// <reference types="cypress" />
import { getStory } from './utils';

context('Tokens', () => {
  it('Should compose simple tokens', () => {
    getStory('simple-token')
      .find('#el')
      .should('have.class', 'A_A')
      .should('have.css', 'color', 'rgb(255, 0, 0)');
  });
  it('Should compose multiple tokens', () => {
    getStory('multi-token')
      .find('#el')
      .should('have.class', 'A_A')
      .should('have.class', 'B_B')
      .should('have.css', 'color', 'rgb(255, 0, 0)')
      .should('have.css', 'background-color', 'rgb(0, 0, 255)');
  });
  it('Should compose variable', () => {
    getStory('compose-in-token')
      .find('#el')
      .should('have.class', 'A_A')
      .should('have.class', 'B_B')
      .should('have.css', 'color', 'rgb(255, 0, 0)')
      .should('have.css', 'background-color', 'rgb(0, 0, 255)');
  });
  it('Should derive tokens', () => {
    getStory('derived')
      .find('#el')
      .should('have.class', 'C_C')
      .should('have.class', 'D_C')
      .should('have.class', 'E_C')
      .should('have.class', 'F_C');
  });
  it('Should handle specificity', () => {
    getStory('specificity')
      .find('#el')
      .should('have.class', 'A_A')
      .should('not.have.class', 'A_B');
  });
});
