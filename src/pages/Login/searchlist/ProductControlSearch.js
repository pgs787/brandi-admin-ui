import React from 'react';
import styled from 'styled-components';
import BoxDesign from '../../../components/BoxDesign';
import ProductSearchBox from './ProductSearchBox';

const ProductControlSearch = () => {
  return (
    <>
      <BoxDesign>
        <PageTitle>상품 관리</PageTitle>
      </BoxDesign>
      <BoxDesign style={{ padding: '30px' }}>
        <ProductSearchBox />
      </BoxDesign>
    </>
  );
};

export default ProductControlSearch;

const PageTitle = styled.h3`
  padding: 20px 25px;
  font-size: 26px;
`;
// ------------- 이 제 부 터 되 돌 리 기 ---------
