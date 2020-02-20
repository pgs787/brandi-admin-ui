import React, { useEffect } from 'react';
import styled from 'styled-components';
import { server_url } from '../../../../../config';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const ButtonGroup = props => {
  const {
    selectedSeller,
    isSelling,
    isDisplaying,
    firstCategory,
    secondCategory,
    useProvisionNotice,
    manufacturer,
    manufactureDate,
    originCountry,
    productName,
    productDesc,
    productRepImage,
    productDetails,
    optionInfo,
    youtubeUrl,
    salePrice,
    discountRate,
    discountedPrice,
    discountStartDate,
    discountEndDate,
    productTags,
    match,
    history,
  } = props;

  useEffect(() => {
    console.log(match.params.serial_number);
    if (match.params.serial_number) {
      fetch(
        `${server_url}/product_detail?serial_code=${match.params.serial_number}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
  }, []);

  const onRegister = () => {
    const checkFunc = () => {
      if (
        selectedSeller === null ||
        firstCategory === null ||
        secondCategory === null ||
        useProvisionNotice === null ||
        productName === null ||
        productRepImage === null ||
        productDetails === null ||
        optionInfo.selectedList === null ||
        salePrice === null ||
        productTags === []
      ) {
        alert('필수항목을 전부 입력하셨는지 확인해주세요.');
        return false;
      } else {
        return true;
      }
    };
    // 필수항목 예외처리
    if (checkFunc()) {
      const generalInfoData = {
        creator_id: selectedSeller,
        is_sold: isSelling,
        is_displayed: isDisplaying,
        first_category: firstCategory,
        second_category: secondCategory,
        information_notice_use: useProvisionNotice,
        information_notice: {
          manufacturer: manufacturer,
          manufacturing_date: manufactureDate,
          origin: originCountry,
        },
        name: productName,
        one_line_description: productDesc,
        main_image: productRepImage,
        detailed_info: productDetails,
        youtube_url: youtubeUrl,
      };

      const saleInfoData = {
        price: salePrice,
        discount_rate: discountRate,
        discounted_price: discountedPrice,
        discount_start_period: discountStartDate,
        discount_end_period: discountEndDate,
        product_tags: productTags,
      };
      const optionData =
        optionInfo.optionSet === 0
          ? { option_types_id: 1, option_info: optionInfo.selectedList }
          : { option_type_id: 3, option_info: optionInfo.nonOptionStock };

      const data = {
        ...generalInfoData,
        ...optionData,
        ...saleInfoData,
      };

      fetch(`${server_url}/product`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.log(err));
      alert('상품 등록이 완료 됐습니다.');
      history.push('/product/management');
    }
  };

  return (
    <ButtonGroupWrapper>
      <SaveButton onClick={onRegister}>등록하기</SaveButton>
      <CancelButton>취소</CancelButton>
    </ButtonGroupWrapper>
  );
};

const mapStateToProps = state => {
  return {
    selectedSeller: state.generalInfo.selectedSeller,
    isSelling: state.generalInfo.isSelling,
    isDisplaying: state.generalInfo.isDisplaying,
    firstCategory: state.generalInfo.categories.firstCategory,
    secondCategory: state.generalInfo.categories.secondCategory,
    useProvisionNotice: state.generalInfo.useProvisionNotice,
    manufacturer: state.generalInfo.provisionNotice.manufacturer,
    manufactureDate: state.generalInfo.provisionNotice.manufactureDate,
    originCountry: state.generalInfo.provisionNotice.originCountry,
    productName: state.generalInfo.productName,
    productDesc: state.generalInfo.productDesc,
    productRepImage: state.generalInfo.productRepImage,
    productDetails: state.generalInfo.productDetails,
    youtubeUrl: state.generalInfo.youtubeUrl,
    optionInfo: {
      optionSet: state.optionInfo.optionSet,
      selectedList: state.optionInfo.selectedList,
      nonOptionStock: state.optionInfo.nonOptionStock,
    },
    salePrice: state.saleInfo.salePrice,
    discountRate: state.saleInfo.discountInfo.discountRate,
    discountedPrice: state.saleInfo.discountInfo.discountedPrice,
    discountStartDate: state.saleInfo.discountInfo.discountStartDate,
    discountEndDate: state.saleInfo.discountInfo.discountEndDate,
    productTags: state.saleInfo.productTags,
  };
};

export default withRouter(connect(mapStateToProps)(ButtonGroup));

// Styled Components

const ButtonGroupWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const SaveButton = styled.button`
  margin: 0 5px;
  width: 150px;
  height: 50px;
  padding: 8px 20px;
  font-size: 16px;
  color: white;
  background-color: #36363a;
  border: 1px solid #36363a;
`;

const CancelButton = styled.button`
  margin: 0 5px;
  width: 150px;
  height: 50px;
  padding: 8px 20px;
  font-size: 16px;
  background-color: white;
  border: 1px solid #ddd;
  color: #767a83;
`;
