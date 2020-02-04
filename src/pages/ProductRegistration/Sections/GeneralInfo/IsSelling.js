import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import SectionField from '../../../../components/SectionField';
import { connect } from 'react-redux';
import { setSellStatus } from '../../../../redux/actions';

const availableStatus = [{ value: '판매' }, { value: '미판매' }];

const IsSelling = ({ setSellStatus }) => {
  const [activeId, setActiveId] = useState(0);

  const onClick = (id, value) => {
    setActiveId(id);
    setSellStatus(value);
  };

  return (
    <SectionField
      label="판매 여부"
      moreInfoText="미판매 선택시 앱에서 Sold Out으로 표시됩니다."
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

const mapStateToProps = state => {
  return {
    sellingStatus: state.sellingStatus,
  };
};

export default connect(mapStateToProps, { setSellStatus })(IsSelling);

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
