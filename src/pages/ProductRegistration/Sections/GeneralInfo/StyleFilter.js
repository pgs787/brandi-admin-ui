import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import SectionField from '../../../../components/SectionField';
import { data } from '../../../../../config';
import { connect } from 'react-redux';
import { setStyleFilter } from '../../../../redux/actions';

const options = data.generalInfo.styleFilter;

const StyleFilter = ({ setStyleFilter }) => {
  const [activeId, setActiveId] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');

  const onClick = id => {
    setActiveId(id);
    setSelectedOption(options[id].value);

    id === 0 ? setStyleFilter('') : setStyleFilter(options[id].value);
  };

  return (
    <SectionField
      label="스타일필터"
      moreInfoText={[
        '베스트 탭, 카테고리 페이지 및 검색페이지의 필터에 적용되며, 선택하지 않으실 경우 색상필터를 사용한 검색결과에 노출되지 않습니다.',
        '1개 스타일만 선택 가능하며, 브랜드 및 뷰티&다이어트 카테고리 상품의 경우 선택하실 수 없습니다.',
      ]}
      isRequired
    >
      <ButtonGroupWrapper>
        {options.map((option, idx) => (
          <OptionButton
            key={idx}
            onClick={() => onClick(idx)}
            isActive={activeId === idx}
          >
            {option.value}
          </OptionButton>
        ))}
      </ButtonGroupWrapper>
    </SectionField>
  );
};

export default connect(null, { setStyleFilter })(StyleFilter);

// Styled Components
const ButtonGroupWrapper = styled.div``;

const OptionButton = styled.button`
  border: 1px solid #ddd;
  width: 140px;
  padding: 8px 20px;
  font-size: 13px;
  color: #767a83;
  ${props =>
    props.isActive &&
    css`
      color: white;
      background-color: #36363a;
      border: 1px solid #36363a;
    `}
`;
