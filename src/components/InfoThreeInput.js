import React, { useState, useReducer } from 'react';
import SectionField from 'components/SectionField';
import styled from 'styled-components';
import ManagerInfo from '../pages/SellerInfo/DetailInfo/ManagerInfo';

const InfoThreeInput = ({
  isRequired,
  name,
  firstImg,
  secondImg,
  thirdImg,
  firstPlaceholder,
  secondPlaceholder,
  thirdPlaceholder,
  text,
  number,
}) => {
  const [countInput, setCountInput] = useState(1);

  const handleClick = value => {
    setCountInput(value);
  };

  const checkNumber = num => {
    if (num === '1')
      return (
        <ManagerInfo
          firstImg={firstImg}
          secondImg={secondImg}
          thirdImg={thirdImg}
          firstPlaceholder={firstPlaceholder}
          secondPlaceholder={secondPlaceholder}
          thirdPlaceholder={thirdPlaceholder}
        />
      );
    else {
      if (countInput === 1)
        return (
          <>
            <ManagerInfo
              countInput={countInput}
              firstImg={firstImg}
              secondImg={secondImg}
              thirdImg={thirdImg}
              firstPlaceholder={firstPlaceholder}
              secondPlaceholder={secondPlaceholder}
              thirdPlaceholder={thirdPlaceholder}
            />
            <FlexWrapper>
              <CountButton onClick={() => handleClick(2)}>추가</CountButton>
            </FlexWrapper>
          </>
        );
      if (countInput === 2)
        return (
          <>
            <ManagerInfo
              countInput={countInput}
              firstImg={firstImg}
              secondImg={secondImg}
              thirdImg={thirdImg}
              firstPlaceholder={firstPlaceholder}
              secondPlaceholder={secondPlaceholder}
              thirdPlaceholder={thirdPlaceholder}
            />
            <ManagerInfo
              countInput={countInput}
              firstImg={firstImg}
              secondImg={secondImg}
              thirdImg={thirdImg}
              firstPlaceholder={firstPlaceholder}
              secondPlaceholder={secondPlaceholder}
              thirdPlaceholder={thirdPlaceholder}
            />
            <FlexWrapper>
              <CountButton onClick={() => handleClick(3)}>추가</CountButton>
              <CountButton
                onClick={() => handleClick(1)}
                style={{ backgroundColor: '#36363a', color: 'white' }}
              >
                제거
              </CountButton>
            </FlexWrapper>
          </>
        );
      if (countInput === 3)
        return (
          <>
            <ManagerInfo
              firstImg={firstImg}
              secondImg={secondImg}
              thirdImg={thirdImg}
              firstPlaceholder={firstPlaceholder}
              secondPlaceholder={secondPlaceholder}
              thirdPlaceholder={thirdPlaceholder}
            />
            <ManagerInfo
              firstImg={firstImg}
              secondImg={secondImg}
              thirdImg={thirdImg}
              firstPlaceholder={firstPlaceholder}
              secondPlaceholder={secondPlaceholder}
              thirdPlaceholder={thirdPlaceholder}
            />
            <ManagerInfo
              firstImg={firstImg}
              secondImg={secondImg}
              thirdImg={thirdImg}
              firstPlaceholder={firstPlaceholder}
              secondPlaceholder={secondPlaceholder}
              thirdPlaceholder={thirdPlaceholder}
            />
            <FlexWrapper>
              <CountButton
                onClick={() => handleClick(2)}
                style={{ backgroundColor: '#36363a', color: 'white' }}
              >
                제거
              </CountButton>
            </FlexWrapper>
          </>
        );
    }
  };

  return (
    <SectionField label={name} isRequired={isRequired} moreInfoText={text}>
      {checkNumber(number)}
    </SectionField>
  );
};

export default InfoThreeInput;

const CountButton = styled.button`
  border: 1px solid #ddd;
  width: 80px;
  padding: 8px 10px;
  font-size: 14px;
  color: #767a83;
  margin-bottom: 10px;
  &:hover {
    opacity: 0.8;
  }
`;

const FlexWrapper = styled.div`
  display: flex;
  width: 325px;
  justify-content: center;
`;
