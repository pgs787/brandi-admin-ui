import React from 'react';
import styled from 'styled-components';
import FieldLabel from './FieldLabel';
import MoreInfo from './MoreInfo';

const SectionField = ({ children, moreInfoText, label, isRequired }) => {
  return (
    <FieldWrapper>
      <FieldLabel label={label} isRequired={isRequired} />
      <FieldContent>
        {children}
        {moreInfoText && <MoreInfo text={moreInfoText} />}
      </FieldContent>
    </FieldWrapper>
  );
};

export default SectionField;

// Styled Components
const FieldWrapper = styled.div`
  border-bottom: 1px solid #ddd;
  padding: 15px 0;
  display: flex;
`;

const FieldContent = styled.div`
  font-size: 13px;
  width: 100%;
`;
