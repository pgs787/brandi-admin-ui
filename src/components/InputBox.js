import React, { useState } from 'react';
import styled from 'styled-components';

const InputBox = ({ placeholder, onChange }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = e => {
    setInputValue(e.target.value);
    onChange(e.target.value);
  };

  return (
    <InputTag
      value={inputValue}
      placeholder={placeholder}
      onChange={handleChange}
    ></InputTag>
  );
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
