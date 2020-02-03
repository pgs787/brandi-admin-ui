import React from 'react';
import styled from 'styled-components';

const FieldLabel = ({ label }) => {
  return <LabelWrapper>{label}</LabelWrapper>;
};

export default FieldLabel;

// Styled Component
const LabelWrapper = styled.div`
  font-size: 14px;
  min-width: 220px;
  padding: 7px 0;
`;
