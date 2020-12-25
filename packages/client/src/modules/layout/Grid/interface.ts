import { StyledProps } from 'styled-components';

import {
  FlexboxProps,
  SpaceProps,
  PositionProps,
  LayoutProps,
  ColorProps,
  BorderProps,
  BorderRadiusProps,
  ShadowProps,
} from 'styled-system';

import { TTheme } from '../theme';

export interface IGridProps
  extends SpaceProps<TTheme>,
  FlexboxProps<TTheme>,
  PositionProps<TTheme>,
  LayoutProps<TTheme>,
  ColorProps<TTheme>,
  BorderProps<TTheme>,
  BorderRadiusProps<TTheme>,
  ShadowProps<TTheme> {
  testID?: string;
}

export type TStyledProps = StyledProps<
| IGridProps
| SpaceProps<TTheme>
| FlexboxProps<TTheme>
| PositionProps<TTheme>
| LayoutProps<TTheme>
| ColorProps<TTheme>
| BorderProps<TTheme>
| BorderRadiusProps<TTheme>
| ShadowProps<TTheme>
>;
