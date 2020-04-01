import { compose, mobile, tablet, laptop, desktop, tokens } from 'classy-ui';

export default { title: 'tokens' };

export const simpleToken = () => `<div id="el" class="${compose(tokens.color.RED)}">Hello World</div>`;

export const multiToken = () =>
  `<div id="el" class="${compose(tokens.color.RED, tokens.backgroundColor.BLUE)}">Hello World</div>`;

export const composeInToken = () => {
  const myClass = compose(tokens.backgroundColor.BLUE);
  return `<div id="el" class="${compose(tokens.color.RED, myClass)}">Hello World</div>`;
};

export const derived = () => {
  return `<div id="el" class="${compose(tokens.padding.SPACE_1)}">Hello World</div>`;
};

export const specificity = () => {
  const myClass = compose(tokens.color.BLUE);
  return `<div id="el" class="${compose(tokens.color.RED, myClass)}">Hello World</div>`;
};

export const screenSpecificity = () => {
  const mobileClass = mobile(tokens.color.BLUE);
  const tabletClass = tablet(tokens.color.RED);
  const laptopClass = laptop(tokens.color.GREEN);
  const desktopClass = desktop(tokens.color.PURPLE);
  return `<div id="el" class="${compose(mobileClass, tabletClass, laptopClass, desktopClass)}">Hello World</div>`;
};
