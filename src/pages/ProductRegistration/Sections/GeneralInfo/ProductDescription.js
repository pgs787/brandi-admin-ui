import React from 'react';
import SectionField from '../../../../components/SectionField';
import InputBox from '../../../../components/InputBox';

const ProductDescription = () => {
  return (
    <SectionField label="한줄 상품 설명">
      <InputBox placeholder="한줄 상품 설명을 입력해주세요" />
    </SectionField>
  );
};

export default ProductDescription;
