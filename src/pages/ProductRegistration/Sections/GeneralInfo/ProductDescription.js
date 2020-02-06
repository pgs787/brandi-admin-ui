import React, { useState } from 'react';
import styled from 'styled-components';
import SectionField from 'components/SectionField';
import { connect } from 'react-redux';
import { setProductDesc } from '../../../../redux/actions';

const ProductDescription = ({ setProductDesc }) => {
  const [desc, setDesc] = useState('');

  const onChange = e => {
    setDesc(e.target.value);
    setProductDesc(e.target.value);
  };

  return (
    <SectionField label="한줄 상품 설명">
      <InputTag
        value={desc}
        onChange={onChange}
        placeholder="상품명을 입력해주세요"
      />
    </SectionField>
  );
};

export default connect(null, { setProductDesc })(ProductDescription);

// Styled Components

const InputTag = styled.input`
  width: 100%;
  background-color: #f8f9fd;
  &:focus {
    border-color: #999999;
    background-color: white;
  }
`;
