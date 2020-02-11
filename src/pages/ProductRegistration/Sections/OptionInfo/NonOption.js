import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import SectionField from 'components/SectionField';
// redux
import { connect } from 'react-redux';
import { stockChange, selectedList } from 'store/actions';

const NonOption = () => {
  const [activeId, setActiveId] = useState(0);

  const onClick = idx => {
    setActiveId(idx);
  };
  return (
    <SectionField label="옵션 정보">
      <ButtonGroupWrapper>
        {['수량 관리 안함', '재고 수량 관리'].map((option, idx) => (
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
      <InputTag disabled={activeId === 0 ? true : false}></InputTag>
    </SectionField>
  );
};
const ButtonGroupWrapper = styled.div`
  display: inline;
`;

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

const InputTag = styled.input`
  width: 10%;
  height: 34px;
  position: absolute;
  background-color: #f8f9fd;
  &:focus {
    border-color: #999999;
    background-color: white;
  }
`;

export default NonOption;
