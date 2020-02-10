import React from 'react';
import SectionField from 'components/SectionField';
import ToggleButtonGroup from 'components/ToggleButtonGroup';
import { connect } from 'react-redux';
import { setDisplayStatus } from 'store/actions';

const availableStatus = [
  { value: true, label: '진열' },
  { value: false, label: '미진열' },
];

const IsDisplaying = ({ setDisplayStatus }) => {
  const onClick = value => {
    setDisplayStatus(value);
  };

  return (
    <SectionField
      label="진열 여부"
      moreInfoText="미진열 선택시 앱에서 노출되지 않습니다."
    >
      <ToggleButtonGroup
        options={availableStatus}
        onClick={onClick}
        defaultVal={true}
      />
    </SectionField>
  );
};

export default connect(null, { setDisplayStatus })(IsDisplaying);
