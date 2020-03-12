// Used for testing
module.exports = ({ tokens, screens }) => ({
  tokens: {
    breakpoints: tokens.breakpoints,
    colors: {
      RED: 'red',
      BLUE: 'blue',
      GREEN: 'green',
      PURPLE: 'purple',
    },
    space: {
      SPACE_1: '1rem',
    },
  },
  screens,
  themes: {
    dark: {
      colors: {
        GREEN: 'yellow',
        PURPLE: 'pink',
      },
    },
  },
});
