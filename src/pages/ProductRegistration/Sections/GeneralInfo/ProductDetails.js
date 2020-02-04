import React from 'react';
import SectionField from '../../../../components/SectionField';
import ToggleButtonGroup from '../../../../components/ToggleButtonGroup';

const ProductDetails = () => {
  return (
    <SectionField
      label="상세 상품 정보"
      moreInfoText="상품상세이미지의 권장 사이즈는 가로사이즈 1000px 이상입니다."
      isRequired
    >
      <ToggleButtonGroup options={['간편 업로드', '에디터 사용 ']} />
    </SectionField>
  );
};

export default ProductDetails;
