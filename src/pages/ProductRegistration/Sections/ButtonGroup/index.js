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
    youtubeUrl,
  } = props;

  const onRegister = () => {
    if (
      selectedSeller === null ||
      firstCategory === null ||
      secondCategory === null ||
      useProvisionNotice === null ||
      productName === null
    ) {
      alert('필수항목을 전부 입력하셨는지 확인해주세요.');
      return;
    }

    const data = {
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
      youtube_url: youtubeUrl,
    };

    fetch(`${server_url}/product3`, {
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
      <SaveButton onClick={onRegister}>임시저장</SaveButton>
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
    youtubeUrl: state.generalInfo.youtubeUrl,
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
