import React, { useState } from 'react';
import styled from 'styled-components';
import SearchPeriod from './SearchPeriod';
import SellerName from './SellerName';
import SearchItem from './SearchItem';
import SearchMultiItem from './SearchMultiItem';
import { server_url } from '../../../../config';
// redux
import { connect } from 'react-redux';
import { pagenateData } from 'store/actions';

const ProductSearchBox = ({
  currentPage,
  showList,
  pagenateData,
  pagenate1,
}) => {
  const [sellerProp, setSellerProp] = useState({
    전체: true,
    쇼핑몰: false,
    마켓: false,
    로드샵: false,
    디자이너브랜드: false,
    제너럴브랜드: false,
    내셔널브랜드: false,
    뷰티: false,
  });
  const [sellingStatus, setSellingStatus] = useState('전체');
  const [displayStatus, setDisplayStatus] = useState('전체');
  const [discountStatus, setDiscountStatus] = useState('전체');
  const [startingDateTime, setStartingDateTime] = useState(new Date());
  const [endingDateTime, setEndingDateTime] = useState(new Date());
  const [sellerNameInput, setSellerNameInput] = useState('');
  const [selectOptionInput, setSelectOptionInput] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);
  const [startDate, setStartDate] = useState('20200101');
  const [endDate, setEndDate] = useState('20200219');
  const [pagenate, setPagenate] = useState('');
  // 시작기간 생성
  const onChangeStartingDate = date => {
    const year = date.getFullYear() + '';
    const month =
      date.getMonth() + 1 < 10
        ? '0' + (date.getMonth() + 1)
        : '' + (date.getMonth() + 1);
    const day =
      date.getDate() < 10 ? '0' + date.getDate() : '' + date.getDate();
    const start = year + month + day;
    console.log(start);
    setStartDate(start);
    start;
    setStartingDateTime(date);
  };
  // 종료기간 생성
  const onChangeEndingDate = date => {
    const year = date.getFullYear() + '';
    const month =
      date.getMonth() + 1 < 10
        ? '0' + (date.getMonth() + 1)
        : '' + (date.getMonth() + 1);
    const day =
      date.getDate() < 10 ? '0' + date.getDate() : '' + date.getDate();
    const end = year + month + day;
    console.log(end);
    end;
    setEndDate(end);
    setEndingDateTime(date);
  };
  // 셀러속성
  const clickSellerProp = value => {
    console.log(value);
    if (value === '전체') {
      const obj = {
        전체: true,
        쇼핑몰: false,
        마켓: false,
        로드샵: false,
        디자이너브랜드: false,
        제너럴브랜드: false,
        내셔널브랜드: false,
        뷰티: false,
      };
      setSellerProp(obj);
      obj;
    }
    if (value !== '전체') {
      let obj = {
        ...sellerProp,
        전체: false,
        [value]: !sellerProp[value],
      };
      if (
        obj['쇼핑몰'] === true &&
        obj['마켓'] === true &&
        obj['로드샵'] === true &&
        obj['디자이너브랜드'] === true &&
        obj['제너럴브랜드'] === true &&
        obj['내셔널브랜드'] === true &&
        obj['뷰티'] === true
      )
        obj = {
          전체: true,
          쇼핑몰: false,
          마켓: false,
          로드샵: false,
          디자이너브랜드: false,
          제너럴브랜드: false,
          내셔널브랜드: false,
          뷰티: false,
        };
      console.log(obj);
      obj;
      setSellerProp(obj);
    }
  };
  // 판매여부
  const clickSellingStatus = value => {
    console.log('판매여부 : ', value);
    setSellingStatus(value);
    console.log(pagenate1);
  };
  // 진열여부
  const clickDisplayStatus = value => {
    console.log('진열여부 : ', value);
    setDisplayStatus(value);
  };
  // 할인여부
  const clickDiscountStatus = value => {
    console.log('할인여부 : ', value);
    setDiscountStatus(value);
  };
  // 셀러명
  const onChangeNameInput = value => {
    console.log('셀러명 : ', value);
    setSellerNameInput(value);
  };
  // 옵션명
  const onChangeOptionInput = value => {
    console.log('옵션명 : ', value);
    setSelectOptionInput(value);
  };
  // 옵션 선택
  const onChangeSelect = value => {
    console.log('옵션 선택 : ', value);
    setSelectedOption(value);
  };

  const clickSearch = () => {
    //쿼리스트링 요청 보내기

    /* http -v GET http://192.168.1.194:5000
  /product_list?limit=10&offset=1
  &start_date=20200101&end_date=20200104
 */
    /*  셀러명(seller_name), 셀러속성(seller_attribute), 
날짜(start_date, end_date), 상품명(product_name) 
limit offset은 필수 */
    const data = {
      startDate: startDate,
      endDate: endDate,
      sellingStatus: sellingStatus,
      displayStatus: displayStatus,
      discountStatus: displayStatus,
      sellerNameInput: sellerNameInput,
      selectOptionInput: selectOptionInput,
      selectedOption: selectedOption,
    };

    console.log(data);
    setPagenate(data);
    pagenateData(data);
    // 검색옵션에는 페이지 1로 고정 오프셋만 전역으로 받아서 넘김
    // &seller_attribute=${sellerProp}
    /* pagenateData(res) */
    /* fetch(
      `${server_url}/product_list?limit=${10}&offset=${1}&product_name=${selectOptionInput}&seller_name=${sellerNameInput}&start_date=${startDate}&end_date=${endDate}`,
      {
        method: 'GET',
      },
    )
      .then(res => res.json())
      .then(res => console.log('res : ', res))
      .catch(err => console.log(err));
       */
  };

  const clickReset = () => {
    setSellerProp({
      전체: true,
      쇼핑몰: false,
      마켓: false,
      로드샵: false,
      디자이너브랜드: false,
      제너럴브랜드: false,
      내셔널브랜드: false,
      뷰티: false,
    });
    setSellingStatus('전체');
    setDisplayStatus('전체');
    setDiscountStatus('전체');
    onChangeEndingDate(new Date());
    onChangeStartingDate(new Date());
    setSellerNameInput('');
    setSelectOptionInput('');
    setSelectedOption(null);
  };

  return (
    <>
      <SearchPeriod
        startingDateTime={startingDateTime}
        endingDateTime={endingDateTime}
        onChangeStartingDate={onChangeStartingDate}
        onChangeEndingDate={onChangeEndingDate}
      />
      <SellerName
        sellerNameInput={sellerNameInput}
        selectOptionInput={selectOptionInput}
        selectedOption={selectedOption}
        onChangeNameInput={onChangeNameInput}
        onChangeOptionInput={onChangeOptionInput}
        onChangeSelect={onChangeSelect}
      />
      <DivItemWrapper>
        <SearchMultiItem
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
const mapStateToProps = state => {
  return {
    currentPage: state.productManagement.currentPage,
    showList: state.productManagement.showList,
    pagenate1: state.productManagement.pagenateData,
  };
};

export default connect(mapStateToProps, {
  pagenateData,
})(ProductSearchBox);

const DivItemWrapper = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: space-between;
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
