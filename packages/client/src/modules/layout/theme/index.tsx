import { DefaultTheme } from 'styled-components';

import colors from './colors';
import units from './units';

import { TColorsProps, TSpacingSizes } from '../../../interfaces';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/interface-name-prefix
  export interface DefaultTheme {
    colors: TColorsProps;
    space: TSpacingSizes;
  }
}

export const theme: DefaultTheme = {
  colors,
  space: units,
};

export type TTheme = typeof theme;
