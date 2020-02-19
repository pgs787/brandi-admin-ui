import React, { useState } from 'react';
import styled from 'styled-components';
import SearchPeriod from 'pages/ProductManagement/Sections/SearchPeriod';
import SellerName from 'pages/ProductManagement/Sections/SellerName';
import SearchItem from 'pages/ProductManagement/Sections/SearchItem';
import SearchInput from './SearchInput';

const ProductSearchBox = ({
  sellerProp,
  number,
  sellerId,
  enName,
  krName,
  managerName,
  managerNumber,
  managerMail,
  startingDateTime,
  endingDateTime,
  onChangeStartingDate,
  onChangeEndingDate,
  clickSellerProp,
  changeNumber,
  changeSellerId,
  changeEnName,
  changeKrName,
  changeManagerName,
  changeManagerNumber,
  changeManagerMail,
  clickReset,
  handleSearch,
  siteUrl,
  changeSite,
  currentPage,
  offset,
}) => {
  return (
    <>
      <SearchPeriod
        startingDateTime={startingDateTime}
        endingDateTime={endingDateTime}
        onChangeStartingDate={onChangeStartingDate}
        onChangeEndingDate={onChangeEndingDate}
      />
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
          value={managerName}
          onChangeInput={changeManagerName}
          title="담당자 이름"
        />
        <SearchInput
          value={managerNumber}
          onChangeInput={changeManagerNumber}
          title="담당자 연락처"
        />
        <SearchInput
          value={managerMail}
          onChangeInput={changeManagerMail}
          title="담당자 이메일"
        />
        <SearchInput
          value={siteUrl}
          onChangeInput={changeSite}
          title="사이트"
        />
      </DivItemWrapper>
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
      <DivBtnWrapper>
        <OptionButton
          onClick={() => handleSearch(currentPage, offset)}
          style={{
            backgroundColor: '#36363a',
            color: 'white',
          }}
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
