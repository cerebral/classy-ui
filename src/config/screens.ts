import { IScreens } from '../types';

const screens: IScreens = {
  mobile: (css, breakpoints) => `@media (min-width: ${breakpoints.MOBILE}) {${css}}`,
  tablet: (css, breakpoints) => `@media (min-width: ${breakpoints.TABLET}) {${css}}`,
  laptop: (css, breakpoints) => `@media (min-width: ${breakpoints.LAPTOP}) {${css}}`,
  desktop: (css, breakpoints) => `@media (min-width: ${breakpoints.DESKTOP}) {${css}}`,
};

export default screens;
