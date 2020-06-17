import React from 'react';

import { StyledGriddGrid, StyledGridContent, StyledGrid } from '../styles/StyledGrid';

const Grid =({ header,children }) => (
  <StyledGrid>
    <h1>{header}</h1>
    <StyledGridContent> {children} </StyledGridContent>
  </StyledGrid>
)

export default Grid;