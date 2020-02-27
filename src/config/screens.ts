import { IScreens } from '../types';

const screens: IScreens = {
  sm: css => `@media (max-width: 640px) {${css}}`,
  md: css => `@media (max-width: 768px) {${css}}`,
  lg: css => `@media (max-width: 1024px) {${css}}`,
  xl: css => `@media (max-width: 1280px) {${css}}`,
};

export default screens;
