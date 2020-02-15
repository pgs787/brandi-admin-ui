import React, { useState } from 'react';
import styled from 'styled-components';
import { API_URL } from '../../../utils/callUrl';
import { connect } from 'react-redux';

const ButtonGroup = props => {
  const {
    sellerImg,
    sellerNameKr,
    sellerNameEn,
    ceoName,
    sellerName,
    businessNumber,
    correspondNumber,
    registImg,
    sellingImg,
    backgroundImg,
    introduce,
    detailIntro,
    site,
    managerName,
    managerNumber,
    managerMail,
    managerNameSecond,
    managerNumberSecond,
    managerMailSecond,
    managerNameThird,
    managerNumberThird,
    managerMailThird,
    instaId,
    csNumber,
    kakaoId,
    yellowId,
    deliveryInfo,
    refundInfo,
  } = props;

  const check = null || '';

  const onRegister = () => {
    if (
      !sellerImg ||
      !ceoName ||
      !sellerName ||
      !businessNumber ||
      !correspondNumber ||
      !registImg ||
      !sellingImg ||
      !introduce ||
      !site ||
      !managerName ||
      !managerNumber ||
      !managerMail ||
      !csNumber ||
      !kakaoId ||
      !yellowId ||
      !deliveryInfo ||
      !refundInfo
    ) {
      alert('필수항목을 전부 입력하셨는지 확인해주세요.');
      return;
    }

    //   const data = {
    //     // creator_id: selectedSeller,
    //     // is_sold: isSelling,
    //     // is_displayed: isDisplaying,
    //     // first_category: firstCategory,
    //     // second_category: secondCategory,
    //     // information_notice_use: useProvisionNotice,
    //     // information_notice: {
    //     //   manufacturer: manufacturer,
    //     //   manufacturing_date: manufactureDate,
    //     //   origin: originCountry,
    //     // },
    //     // name: productName,
    //     // one_line_description: productDesc,
    //     // youtube_url: youtubeUrl,
    //   };

    //   fetch(`${API_URL}/product3`, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(data),
    //   })
    //     .then(res => res.json())
    //     .then(res => console.log(res))
    //     .catch(err => console.log(err));
  };

  return (
    <ButtonGroupWrapper>
      <SaveButton onClick={onRegister}>저장</SaveButton>
      <CancelButton>취소</CancelButton>
    </ButtonGroupWrapper>
  );
};

const mapStateToProps = state => {
  return {
    sellerImg: state.userGeneralInfo.sellerImg,
    sellerNameKr: state.userGeneralInfo.sellerName.kr,
    sellerNameEn: state.userGeneralInfo.sellerName.En,
    ceoName: state.userBusinessInfo.businessInfo.ceoName,
    sellerName: state.userBusinessInfo.businessInfo.sellerName,
    businessNumber: state.userBusinessInfo.businessInfo.businessNumber,
    correspondNumber: state.userBusinessInfo.businessInfo.correspondNumber,
    registImg: state.userBusinessInfo.businessImg.registImg,
    sellingImg: state.userBusinessInfo.businessImg.sellingImg,
    backgroundImg: state.userDetailInfo.detailImg.backgroundImg,
    introduce: state.userDetailInfo.detailInfo.introduce,
    detailIntro: state.userDetailInfo.detailInfo.detailIntro,
    site: state.userDetailInfo.detailInfo.site,
    managerName: state.userDetailInfo.detailInfo.managerName,
    managerNumber: state.userDetailInfo.detailInfo.managerNumber,
    managerMail: state.userDetailInfo.detailInfo.managerMail,
    managerNameSecond: state.userDetailInfo.detailInfo.managerNameSecond,
    managerNumberSecond: state.userDetailInfo.detailInfo.managerNumberSecond,
    managerMailSecond: state.userDetailInfo.detailInfo.managerMailSecond,
    managerNameThird: state.userDetailInfo.detailInfo.managerNameThird,
    managerNumberThird: state.userDetailInfo.detailInfo.managerNumberThird,
    managerMailThird: state.userDetailInfo.detailInfo.managerMailThird,
    instaId: state.userDetailInfo.detailInfo.instaId,
    csNumber: state.userDetailInfo.detailInfo.csNumber,
    kakaoId: state.userDetailInfo.detailInfo.kakaoId,
    yellowId: state.userDetailInfo.detailInfo.yellowId,
    deliveryInfo: state.otherInfo.deliveryInfo,
    refundInfo: state.otherInfo.refundInfo,
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
