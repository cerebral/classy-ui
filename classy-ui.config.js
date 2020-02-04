// Used for testing
module.exports = {
  variables: {
    colors: {
      red: 'red',
      blue: 'blue',
      green: 'green',
      purple: 'purple',
    },
  },
  screens: {},
  classnames: {
    block: () => '{display:block;}',
    'inline-block': () => '{display:inline-block;}',
    color: {
      variants: ({ colors }) => colors,
      css: value => `{color:${value};}`,
    },
    bg: {
      variants: ({ colors }) => colors,
      css: value => `{background-color:${value};}`,
    },
  },
};
