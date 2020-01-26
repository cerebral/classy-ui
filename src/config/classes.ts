import { IConfig, TClasses } from '../types';

export const classes = (
  config: IConfig,
): {
  [key in TClasses]?: string;
} => ({
  'bg-transparent': `{background-color: ${config.backgrounds.backgroundColor.transparent}`,
  'bg-black': `{background-color: ${config.backgrounds.backgroundColor.black}`,
  'bg-white': `{background-color: ${config.backgrounds.backgroundColor.white}`,
  'bg-gray-100': `{background-color: ${config.backgrounds.backgroundColor['gray-100']}`,
  'bg-gray-200': `{background-color: ${config.backgrounds.backgroundColor['gray-200']}`,
  'bg-gray-300': `{background-color: ${config.backgrounds.backgroundColor['gray-300']}`,
  'bg-gray-400': `{background-color: ${config.backgrounds.backgroundColor['gray-400']}`,
  'bg-gray-500': `{background-color: ${config.backgrounds.backgroundColor['gray-500']}`,
  'bg-gray-600': `{background-color: ${config.backgrounds.backgroundColor['gray-600']}`,
  'bg-gray-700': `{background-color: ${config.backgrounds.backgroundColor['gray-700']}`,
  'bg-gray-800': `{background-color: ${config.backgrounds.backgroundColor['gray-800']}`,
  'bg-gray-900': `{background-color: ${config.backgrounds.backgroundColor['gray-900']}`,
});
