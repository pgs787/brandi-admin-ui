import React, { useState } from 'react';
import styled from 'styled-components';
import SectionField from 'components/SectionField';
import Radio from '@material-ui/core/Radio';

const SellerProperty = ({ type }) => {
  const checkType = type => {
    if (type === 1) return '쇼핑몰';
    if (type === 2) return '마켓';
    if (type === 3) return '로드샵';
    if (type === 4) return '디자이너브랜드';
    if (type === 5) return '제너럴브랜드';
    if (type === 6) return '내셔널브랜드';
    if (type === 7) return '뷰티';
  };

  return (
    <SectionField label="셀러 속성" isRequired>
      <RadioWrap>
        <Radio checked={true} color="default" size="small" />
        <p>{checkType(type)}</p>
      </RadioWrap>
    </SectionField>
  );
};

export default SellerProperty;

const RadioWrap = styled.div`
  display: flex;
  align-items: center;
`;
