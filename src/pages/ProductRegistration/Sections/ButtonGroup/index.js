import React from 'react';
import styled from 'styled-components';
import { server_url } from '../../../../../config';
import { connect } from 'react-redux';

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
    youtubeUrl,
    salePrice,
    discountRate,
    discountedPrice,
    discountStartDate,
    discountEndDate,
    productTags,
  } = props;

  const onRegister = () => {
    if (
      selectedSeller === null ||
      firstCategory === null ||
      // secondCategory === null ||
      useProvisionNotice === null ||
      productName === null ||
      productRepImage === null ||
      productDetails === null ||
      salePrice === null ||
      productTags === []
    ) {
      alert('필수항목을 전부 입력하셨는지 확인해주세요.');
      return;
    }

    const generalInfoData = {
      creator_id: selectedSeller,
      is_sold: isSelling,
      is_displayed: isDisplaying,
      first_category: firstCategory,
      second_category: '코트',
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

    const data = {
      ...generalInfoData,
      option_types_id: 3,
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
    salePrice: state.saleInfo.salePrice,
    discountRate: state.saleInfo.discountInfo.discountRate,
    discountedPrice: state.saleInfo.discountInfo.discountedPrice,
    discountStartDate: state.saleInfo.discountInfo.discountStartDate,
    discountEndDate: state.saleInfo.discountInfo.discountEndDate,
    productTags: state.saleInfo.productTags,
  };
};

export default connect(mapStateToProps)(ButtonGroup);

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
