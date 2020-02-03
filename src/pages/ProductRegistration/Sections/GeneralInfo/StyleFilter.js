import React from 'react';
import SectionField from '../../../../components/SectionField';
import ToggleButtonGroup from '../../../../components/ToggleButtonGroup';

const StyleFilter = () => {
  return (
    <SectionField
      label="스타일필터"
      moreInfoText={[
        '베스트 탭, 카테고리 페이지 및 검색페이지의 필터에 적용되며, 선택하지 않으실 경우 색상필터를 사용한 검색결과에 노출되지 않습니다.',
        '1개 스타일만 선택 가능하며, 브랜드 및 뷰티&다이어트 카테고리 상품의 경우 선택하실 수 없습니다.',
      ]}
    >
      <ToggleButtonGroup
        options={[
          '선택안함',
          '심플베이직',
          '러블리',
          '페미닌',
          '캐주얼',
          '섹시글램',
        ]}
      />
    </SectionField>
  );
};

export default StyleFilter;
