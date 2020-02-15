import React, { useState } from 'react';
import styled from 'styled-components';
import SectionField from 'components/SectionField';
import Radio from '@material-ui/core/Radio';

const SellerProperty = () => {
  return (
    <SectionField label="셀러 속성" isRequired>
      <RadioWrap>
        <Radio checked={true} color="default" size="small" />
        <p>뷰티</p>
      </RadioWrap>
    </SectionField>
  );
};

export default SellerProperty;

const RadioWrap = styled.div`
  display: flex;
  align-items: center;
`;
