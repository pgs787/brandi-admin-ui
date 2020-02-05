import React, { useState } from 'react';
import styled, { css } from 'styled-components';
// component
import SectionField from '../../../../components/SectionField';
// redux
import { connect } from 'react-redux';

const OptionSetting = () => {
  const options = ['기본옵션', '자율옵션', '옵션없음'];
  const [activeId, setActiveId] = useState(0);

  const onClick = id => {
    setActiveId(id);
  };
  return (
    <SectionField label="옵션 설정" isRequired>
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
    </SectionField>
  );
};
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

export default OptionSetting;
