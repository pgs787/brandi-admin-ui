import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Select from 'react-select';
import SectionField from 'components/SectionField';
import { data } from '../../../../../config';
import { connect } from 'react-redux';
import { setFirstCategory, setSecondCategory } from 'store/actions';
import { customStylesCategories } from 'styles/customStyles';
import { server_url } from '../../../../../config';

const Categories = ({ setFirstCategory, setSecondCategory }) => {
  const [selectedOptionFirst, setSelectedOptionFirst] = useState('');
  const [selectedOptionSecond, setSelectedOptionSecond] = useState('');
  const [firstCategoryData, setFirstCategoryData] = useState('');
  const [secondCategoryData, setSecondCategoryData] = useState([
    {
      value: '1차 카테고리를 선택해주세요.',
      label: '1차 카테고리를 선택해주세요.',
    },
  ]);

  // 1차 카테고리 데이터 호출 API
  useEffect(() => {
    fetch(`${server_url}/first_category`)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        setFirstCategoryData(
          res.map(element => {
            return { value: element.id, label: element.name };
          }),
        );
      })
      .catch(err => console.log(err));
  }, []);

  const onChangeFirst = value => {
    // API 호출: 2차 카테고리
    console.log(value);
    if (!selectedOptionFirst) {
      fetch(`${server_url}/second_category?first_id=${value.value}`)
        .then(res => res.json())
        .then(res => {
          console.log(res);
          setSecondCategoryData(
            res.map(element => {
              return { value: element.id, label: element.name };
            }),
          );
        })
        .catch(err => console.log(err));
    }
    setSelectedOptionFirst(value.value);
    setFirstCategory(value.label);
  };

  const onChangeSecond = value => {
    console.log(value);
    setSelectedOptionSecond(value.value);
    setSecondCategory(value.label);
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
            options={firstCategoryData}
            styles={customStylesCategories}
            placeholder="1차 카테고리를 선택해주세요"
          />
        </CategoryBox>
        <CategoryBox>
          <CategoryLabel>2차 카테고리</CategoryLabel>
          <Select
            onChange={onChangeSecond}
            options={secondCategoryData}
            styles={customStylesCategories}
            placeholder="2차 카테고리부터 선택해주세요"
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
