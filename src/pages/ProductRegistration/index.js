import React from 'react';
import styled from 'styled-components';
import BoxDesign from '../../components/BoxDesign';
import GeneralInfo from './Sections/GeneralInfo';

const ProductRegistration = () => {
  return (
    <>
      <PageWrapper>
        <BoxDesign>
          <PageTitle>
            상품 등록 <RequiredSpan>* 필수 항목</RequiredSpan>
          </PageTitle>
        </BoxDesign>
        <GeneralInfo />
      </PageWrapper>
    </>
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
