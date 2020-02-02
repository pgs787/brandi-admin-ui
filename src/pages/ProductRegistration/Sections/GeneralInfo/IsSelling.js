import React from 'react';
import SectionField from '../../../../components/SectionField';
import ToggleButtonGroup from '../../../../components/ToggleButtonGroup';

const IsSelling = () => {
  return (
    <SectionField
      label="판매 여부"
      moreInfoText="미판매 선택시 앱에서 Sold Out으로 표시됩니다."
    >
      <ToggleButtonGroup options={['판매', '미판매']} />
    </SectionField>
  );
};

export default IsSelling;
