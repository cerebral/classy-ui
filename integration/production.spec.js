/// <reference types="cypress" />
import { getStory } from './utils';

context('Tokens', () => {
  it('Should compose simple tokens', () => {
    getStory('simple-token')
      .find('#el')
      .should('have.class', 'A__A')
      .should('have.css', 'color', 'rgb(255, 0, 0)');
  });
  it('Should compose multiple tokens', () => {
    getStory('multi-token')
      .find('#el')
      .should('have.class', 'A__A')
      .should('have.class', 'B__B')
      .should('have.css', 'color', 'rgb(255, 0, 0)')
      .should('have.css', 'background-color', 'rgb(0, 0, 255)');
  });
  it('Should compose variable', () => {
    getStory('compose-in-token')
      .find('#el')
      .should('have.class', 'A__A')
      .should('have.class', 'B__B')
      .should('have.css', 'color', 'rgb(255, 0, 0)')
      .should('have.css', 'background-color', 'rgb(0, 0, 255)');
  });
  it('Should derive tokens', () => {
    getStory('derived')
      .find('#el')
      .should('have.class', 'C__C')
      .should('have.class', 'D__C')
      .should('have.class', 'E__C')
      .should('have.class', 'F__C');
  });
  it('Should handle specificity', () => {
    getStory('specificity')
      .find('#el')
      .should('have.class', 'A__A')
      .should('not.have.class', 'A__B');
  });
});
