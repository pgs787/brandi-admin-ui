import React from 'react';
import styled from 'styled-components';

const SectionBody = ({ children }) => {
  return <SectionBodyWrapper>{children}</SectionBodyWrapper>;
};

export default SectionBody;

// Styled Components
const SectionBodyWrapper = styled.div`
  padding: 0 25px;
`;
