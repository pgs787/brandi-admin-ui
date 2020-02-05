import React from 'react';
import SectionField from 'components/SectionField';
import ToggleButtonGroup from 'components/ToggleButtonGroup';
import { data } from '../../../../../config';
import { connect } from 'react-redux';
import { setStyleFilter } from 'store/actions';

// 버튼 옵션
const availableOptions = data.generalInfo.styleFilter;

const StyleFilter = ({ setStyleFilter }) => {
  // 버튼 선택
  const onClick = value => {
    // '선택안함' 선택 시 스토어 상태 초기화 아니면 값 저장
    !value ? setStyleFilter(null) : setStyleFilter(value);
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
      <ToggleButtonGroup
        options={availableOptions}
        onClick={onClick}
        defaultVal={false}
      />
    </SectionField>
  );
};

export default connect(null, { setStyleFilter })(StyleFilter);
