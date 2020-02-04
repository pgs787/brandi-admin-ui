import React, { useState } from 'react';
import styled from 'styled-components';
import SectionField from '../../../../components/SectionField';
import { connect } from 'react-redux';
import { setProductName } from '../../../../redux/actions';

const ProductName = ({ setProductName }) => {
  const [name, setName] = useState('');

  const onChange = e => {
    setName(e.target.value);
    setProductName(e.target.value);
  };

  return (
    <SectionField
      label="상품명"
      moreInfoText={
        '상품명에는 쌍따옴표(") 또는 홑따옴표(\')를 포함할 수 없습니다.'
      }
      isRequired
    >
      <InputTag
        value={name}
        onChange={onChange}
        placeholder="상품명을 입력해주세요"
      />
    </SectionField>
  );
};

export default connect(null, { setProductName })(ProductName);

// Styled Components

const InputTag = styled.input`
  width: 100%;
  background-color: #f8f9fd;
  &:focus {
    border-color: #999999;
    background-color: white;
  }
`;
