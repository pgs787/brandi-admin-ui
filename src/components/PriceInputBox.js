import React from 'react';
import styled from 'styled-components';

const PriceInputBox = ({ placeholder }) => {
  return (
    <PriceInputBoxWrapper>
      <InputTag type="number" placeholder={placeholder}></InputTag>
      <TagSpan>원</TagSpan>
    </PriceInputBoxWrapper>
  );
};

export default PriceInputBox;

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
