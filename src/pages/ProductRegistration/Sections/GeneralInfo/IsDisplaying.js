import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import SectionField from 'components/SectionField';
import { connect } from 'react-redux';
import { setDisplayStatus } from '../../../../redux/actions';

const availableStatus = [{ value: '진열' }, { value: '미진열' }];

const IsDisplaying = ({ setDisplayStatus }) => {
  const [activeId, setActiveId] = useState(0);

  const onClick = (id, value) => {
    setActiveId(id);
    setDisplayStatus(value);
  };

  return (
    <SectionField
      label="진열 여부"
      moreInfoText="미진열 선택시 앱에서 노출되지 않습니다."
    >
      <ButtonGroupWrapper>
        {availableStatus.map((status, idx) => (
          <OptionButton
            key={idx}
            id={idx}
            onClick={() => onClick(idx, status.value)}
            isActive={activeId === idx}
          >
            {status.value}
          </OptionButton>
        ))}
      </ButtonGroupWrapper>
    </SectionField>
  );
};

export default connect(null, { setDisplayStatus })(IsDisplaying);

// Styled Components
const ButtonGroupWrapper = styled.div``;

const OptionButton = styled.button`
  border: 1px solid #ddd;
  width: 140px;
  padding: 8px 20px;
  font-size: 13px;
  color: #767a83;
  ${props =>
    props.isActive &&
    css`
      color: white;
      background-color: #36363a;
      border: 1px solid #36363a;
    `}
`;
