import React from 'react';
import BoxDesign from '../../../../components/BoxDesign';
import SectionBody from '../../../../components/SectionBody';
import SectionTitle from '../../../../components/SectionTitle';
import OptionSetting from './OptionSetting';
import OptionInformation from './OptionInformation';

const OptionInfo = () => {
  return (
    <BoxDesign>
      <SectionTitle title="옵션 정보" />
      <SectionBody>
        <OptionSetting></OptionSetting>
        <OptionInformation></OptionInformation>
      </SectionBody>
    </BoxDesign>
  );
};
export default OptionInfo;
