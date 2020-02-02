import React from 'react';
import SectionField from '../../../../components/SectionField';
import InputBox from '../../../../components/InputBox';

const ProductName = () => {
  return (
    <SectionField
      label="상품명"
      moreInfoText={
        '상품명에는 쌍따옴표(") 또는 홑따옴표(\')를 포함할 수 없습니다.'
      }
    >
      <InputBox placeholder="상품명을 입력해주세요" />
    </SectionField>
  );
};

export default ProductName;
