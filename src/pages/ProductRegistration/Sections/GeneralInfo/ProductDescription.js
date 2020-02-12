import React from 'react';
import SectionField from 'components/SectionField';
import InputBox from 'components/InputBox';
import { connect } from 'react-redux';
import { setProductDesc } from 'store/actions';

const ProductDescription = ({ setProductDesc }) => {
  const onChange = value => {
    if (value.length >= 500) {
      alert('한줄 상품 설명은 500자 이내로 작성해주세요.');
      return;
    }
    setProductDesc(value);
  };

  return (
    <SectionField label="한줄 상품 설명">
      <InputBox
        onChange={onChange}
        placeholder="한줄 상품 설명을 입력해주세요"
      />
    </SectionField>
  );
};

export default connect(null, { setProductDesc })(ProductDescription);
