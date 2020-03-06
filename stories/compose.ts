import { compose, tokens } from 'classy-ui';

export default { title: 'Compose' };

export const simple = () => `<div class="${compose(tokens.color.RED)}">Hello World</div>`;
