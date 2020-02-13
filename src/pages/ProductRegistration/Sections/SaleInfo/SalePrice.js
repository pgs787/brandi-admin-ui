import React, { useState } from 'react';
import styled from 'styled-components';
import SectionField from 'components/SectionField';
import { checkSalePrice } from 'utils/checkValidation';
import { connect } from 'react-redux';
import { setSalePrice } from 'store/actions';

const SalePrice = ({ setSalePrice }) => {
  const [salePriceLocal, setSalePriceLocal] = useState('');
  const [isValid, setIsValid] = useState(true);

  const onChange = e => {
    setSalePriceLocal(e.target.value);

    if (!checkSalePrice(e.target.value)) {
      // 10원 단위가 아니므로 NOT VALID
      setIsValid(false);
    } else {
      // 10원 단위이므로 스토어에 판매가 업데이트
      setIsValid(true);
      setSalePrice(parseInt(e.target.value));
    }
  };

  return (
    <SectionField
      label="판매가"
      moreInfoText="판매가는 원화기준 10원 이상이며 가격 입력 시 10원 단위로 입력해 주세요."
      isRequired
    >
      <PriceInputBoxWrapper>
        <InputTag
          type="number"
          value={salePriceLocal}
          placeholder="0"
          onKeyDown={e =>
            (e.keyCode === 69 ||
              e.keyCode === 190 ||
              e.keyCode === 187 ||
              e.keyCode === 189) &&
            e.preventDefault()
          }
          onChange={onChange}
          isValid={isValid}
        />
        <TagSpan>원</TagSpan>
      </PriceInputBoxWrapper>
    </SectionField>
  );
};

export default connect(null, { setSalePrice })(SalePrice);

// Styled-Components

const PriceInputBoxWrapper = styled.div`
  width: 280px;
  display: flex;
`;

const InputTag = styled.input`
  width: 100%;
  background-color: #f8f9fd;
  &:focus {
    border-color: #999999;
    background-color: white;
    ${props => !props.isValid && 'border: 1px solid red'}
  }
`;

const TagSpan = styled.div`
  width: 50px;
  background-color: #f8f9fd;
  height: 40px;
  font-size: 14px;
  border: 1px solid #dbdde2;
  border-left: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #555555;
`;
