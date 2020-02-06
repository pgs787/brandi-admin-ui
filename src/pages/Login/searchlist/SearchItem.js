import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const DivListWrapper = styled.div`
  display: flex;
  padding: 15px 25px 5px;
  align-items: center;
`;

const LabelListName = styled.label`
  display: inline-block;
  font-weight: 500;
  font-size: 15px;
  width: 100px;
`;

const OptionButton = styled.button`
  border: 1px solid #ddd;
  width: 100px;
  padding: 8px 10px;
  font-size: 12px;
  color: #767a83;
  ${props =>
    props.isActive &&
    css`
      color: white;
      background-color: #36363a;
      border: 1px solid #36363a;
    `}
`;

const DivListContent = styled.div`
  margin-left: 40px;
  display: flex;
`;

const SearchItem = ({ label, options, currentState, onClick }) => {
  return (
    <DivListWrapper>
      <LabelListName>{label}</LabelListName>
      <DivListContent>
        {options.map((option, idx) => (
          <OptionButton
            key={idx}
            onClick={() => onClick(option)}
            isActive={currentState === option}
          >
            {option}
          </OptionButton>
        ))}
      </DivListContent>
    </DivListWrapper>
  );
};

export default SearchItem;
