export const getIframeDocument = () => {
  return (
    cy
      .get('#storybook-preview-iframe')
      // Cypress yields jQuery element, which has the real
      // DOM element under property "0".
      // From the real DOM iframe element we can get
      // the "document" element, it is stored in "contentDocument" property
      // Cypress "its" command can access deep properties using dot notation
      // https://on.cypress.io/its
      .its('0.contentDocument')
      .should('exist')
  );
};

const storybookSidebar = 210;

export const getStory = (story, size) => {
  cy.visit('http://localhost:5400');
  cy.get('#explorertokens--' + story).click();
  if (size) {
    cy.viewport(size + storybookSidebar, 480);
    cy.wait(200);
  }

  return (
    getIframeDocument()
      // automatically retries until body is loaded
      .its('body')
      .should('not.be.undefined')
      // wraps "body" DOM element to allow
      // chaining more Cypress commands, like ".find(...)"
      .then(cy.wrap)
  );
};
