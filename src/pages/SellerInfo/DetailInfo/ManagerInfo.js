import React, { useState, useReducer } from 'react';
import styled from 'styled-components';

const ManagerInfo = ({
  firstImg,
  secondImg,
  thirdImg,
  firstPlaceholder,
  secondPlaceholder,
  thirdPlaceholder,
  firstChange,
  secondChange,
  thirdChange,
  firstValue,
  secondValue,
  thirdValue,
}) => {
  return (
    <Border>
      <Wrapper>
        <DivInputIcon>
          <Icon img={firstImg} />
          <Input
            value={firstValue}
            onChange={firstChange}
            placeholder={firstPlaceholder}
            autoComplete="off"
          />
        </DivInputIcon>
        <DivInputIcon>
          <Icon img={secondImg} />
          <Input
            value={secondValue}
            onChange={secondChange}
            placeholder={secondPlaceholder}
            autoComplete="off"
          />
        </DivInputIcon>
        <DivInputIcon>
          <Icon img={thirdImg} />
          <Input
            value={thirdValue}
            onChange={thirdChange}
            placeholder={thirdPlaceholder}
            autoComplete="off"
          />
        </DivInputIcon>
      </Wrapper>
    </Border>
  );
};

export default ManagerInfo;

const DivInputIcon = styled.div`
  position: relative;
  margin-bottom: 10px;
`;

const Border = styled.div`
  margin-top: 10px;
`;

const Wrapper = styled.div`
  width: 325px;
`;

const Icon = styled.i`
  color: #ccc;
  position: absolute;
  margin: 11px 2px 4px 10px;
  width: 16px;
  height: 16px;
  font-size: 14px;
  text-align: center;
  line-height: 14px;
  font-family: FontAwesome;
  font-style: normal;
  &:before {
  content: '${({ img }) => img}';
  }
  `;

const Input = styled.input`
  font-size: 14px;
  font-weight: normal;
  color: #333333;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  transition: border-color ease-in-out 0.3s, box-shadow ease-in-out 0.3s;
  width: 100%;
  height: 34px;
  padding: 6px 12px 5px 33px;
  -webkit-appearance: none;
  margin: 0;
  &:focus {
    border-color: #999999;
    outline: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
    ${({ check }) =>
      check &&
      css`
        border-color: #a94442;
      `}
  }
`;

const CountButton = styled.button`
  border: 1px solid #ddd;
  width: 80px;
  padding: 8px 10px;
  font-size: 14px;
  color: #767a83;
  margin-bottom: 10px;
`;

const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
