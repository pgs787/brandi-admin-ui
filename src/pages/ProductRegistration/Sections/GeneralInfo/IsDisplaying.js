import React from 'react';
import SectionField from '../../../../components/SectionField';
import ToggleButtonGroup from '../../../../components/ToggleButtonGroup';

const IsDisplaying = () => {
  return (
    <SectionField
      label="진열 여부"
      moreInfoText="미진열 선택시 앱에서 노출되지 않습니다."
    >
      <ToggleButtonGroup options={['진열', '미진열']} />
    </SectionField>
  );
};

export default IsDisplaying;
