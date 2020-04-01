/// <reference types="cypress" />
import { getStory, getIframeDocument } from './utils';

context('Tokens', () => {
  it('Should compose simple tokens', () => {
    getStory(5400, 'simple-token')
      .find('#el')
      .should('have.class', 'color__RED')
      .should('have.css', 'color', 'rgb(255, 0, 0)');
  });
  it('Should compose multiple tokens', () => {
    getStory(5400, 'multi-token')
      .find('#el')
      .should('have.class', 'color__RED')
      .should('have.class', 'background-color__BLUE')
      .should('have.css', 'color', 'rgb(255, 0, 0)')
      .should('have.css', 'background-color', 'rgb(0, 0, 255)');
  });
  it('Should compose variable', () => {
    getStory(5400, 'compose-in-token')
      .find('#el')
      .should('have.class', 'color__RED')
      .should('have.class', 'background-color__BLUE')
      .should('have.css', 'color', 'rgb(255, 0, 0)')
      .should('have.css', 'background-color', 'rgb(0, 0, 255)');
  });
  it('Should derive tokens', () => {
    getStory(5400, 'derived')
      .find('#el')
      .should('have.class', 'padding-top__SPACE_1')
      .should('have.class', 'padding-right__SPACE_1')
      .should('have.class', 'padding-bottom__SPACE_1')
      .should('have.class', 'padding-left__SPACE_1');
  });
  it('Should handle specificity', () => {
    getStory(5400, 'specificity')
      .find('#el')
      .should('have.class', 'color__RED')
      .should('not.have.class', 'color__BLUE');
  });
  it('Should handle screen specificity', () => {
    getStory(5400, 'screen-specificity', 640)
      .find('#el')
      .should('have.css', 'color', 'rgb(0, 0, 255)');
    getStory(5400, 'screen-specificity', 760)
      .find('#el')
      .should('have.css', 'color', 'rgb(255, 0, 0)');
    getStory(5400, 'screen-specificity', 1000)
      .find('#el')
      .should('have.css', 'color', 'rgb(0, 128, 0)');
    getStory(5400, 'screen-specificity', 1200)
      .find('#el')
      .should('have.css', 'color', 'rgb(128, 0, 128)');
  });
});
