import { IScreens } from '../types';

const screens: IScreens = {
  mobile: css => `@media (max-width: 640px) {${css}}`,
  tablet: css => `@media (max-width: 768px) {${css}}`,
  laptop: css => `@media (max-width: 1024px) {${css}}`,
  desktop: css => `@media (max-width: 1280px) {${css}}`,
};

export default screens;
