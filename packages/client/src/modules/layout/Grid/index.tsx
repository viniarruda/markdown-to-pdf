import React, { FunctionComponent } from 'react';

import { Container } from './styles';

import { IGridProps } from './interface';

const Grid: FunctionComponent<IGridProps> = ({
  children,
  ...rest
}) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Container {...rest}>
    {children}
  </Container>
);

export default Grid;
