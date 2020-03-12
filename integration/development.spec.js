/// <reference types="cypress" />
import { getStory } from './utils';

context('Tokens', () => {
  it('Should compose simple tokens', () => {
    getStory('simple-token')
      .find('#el')
      .should('have.class', 'color__RED')
      .should('have.css', 'color', 'rgb(255, 0, 0)');
  });
  it('Should compose multiple tokens', () => {
    getStory('multi-token')
      .find('#el')
      .should('have.class', 'color__RED')
      .should('have.class', 'background-color__BLUE')
      .should('have.css', 'color', 'rgb(255, 0, 0)')
      .should('have.css', 'background-color', 'rgb(0, 0, 255)');
  });
  it('Should compose variable', () => {
    getStory('compose-in-token')
      .find('#el')
      .should('have.class', 'color__RED')
      .should('have.class', 'background-color__BLUE')
      .should('have.css', 'color', 'rgb(255, 0, 0)')
      .should('have.css', 'background-color', 'rgb(0, 0, 255)');
  });
  it('Should derive tokens', () => {
    getStory('derived')
      .find('#el')
      .should('have.class', 'padding-top__SPACE_1')
      .should('have.class', 'padding-right__SPACE_1')
      .should('have.class', 'padding-bottom__SPACE_1')
      .should('have.class', 'padding-left__SPACE_1');
  });
  it('Should handle specificity', () => {
    getStory('specificity')
      .find('#el')
      .should('have.class', 'color__RED')
      .should('not.have.class', 'color__BLUE');
  });
});
