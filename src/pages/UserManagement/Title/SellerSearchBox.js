import React, { useState } from 'react';
import styled from 'styled-components';
import SearchPeriod from 'pages/ProductManagement/Sections/SearchPeriod';
import SellerName from 'pages/ProductManagement/Sections/SellerName';
import SearchItem from 'pages/ProductManagement/Sections/SearchItem';
import SearchInput from './SearchInput';

const ProductSearchBox = () => {
  const [sellerProp, setSellerProp] = useState('전체');
  const [number, setNumber] = useState('');
  const [sellerId, setSellerId] = useState('');
  const [enName, setEnName] = useState('');
  const [krName, setKrName] = useState('');
  const [userNumber, setuserNumber] = useState('');
  const [managerName, setmanagerName] = useState('');
  const [mangerNumber, setManagerNumber] = useState('');
  const [managerMail, setmanagerMail] = useState('');
  const [startingDateTime, setStartingDateTime] = useState(new Date());
  const [endingDateTime, setEndingDateTime] = useState(new Date());

  const onChangeStartingDate = date => {
    setStartingDateTime(date);
  };

  const onChangeEndingDate = date => {
    setEndingDateTime(date);
  };

  const clickSellerProp = value => {
    setSellerProp(value);
  };

  const changeNumber = value => {
    setNumber(value);
  };
  const changeSellerId = value => {
    setSellerId(value);
  };
  const changeEnName = value => {
    setEnName(value);
  };
  const changeKrName = value => {
    setKrName(value);
  };
  const changeUserNumber = value => {
    setuserNumber(value);
  };
  const changeManagerName = value => {
    setmanagerName(value);
  };

  const changeManagerNumber = value => {
    setManagerNumber(value);
  };

  const changeManagerMail = value => {
    setmanagerMail(value);
  };

  const clickSearch = () => {
    //쿼리스트링 요청 보내기
  };

  const clickReset = () => {
    setSellerProp('전체');
    onChangeStartingDate(new Date());
    onChangeEndingDate(new Date());
    changeNumber('');
    changeSellerId('');
    changeEnName('');
    changeKrName('');
    changeUserNumber('');
    changeManagerMail('');
    changeManagerName('');
    changeManagerNumber('');
  };

  return (
    <>
      <DivItemWrapper>
        <SearchInput value={number} onChangeInput={changeNumber} title="번호" />
        <SearchInput
          value={sellerId}
          onChangeInput={changeSellerId}
          title="셀러 아이디"
        />
        <SearchInput
          value={enName}
          onChangeInput={changeEnName}
          title="영문 이름"
        />
        <SearchInput
          value={krName}
          onChangeInput={changeKrName}
          title="한글 이름"
        />
        <SearchInput
          value={userNumber}
          onChangeInput={changeUserNumber}
          title="회원번호"
        />
        <SearchInput
          value={managerName}
          onChangeInput={changeManagerName}
          title="담당자 이름"
        />
        <SearchInput
          value={mangerNumber}
          onChangeInput={changeManagerNumber}
          title="담당자 연락처"
        />
        <SearchInput
          value={managerMail}
          onChangeInput={changeManagerMail}
          title="담당자 이메일"
        />
        <SearchItem
          label="셀러속성"
          options={[
            '전체',
            '쇼핑몰',
            '마켓',
            '로드샵',
            '디자이너브랜드',
            '제너럴브랜드',
            '내셔널브랜드',
            '뷰티',
          ]}
          currentState={sellerProp}
          onClick={clickSellerProp}
        />
        <SearchPeriod
          startingDateTime={startingDateTime}
          endingDateTime={endingDateTime}
          onChangeStartingDate={onChangeStartingDate}
          onChangeEndingDate={onChangeEndingDate}
        />
      </DivItemWrapper>
      <DivBtnWrapper>
        <OptionButton
          onClick={clickSearch}
          style={{ backgroundColor: '#36363a', color: 'white' }}
        >
          검색
        </OptionButton>
        <OptionButton onClick={clickReset}>초기화</OptionButton>
      </DivBtnWrapper>
    </>
  );
};

export default ProductSearchBox;

const DivItemWrapper = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: flex-start;
`;

const DivBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  padding-bottom: 30px;
`;

const OptionButton = styled.button`
  border: 1px solid #ddd;
  width: 140px;
  padding: 8px 10px;
  font-size: 12px;
  color: #767a83;
`;
