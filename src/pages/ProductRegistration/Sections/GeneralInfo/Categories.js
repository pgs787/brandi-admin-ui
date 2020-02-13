import React, { useState } from 'react';
import styled from 'styled-components';
import Select from 'react-select';
import SectionField from 'components/SectionField';
import { data } from '../../../../../config';
import { connect } from 'react-redux';
import { setFirstCategory, setSecondCategory } from 'store/actions';
import { customStylesCategories } from 'styles/customStyles';

const firstCategory = data.generalInfo.categories.firstCategory;
const secondCategory = data.generalInfo.categories.secondCategory;

const Categories = ({ setFirstCategory, setSecondCategory }) => {
  const [selectedOptionFirst, setSelectedOptionFirst] = useState(null);
  const [selectedOptionSecond, setSelectedOptionSecond] = useState(null);

  const onChangeFirst = ({ value }) => {
    setSelectedOptionFirst(value);
    setFirstCategory(value);

    // API 호출: 2차 카테고리
  };

  const onChangeSecond = ({ value }) => {
    setSelectedOptionSecond(value);
    setSecondCategory(value);
  };

  return (
    <SectionField
      label="카테고리"
      moreInfoText="카테고리 변경 시 입력한 실측 사이즈 정보는 초기화 됩니다."
      isRequired
    >
      <CategoriesContentWrapper>
        <CategoryBox>
          <CategoryLabel>1차 카테고리</CategoryLabel>
          <Select
            onChange={onChangeFirst}
            options={firstCategory}
            styles={customStylesCategories}
            placeholder="1차 카테고리를 선택해주세요"
          />
        </CategoryBox>
        <CategoryBox>
          <CategoryLabel>2차 카테고리</CategoryLabel>
          <Select
            onChange={onChangeSecond}
            options={secondCategory}
            styles={customStylesCategories}
            placeholder="1차 카테고리부터 선택해주세요"
          />
        </CategoryBox>
      </CategoriesContentWrapper>
    </SectionField>
  );
};

export default connect(null, { setFirstCategory, setSecondCategory })(
  Categories,
);

// Styled Components

const CategoriesContentWrapper = styled.div`
  display: flex;
`;

const CategoryBox = styled.div`
  width: 240px;
  display: flex;
  flex-direction: column;
  margin-right: 10px;
`;

const CategoryLabel = styled.label`
  margin-bottom: 10px;
`;
