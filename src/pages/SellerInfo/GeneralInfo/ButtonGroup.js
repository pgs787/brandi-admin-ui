import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { API_URL } from '../../../utils/callUrl';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

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
    managerId,
    managerNameSecond,
    managerNumberSecond,
    managerMailSecond,
    managerIdSecond,
    managerNameThird,
    managerNumberThird,
    managerMailThird,
    managerIdThird,
    instaId,
    csNumber,
    kakaoId,
    yellowId,
    deliveryInfo,
    refundInfo,
    history,
    match,
  } = props;

  const onRegister = () => {
    console.log(
      !sellerImg,
      !ceoName,
      !sellerName,
      !businessNumber,
      !correspondNumber,
      !registImg,
      !sellingImg,
      !introduce,
      !site,
      !managerName,
      !managerNumber,
      !managerMail,
      !csNumber,
      !kakaoId,
      !yellowId,
      !deliveryInfo,
      !refundInfo,
    );
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
    const checkId = () => {
      if (managerIdThird)
        return [
          {
            id: managerId,
            email: managerMail,
            mobile_number: managerNumber,
            name: managerName,
          },
          {
            id: managerIdSecond,
            email: managerMailSecond,
            mobile_number: managerNumberSecond,
            name: managerNameSecond,
          },
          {
            id: managerIdThird,
            email: managerMailThird,
            mobile_number: managerNumberThird,
            name: managerNameThird,
          },
        ];
      else if (managerIdSecond)
        return [
          {
            id: managerId,
            email: managerMail,
            mobile_number: managerNumber,
            name: managerName,
          },
          {
            id: managerIdSecond,
            email: managerMailSecond,
            mobile_number: managerNumberSecond,
            name: managerNameSecond,
          },
          {
            email: managerMailThird,
            mobile_number: managerNumberThird,
            name: managerNameThird,
          },
        ];
      else
        return [
          {
            id: managerId,
            email: managerMail,
            mobile_number: managerNumber,
            name: managerName,
          },
          {
            email: managerMailSecond,
            mobile_number: managerNumberSecond,
            name: managerNameSecond,
          },
          {
            email: managerMailThird,
            mobile_number: managerNumberThird,
            name: managerNameThird,
          },
        ];
    };

    const data = {
      seller_info: {
        bg_image: backgroundImg,
        ceo_name: ceoName,
        company_certi_image: registImg,
        company_code: businessNumber,
        company_name: sellerName,
        cs_kakao_account: kakaoId,
        cs_phone_number: csNumber,
        cs_yellow_account: yellowId,
        detailed_intro: detailIntro,
        instagram_account: instaId,
        mail_order_code: correspondNumber,
        mail_order_image: sellingImg,
        name_en: sellerNameEn,
        name_kr: sellerNameKr,
        profile_image: sellerImg,
        refund_info: refundInfo,
        seller_representative: checkId(),
        shopping_info: deliveryInfo,
        single_line_intro: introduce,
        site_url: site,
      },
    };

    if (match.params.id) {
      fetch(`${API_URL}/seller/list-info-update/${match.params.id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then(res => res.json())
        .then(res => {
          alert('정상적으로 수정 되었습니다.');
          console.log(res);
          history.push('/seller/management');
        })
        .catch(err => {
          console.log(data);
          console.log(token);
          console.log(err);
        });
    } else {
      const token = localStorage.getItem('Login_token');
      fetch(`${API_URL}/seller/info-update`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
        body: JSON.stringify(data),
      })
        .then(res => res.json())
        .then(res => {
          alert('정상적으로 수정 되었습니다.');
          console.log(res);
          history.push('/seller/management');
        })
        .catch(err => {
          console.log(data);
          console.log(token);
          console.log(err);
        });
    }
  };

  return (
    <ButtonGroupWrapper>
      <SaveButton onClick={onRegister}>저장</SaveButton>
      <CancelButton
        onClick={() => {
          const result = confirm('정보 수정을 중단하시겠습니까?');
          if (result) {
            history.push('/seller/management');
          }
        }}
      >
        취소
      </CancelButton>
    </ButtonGroupWrapper>
  );
};

const mapStateToProps = state => {
  return {
    sellerImg: state.userGeneralInfo.sellerImg,
    sellerNameKr: state.userGeneralInfo.sellerName.kr,
    sellerNameEn: state.userGeneralInfo.sellerName.en,
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
    managerId: state.userDetailInfo.detailInfo.managerId,
    managerIdSecond: state.userDetailInfo.detailInfo.managerIdSecond,
    managerIdThird: state.userDetailInfo.detailInfo.managerIdThird,
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
