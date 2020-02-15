import React from 'react';
import styled from 'styled-components';
import BoxDesign from '../../../components/BoxDesign';
import SellerSearchBox from './SellerSearchBox';

const Title = () => {
  return (
    <>
      <BoxDesign>
        <PageTitle>셀러 계정 관리</PageTitle>
      </BoxDesign>
      <BoxDesign style={{ padding: '30px' }}>
        <SellerSearchBox />
      </BoxDesign>
    </>
  );
};

export default Title;

const PageTitle = styled.h3`
  padding: 20px 25px;
  font-size: 26px;
`;
