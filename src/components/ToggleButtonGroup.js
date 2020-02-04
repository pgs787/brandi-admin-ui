import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const ToggleButtonGroup = ({ options }) => {
  const [activeId, setActiveId] = useState(0);

  const onClick = id => {
    setActiveId(id);
  };

  return (
    <ButtonGroupWrapper>
      {options.map((option, idx) => (
        <OptionButton
          key={idx}
          id={idx}
          onClick={() => onClick(idx)}
          activeId={activeId === idx}
          value={option}
        >
          {option}
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
    props.activeId &&
    css`
      color: white;
      background-color: #36363a;
      border: 1px solid #36363a;
    `}
`;
