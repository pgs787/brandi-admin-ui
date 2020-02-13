import React from 'react';
import styled from 'styled-components';
import SectionField from 'components/SectionField';
import InfoInput from 'pages/Login/InfoInput';

const InfomationInput = ({ name, isRequired }) => {
  return (
    <SectionField label={name} isRequired={isRequired}>
      <InputWrap>
        <InfoInput img="\f007" placeholder={name} type="text" />
      </InputWrap>
    </SectionField>
  );
};

export default InfomationInput;

const InputWrap = styled.div`
  width: 325px;
`;
