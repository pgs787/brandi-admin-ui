import React, { useState } from 'react';
import styled, { css } from 'styled-components';
// component
import SectionField from 'components/SectionField';
// redux
import { connect } from 'react-redux';
import { setType } from 'store/actions';

const AutonomyOptionType = ({ setType }) => {
  const options = ['분리선택형', '독립선택형'];
  const [activeId, setActiveId] = useState(0);

  const onClick = id => {
    if (id !== activeId) {
      let confirmFlag = confirm(
        '기존에 등록된 옵션은 초기화됩니다. 계속 진행하시겠습니까?',
      );
      if (confirmFlag) {
        console.log('true');
        console.log(id);
        setActiveId(id);
        setType(id);
      } else {
        console.log('false');
      }
    }
  };
  return (
    <SectionField label="자율 옵션 타입" isRequired>
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

export default connect(null, { setType })(AutonomyOptionType);
