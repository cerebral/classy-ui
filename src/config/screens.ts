import { IScreens } from '../types';

const screens: IScreens = {
  mobile: (css, breakpoints) => `@media (max-width: ${breakpoints.MOBILE}) {${css}}`,
  tablet: (css, breakpoints) => `@media (max-width: ${breakpoints.TABLET}) {${css}}`,
  laptop: (css, breakpoints) => `@media (max-width: ${breakpoints.LAPTOP}) {${css}}`,
  desktop: (css, breakpoints) => `@media (max-width: ${breakpoints.DESKTOP}) {${css}}`,
};

export default screens;
