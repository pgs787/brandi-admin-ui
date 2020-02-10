import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const ToggleButtonGroup = ({ options, onClick, defaultVal }) => {
  const [currentValue, setCurrentValue] = useState(defaultVal);

  const handleClick = ({ value }) => {
    setCurrentValue(value);
    onClick(value);
  };

  return (
    <ButtonGroupWrapper>
      {options.map(option => (
        <OptionButton
          key={option.label}
          onClick={() => handleClick(option)}
          active={option.value === currentValue}
        >
          {option.label}
        </OptionButton>
      ))}
    </ButtonGroupWrapper>
  );
};

export default ToggleButtonGroup;

// Styled Components
const ButtonGroupWrapper = styled.div``;

const OptionButton = styled.button`
  border: 1px solid #ddd;
  width: 140px;
  padding: 8px 20px;
  font-size: 13px;
  color: #767a83;
  ${props =>
    props.active &&
    css`
      color: white;
      background-color: #36363a;
      border: 1px solid #36363a;
    `}
`;
