import React from 'react';
import styled from 'styled-components';
import BoxDesign from '../../components/BoxDesign';
import Navigation from '../../components/Navigation/Navigation';
import GeneralInfo from './Sections/GeneralInfo';
import SaleInfo from './Sections/SaleInfo';

const ProductRegistration = () => {
  return (
    <Navigation>
      <PageWrapper>
        <BoxDesign>
          <PageTitle>
            상품 등록 <RequiredSpan>* 필수 항목</RequiredSpan>
          </PageTitle>
        </BoxDesign>
        <GeneralInfo />
        <SaleInfo />
        <ButtonGroupWrapper>
          <SaveButton>임시저장</SaveButton>
          <SaveButton>등록하기</SaveButton>
          <CancelButton>취소</CancelButton>
        </ButtonGroupWrapper>
      </PageWrapper>
    </Navigation>
  );
};

export default ProductRegistration;

// Styled Components

const PageWrapper = styled.div`
  padding: 25px 20px 20px;
  background-color: #edf0f5;
`;

const PageTitle = styled.h3`
  padding: 20px 25px;
  font-size: 26px;
`;

const RequiredSpan = styled.small`
  font-size: 14px;
  margin-left: 8px;
  color: red;
`;

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
