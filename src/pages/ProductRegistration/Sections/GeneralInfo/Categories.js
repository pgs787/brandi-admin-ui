import React from 'react';
import styled from 'styled-components';
import SectionField from '../../../../components/SectionField';
import SelectBox from '../../../../components/SelectBox';

const Categories = () => {
  return (
    <SectionField
      label="카테고리"
      moreInfoText="카테고리 변경 시 입력한 실측 사이즈 정보는 초기화 됩니다."
    >
      <CategoriesContentWrapper>
        <CategoryBox>
          <CategoryLabel>1차 카테고리</CategoryLabel>
          <SelectBox>
            <option>선택</option>
            <option>option 1</option>
            <option>option 2</option>
            <option>option 3</option>
          </SelectBox>
        </CategoryBox>
        <CategoryBox>
          <CategoryLabel>2차 카테고리</CategoryLabel>
          <SelectBox>
            <option>선택</option>
            <option>option 1</option>
            <option>option 2</option>
            <option>option 3</option>
          </SelectBox>
        </CategoryBox>
      </CategoriesContentWrapper>
    </SectionField>
  );
};

export default Categories;

// Styled Components

const CategoriesContentWrapper = styled.div`
  display: flex;
`;

const CategoryBox = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  margin-right: 10px;
`;

const CategoryLabel = styled.label`
  margin-bottom: 10px;
`;
