import styled from 'styled-components';

import {
  border, color, flexbox, layout, position, space,
} from 'styled-system';

import { TStyledProps } from './interface';

export const Container = styled.div<TStyledProps>`
  ${border}
  ${color}
  ${flexbox}
  ${layout}
  ${position}
  ${space}
`;
