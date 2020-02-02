import React from 'react';
import styled from 'styled-components';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const SelectBox = ({ children, defaultValue }) => {
  return (
    <SelectWrapper>
      <Select defaultValue={defaultValue}>{children}</Select>
      <ArrowDropDownIcon
        fontSize="small"
        style={{
          position: 'absolute',
          right: 10,
          top: 10,
          pointerEvents: 'none',
        }}
      />
    </SelectWrapper>
  );
};

export default SelectBox;

// Styled Components

const SelectWrapper = styled.div`
  width: 100%;
  position: relative;
`;

const Select = styled.select`
  -webkit-appearance: none;
  border-radius: 0;
  font-size: 12px;
  padding-left: 10px;
  border: 1px solid #dbdde2;
  height: 40px;
  background-color: white;
  outline: none;
  width: 100%;
`;
