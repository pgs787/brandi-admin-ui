import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import SectionField from 'components/SectionField';
import { connect } from 'react-redux';
import { setUseRelationProduct } from 'store/actions';

const availableStatus = [{ value: '사용' }, { value: '미사용' }];

const UseRelationProduct = ({ setUseRelationProduct }) => {
  const [activeId, setActiveId] = useState(1);

  const onClick = id => {
    setActiveId(id);
    setUseRelationProduct(availableStatus[id].value);
  };

  return (
    <SectionField label="코디 상품 사용 여부">
      <ButtonGroupWrapper>
        {availableStatus.map((status, idx) => (
          <OptionButton
            key={idx}
            id={idx}
            onClick={() => onClick(idx)}
            isActive={activeId === idx}
          >
            {status.value}
          </OptionButton>
        ))}
      </ButtonGroupWrapper>
    </SectionField>
  );
};

export default connect(null, { setUseRelationProduct })(UseRelationProduct);

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
