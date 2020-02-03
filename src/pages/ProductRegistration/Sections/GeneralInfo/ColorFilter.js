import React from 'react';
import SectionField from '../../../../components/SectionField';
import ToggleButtonGroup from '../../../../components/ToggleButtonGroup';

const ColorFilter = () => {
  return (
    <SectionField
      label="색상필터(썸네일 이미지)"
      moreInfoText={[
        '베스트 탭, 카테고리 페이지 및 검색페이지의 필터에 적용되며, 선택하지 않으실 경우 색상필터를 사용한 검색결과에 노출되지 않습니다.',
        '썸네일 이미지의 1개 색상만 선택 가능하며, 뷰티 및 다이어트 카테고리의 상품의 경우 선택하실 수 없습니다.',
      ]}
    >
      <ToggleButtonGroup options={['사용 안함', '사용함']} />
    </SectionField>
  );
};

export default ColorFilter;
