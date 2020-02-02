import React from 'react';
import styled from 'styled-components';

const InputBox = ({ placeholder }) => {
  return <InputTag placeholder={placeholder}></InputTag>;
};

export default InputBox;

// Styled-Components
const InputTag = styled.input`
  width: 100%;
  background-color: #f8f9fd;
  &:focus {
    border-color: #999999;
    background-color: white;
  }
`;
