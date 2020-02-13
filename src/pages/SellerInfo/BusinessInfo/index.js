import React, { useState } from 'react';
import styled from 'styled-components';
import BoxDesign from '../../../components/BoxDesign';
import SectionTitle from 'components/SectionTitle';
import SectionBody from 'components/SectionBody';
import InfomationInput from '../GeneralInfo/InfomationInput';
import ImgUpload from '../GeneralInfo/ImgUpload';

const BusinessInfo = () => {
  const [showContent, setShowContent] = useState(true);

  const onClick = () => {
    setShowContent(!showContent);
  };

  return (
    <BoxDesign>
      <ClickableHeader onClick={onClick}>
        <SectionTitle title="사업자 정보" />
      </ClickableHeader>
      <BodyWrapper showContent={showContent}>
        <SectionBody>
          <InfomationInput name="대표자명" isRequired />
          <InfomationInput name="사업자명" isRequired />
          <InfomationInput name="사업자번호" isRequired />
          <ImgUpload
            isRequired
            label="사업자등록증"
            text="사업자등록증 확장자는 jpg, jpeg 만 가능합니다."
          />
          <InfomationInput name="통신판매업번호" isRequired />
          <ImgUpload
            isRequired
            label="통신판매업신고필증"
            text=" 통신판매업신고필증 확장자는 jpg, jpeg 만 가능합니다."
          />
        </SectionBody>
      </BodyWrapper>
    </BoxDesign>
  );
};

export default BusinessInfo;

const ClickableHeader = styled.div`
  cursor: pointer;
`;

const BodyWrapper = styled.div`
  ${props => (props.showContent ? '' : 'display: none')}
`;
