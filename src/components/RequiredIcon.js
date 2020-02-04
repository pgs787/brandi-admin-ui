import React from 'react';
import styled from 'styled-components';

const RequiredIcon = () => {
  return <RequiredSpan>*</RequiredSpan>;
};

export default RequiredIcon;

// Styled Components

const RequiredSpan = styled.small`
  font-size: 14px;
  margin-left: 8px;
  color: red;
`;
