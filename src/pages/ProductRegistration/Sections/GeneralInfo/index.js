import React from 'react';
import BoxDesign from '../../../../components/BoxDesign';
import SectionTitle from '../../../../components/SectionTitle';
import SectionBody from '../../../../components/SectionBody';
import SelectSeller from './SelectSeller';
import IsSelling from './IsSelling';
import IsDisplaying from './IsDisplaying';
import Categories from './Categories';
import ProvisionNotice from './ProvisionNotice';
import ProductName from './ProductName';
import ProductDescription from './ProductDescription';
import ImageUpload from './ImageUpload';
import ColorFilter from './ColorFilter';
import StyleFilter from './StyleFilter';
import AgeFilter from './AgeFilter';
import ProductDetails from './ProductDetails';
import YoutubeLink from './YoutubeLink';

const GeneralInfo = () => {
  return (
    <BoxDesign>
      <SectionTitle title="기본 정보" />
      <SectionBody>
        <SelectSeller />
        <IsSelling />
        <IsDisplaying />
        <Categories />
        <ProvisionNotice />
        <ProductName />
        <ProductDescription />
        <ImageUpload />
        <ColorFilter />
        <StyleFilter />
        <AgeFilter />
        <ProductDetails />
        <YoutubeLink />
      </SectionBody>
    </BoxDesign>
  );
};

export default GeneralInfo;
