import React from 'react';
import SectionField from 'components/SectionField';
import ToggleButtonGroup from 'components/ToggleButtonGroup';
import { connect } from 'react-redux';
import { setSellStatus } from 'store/actions';

const availableStatus = [
  { value: true, label: '판매' },
  { value: false, label: '미판매' },
];

const IsSelling = ({ setSellStatus }) => {
  const onClick = value => {
    setSellStatus(value);
  };

  return (
    <SectionField
      label="판매 여부"
      moreInfoText="미판매 선택시 앱에서 Sold Out으로 표시됩니다."
    >
      <ToggleButtonGroup
        options={availableStatus}
        onClick={onClick}
        defaultVal={true}
      />
    </SectionField>
  );
};

const mapStateToProps = state => {
  return {
    sellingStatus: state.sellingStatus,
  };
};

export default connect(mapStateToProps, { setSellStatus })(IsSelling);
