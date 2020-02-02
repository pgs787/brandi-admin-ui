import React from 'react';
import BoxDesign from '../../../../components/BoxDesign';
import SectionTitle from '../../../../components/SectionTitle';
import SectionBody from '../../../../components/SectionBody';
import IsSelling from './IsSelling';
import IsDisplaying from './IsDisplaying';
import Categories from './Categories';
import ProvisionNotice from './ProvisionNotice';

const GeneralInfo = () => {
  return (
    <BoxDesign>
      <SectionTitle title="기본 정보" />
      <SectionBody>
        <IsSelling />
        <IsDisplaying />
        <Categories />
        <ProvisionNotice />
      </SectionBody>
    </BoxDesign>
  );
};

export default GeneralInfo;
