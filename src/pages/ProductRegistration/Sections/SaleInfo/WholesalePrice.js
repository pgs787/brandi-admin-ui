import React, { useState } from 'react';
import styled from 'styled-components';
import SectionField from '../../../../components/SectionField';

const WholesalePrice = () => {
  const [wholesalePriceLocal, setWholesalePriceLocal] = useState('');

  const onChange = e => {
    setWholesalePriceLocal(e.target.value);
  };

  return (
    <SectionField label="도매 원가">
      <PriceInputBoxWrapper>
        <InputTag
          type="number"
          value={wholesalePriceLocal}
          placeholder="0"
          onKeyDown={e =>
            (e.keyCode === 69 ||
              e.keyCode === 190 ||
              e.keyCode === 187 ||
              e.keyCode === 189) &&
            e.preventDefault()
          }
          onChange={onChange}
        />
        <TagSpan>원</TagSpan>
      </PriceInputBoxWrapper>
    </SectionField>
  );
};

export default WholesalePrice;

// Styled-Components

const PriceInputBoxWrapper = styled.div`
  width: 280px;
  display: flex;
`;

const InputTag = styled.input`
  width: 100%;
  background-color: #f8f9fd;
  &:focus {
    border-color: #999999;
    background-color: white;
  }
`;

const TagSpan = styled.div`
  width: 50px;
  background-color: #f8f9fd;
  height: 40px;
  font-size: 14px;
  border: 1px solid #dbdde2;
  border-left: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #555555;
`;
