import React from 'react';
import styled from 'styled-components';
import RequiredIcon from './RequiredIcon';

const FieldLabel = ({ label, isRequired }) => {
  return (
    <LabelWrapper>
      {label}
      {isRequired && <RequiredIcon />}
    </LabelWrapper>
  );
};

export default FieldLabel;

// Styled Component
const LabelWrapper = styled.div`
  font-size: 14px;
  min-width: 220px;
  padding: 7px 0;
`;
