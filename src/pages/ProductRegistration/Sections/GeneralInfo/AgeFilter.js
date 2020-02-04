import React from 'react';
import SectionField from '../../../../components/SectionField';
import ToggleButtonGroup from '../../../../components/ToggleButtonGroup';

const AgeFilter = () => {
  return (
    <SectionField
      label="연령필터"
      moreInfoText={[
        '베스트 탭, 카테고리 페이지 및 검색페이지의 필터에 적용되며, 셀러 정보 > 셀러태그정보의 연령대가 자동으로 적용됩니다.',
        '브랜드 및 뷰티&다이어트 카테고리 상품의 경우 적용되지 않습니다.',
        "해당 정보는 상품단위로 적용이 불가능하며(셀러 단위로만 가능), 수정을 원하실 경우 카카오 플러스친구 '브랜디셀러'로 연락 부탁드립니다.",
      ]}
      isRequired
    >
      <ToggleButtonGroup options={['10대', '20대', '30대', '40대', '50대']} />
    </SectionField>
  );
};

export default AgeFilter;
