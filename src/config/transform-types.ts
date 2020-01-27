export const transform = (transformedConfig: { [className: string]: string }) => {
  return `
declare module 'classy-ui' {
  type TClasses = ${Object.keys(transformedConfig)
    .map(className => `"${className}"`)
    .join(' | ')};
  }`;
};
