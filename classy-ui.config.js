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
    block: name => `${name}{display:block;}`,
    'inline-block': name => `${name}{display:inline-block;}`,
    color: {
      variants: ({ colors }) => colors,
      css: (name, value) => `${name}{color:${value};}`,
    },
    bg: {
      variants: ({ colors }) => colors,
      css: (name, value) => `${name}{background-color:${value};}`,
    },
  },
};
