import React, { useState } from 'react';
import styled from 'styled-components';
import BoxDesign from 'components/BoxDesign';
import SectionTitle from 'components/SectionTitle';
import SectionBody from 'components/SectionBody';
import ImgUpload from './ImgUpload';
import SellerStatus from './SellerStatus';
import SellerProperty from './SellerProperty';
import InfomationInput from './InfomationInput';
import SellerAccount from './SellerAccount';

const GeneralInfo = () => {
  const [showContent, setShowContent] = useState(true);

  const onClick = () => {
    setShowContent(!showContent);
  };

  return (
    <BoxDesign>
      <ClickableHeader onClick={onClick}>
        <SectionTitle title="기본 정보" />
      </ClickableHeader>
      <BodyWrapper showContent={showContent}>
        <SectionBody>
          <ImgUpload
            isRequired
            label="셀러 프로필"
            text="셀러 프로필 확장자는 jpg, jpeg만 가능합니다."
          />
          <SellerStatus />
          <SellerProperty />
          <InfomationInput name="셀러 한글명" />
          <InfomationInput name="셀러 영문명" />
          <SellerAccount />
        </SectionBody>
      </BodyWrapper>
    </BoxDesign>
  );
};

export default GeneralInfo;

const ClickableHeader = styled.div`
  cursor: pointer;
`;

const BodyWrapper = styled.div`
  ${props => (props.showContent ? '' : 'display: none')}
`;
