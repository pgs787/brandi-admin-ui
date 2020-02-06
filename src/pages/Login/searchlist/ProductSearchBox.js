import React, { useState } from 'react';
import styled from 'styled-components';
import SearchPeriod from './SearchPeriod';
import SellerName from './SellerName';
import SearchItem from './SearchItem';

const ProductSearchBox = () => {
  const [sellerProp, setSellerProp] = useState('전체');
  const [sellerDiv, setSellerDiv] = useState('전체');
  const [registStatus, setRegistStatus] = useState('전체');
  const [sellingStatus, setSellingStatus] = useState('전체');
  const [displayStatus, setDisplayStatus] = useState('전체');
  const [discountStatus, setDiscountStatus] = useState('전체');
  const [deliveryDiv, setDeliveryDiv] = useState('전체');
  const [wholesalerStatus, setWholesalerStatus] = useState('전체');

  const clickSellerProp = value => {
    setSellerProp(value);
  };

  const clickSellerDiv = value => {
    setSellerDiv(value);
  };
  const clickRegistStatus = value => {
    setRegistStatus(value);
  };
  const clickSellingStatus = value => {
    setSellingStatus(value);
  };
  const clickDisplayStatus = value => {
    setDisplayStatus(value);
  };
  const clickDiscountStatus = value => {
    setDiscountStatus(value);
  };
  const clickDeliveryDiv = value => {
    setDeliveryDiv(value);
  };
  const clickWholesalerStatus = value => {
    setWholesalerStatus(value);
  };

  const clickSearch = () => {
    //쿼리스트링 요청 보내기
  };

  const clickReset = () => {
    setSellerProp('전체');
    setSellerDiv('전체');
    setRegistStatus('전체');
    setSellingStatus('전체');
    setDisplayStatus('전체');
    setDiscountStatus('전체');
    setDeliveryDiv('전체');
    setWholesalerStatus('전체');
  };

  return (
    <>
      <SearchPeriod />
      <SellerName />
      <DivItemWrapper>
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
            '뷰티'
          ]}
          currentState={sellerProp}
          onClick={clickSellerProp}
        />
        <SearchItem
          label="셀러구분"
          options={['전체', '일반', '헬피']}
          currentState={sellerDiv}
          onClick={clickSellerDiv}
        />
        <SearchItem
          label="등록상태"
          options={['전체', '등록', '임시저장']}
          currentState={registStatus}
          onClick={clickRegistStatus}
        />
        <SearchItem
          label="판매여부"
          options={['전체', '판매', '미판매']}
          currentState={sellingStatus}
          onClick={clickSellingStatus}
        />
        <SearchItem
          label="진열여부"
          options={['전체', '진열', '미진열']}
          currentState={displayStatus}
          onClick={clickDisplayStatus}
        />
        <SearchItem
          label="할인여부"
          options={['전체', '할인', '미할인']}
          currentState={discountStatus}
          onClick={clickDiscountStatus}
        />
        <SearchItem
          label="배송구분"
          options={['전체', '배송', '미배송']}
          currentState={deliveryDiv}
          onClick={clickDeliveryDiv}
        />
        <SearchItem
          label="도매처상태"
          options={['전체', '승인', '폐업']}
          currentState={wholesalerStatus}
          onClick={clickWholesalerStatus}
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
