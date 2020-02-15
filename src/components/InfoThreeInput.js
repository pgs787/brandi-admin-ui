import React, { useState, useReducer } from 'react';
import SectionField from 'components/SectionField';
import styled from 'styled-components';
import ManagerInfo from '../pages/SellerInfo/DetailInfo/ManagerInfo';
import { connect } from 'react-redux';
import { setDetailInfo } from 'store/actions';

const InfoThreeInput = ({
  setDetailInfo,
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
  changeName,
  changeNumber,
  changeMail,
  changeNameSecond,
  changeNumberSecond,
  changeMailSecond,
  changeNameThird,
  changeNumberThird,
  changeMailThird,
  changeCsNumber,
  changeKakao,
  changeYellow,
  nameValue,
  numberValue,
  mailValue,
  nameSecondValue,
  numberSecondValue,
  mailSecondValue,
  nameThirdValue,
  numberThirdValue,
  mailThirdValue,
  csNumberValue,
  kakaoIdValue,
  yellowIdValue,
  deleteSecName,
  deleteSecNum,
  deleteSecMail,
  deleteThrName,
  deleteThrNum,
  deleteThrMail,
}) => {
  const [countInput, setCountInput] = useState(1);

  const handleClick = value => {
    setCountInput(value);
  };

  const checkNumber = num => {
    if (num === '1')
      return (
        <ManagerInfo
          firstValue={csNumberValue}
          secondValue={kakaoIdValue}
          thirdValue={yellowIdValue}
          firstChange={changeCsNumber}
          secondChange={changeKakao}
          thirdChange={changeYellow}
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
              firstValue={nameValue}
              secondValue={numberValue}
              thirdValue={mailValue}
              firstChange={changeName}
              secondChange={changeNumber}
              thirdChange={changeMail}
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
              firstValue={nameValue}
              secondValue={numberValue}
              thirdValue={mailValue}
              firstChange={changeName}
              secondChange={changeNumber}
              thirdChange={changeMail}
              countInput={countInput}
              firstImg={firstImg}
              secondImg={secondImg}
              thirdImg={thirdImg}
              firstPlaceholder={firstPlaceholder}
              secondPlaceholder={secondPlaceholder}
              thirdPlaceholder={thirdPlaceholder}
            />
            <ManagerInfo
              firstValue={nameSecondValue}
              secondValue={numberSecondValue}
              thirdValue={mailSecondValue}
              firstChange={changeNameSecond}
              secondChange={changeNumberSecond}
              thirdChange={changeMailSecond}
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
                onClick={() => {
                  handleClick(1);
                  setDetailInfo(null, 'managerNameSecond');
                  setDetailInfo(null, 'managerMailSecond');
                  setDetailInfo(null, 'managerNumberSecond');
                  deleteSecName('');
                  deleteSecMail('');
                  deleteSecNum('');
                }}
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
              firstValue={nameValue}
              secondValue={numberValue}
              thirdValue={mailValue}
              firstChange={changeName}
              secondChange={changeNumber}
              thirdChange={changeMail}
              firstImg={firstImg}
              secondImg={secondImg}
              thirdImg={thirdImg}
              firstPlaceholder={firstPlaceholder}
              secondPlaceholder={secondPlaceholder}
              thirdPlaceholder={thirdPlaceholder}
            />
            <ManagerInfo
              firstValue={nameSecondValue}
              secondValue={numberSecondValue}
              thirdValue={mailSecondValue}
              firstChange={changeNameSecond}
              secondChange={changeNumberSecond}
              thirdChange={changeMailSecond}
              firstImg={firstImg}
              secondImg={secondImg}
              thirdImg={thirdImg}
              firstPlaceholder={firstPlaceholder}
              secondPlaceholder={secondPlaceholder}
              thirdPlaceholder={thirdPlaceholder}
            />
            <ManagerInfo
              firstValue={nameThirdValue}
              secondValue={numberThirdValue}
              thirdValue={mailThirdValue}
              firstChange={changeNameThird}
              secondChange={changeNumberThird}
              thirdChange={changeMailThird}
              firstImg={firstImg}
              secondImg={secondImg}
              thirdImg={thirdImg}
              firstPlaceholder={firstPlaceholder}
              secondPlaceholder={secondPlaceholder}
              thirdPlaceholder={thirdPlaceholder}
            />
            <FlexWrapper>
              <CountButton
                onClick={() => {
                  handleClick(2);
                  setDetailInfo(null, 'managerNameThird');
                  setDetailInfo(null, 'managerMailThird');
                  setDetailInfo(null, 'managerNumberThird');
                  deleteThrMail('');
                  deleteThrName('');
                  deleteThrNum('');
                }}
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

export default connect(null, { setDetailInfo })(InfoThreeInput);

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
