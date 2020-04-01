/// <reference types="cypress" />
import { getStory } from './utils';

context('Tokens', () => {
  it('Should compose simple tokens', () => {
    getStory(5600, 'simple-token')
      .find('#el')
      .should('have.class', 'A_A')
      .should('have.css', 'color', 'rgb(255, 0, 0)');
  });
  it('Should compose multiple tokens', () => {
    getStory(5600, 'multi-token')
      .find('#el')
      .should('have.class', 'A_A')
      .should('have.class', 'B_B')
      .should('have.css', 'color', 'rgb(255, 0, 0)')
      .should('have.css', 'background-color', 'rgb(0, 0, 255)');
  });
  it('Should compose variable', () => {
    getStory(5600, 'compose-in-token')
      .find('#el')
      .should('have.class', 'A_A')
      .should('have.class', 'B_B')
      .should('have.css', 'color', 'rgb(255, 0, 0)')
      .should('have.css', 'background-color', 'rgb(0, 0, 255)');
  });
  it('Should derive tokens', () => {
    getStory(5600, 'derived')
      .find('#el')
      .should('have.class', 'C_C')
      .should('have.class', 'D_C')
      .should('have.class', 'E_C')
      .should('have.class', 'F_C');
  });
  it('Should handle specificity', () => {
    getStory(5600, 'specificity')
      .find('#el')
      .should('have.class', 'A_A')
      .should('not.have.class', 'A_B');
  });
  it('Should handle screen specificity', () => {
    getStory(5600, 'screen-specificity', 640)
      .find('#el')
      .should('have.css', 'color', 'rgb(0, 0, 255)');
    getStory(5600, 'screen-specificity', 760)
      .find('#el')
      .should('have.css', 'color', 'rgb(255, 0, 0)');
    getStory(5600, 'screen-specificity', 1000)
      .find('#el')
      .should('have.css', 'color', 'rgb(0, 128, 0)');
    getStory(5600, 'screen-specificity', 1200)
      .find('#el')
      .should('have.css', 'color', 'rgb(128, 0, 128)');
  });
});
