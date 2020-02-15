import React, { useState } from 'react';
import styled from 'styled-components';
import BoxDesign from '../../../components/BoxDesign';
import SectionTitle from 'components/SectionTitle';
import SectionBody from 'components/SectionBody';
import InfomationInput from '../GeneralInfo/InfomationInput';
import ImgUpload from '../GeneralInfo/ImgUpload';
import { connect } from 'react-redux';
import { setBusinessInfo, setBusinessImg } from 'store/actions';

const BusinessInfo = ({ setBusinessImg, setBusinessInfo }) => {
  const [showContent, setShowContent] = useState(true);
  const [ceoName, setCeoName] = useState('');
  const [sellerName, setSellerName] = useState('');
  const [businessNumber, setBusinessNumber] = useState('');
  const [correspondNumber, setCorrespondNumber] = useState('');

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
          <InfomationInput
            value={ceoName}
            onChange={e => {
              setCeoName(e.target.value);
              setBusinessInfo(e.target.value, 'ceoName');
            }}
            name="대표자명"
            isRequired
          />
          <InfomationInput
            value={sellerName}
            onChange={e => {
              setSellerName(e.target.value);
              setBusinessInfo(e.target.value, 'sellerName');
            }}
            name="사업자명"
            isRequired
          />
          <InfomationInput
            value={businessNumber}
            onChange={e => {
              setBusinessNumber(e.target.value);
              setBusinessInfo(e.target.value, 'businessNumber');
            }}
            name="사업자번호"
            isRequired
          />
          <ImgUpload
            id="regist"
            isRequired
            label="사업자등록증"
            text="사업자등록증 확장자는 jpg, jpeg 만 가능합니다."
          />
          <InfomationInput
            value={correspondNumber}
            onChange={e => {
              setCorrespondNumber(e.target.value);
              setBusinessInfo(e.target.value, 'correspondNumber');
            }}
            name="통신판매업번호"
            isRequired
          />
          <ImgUpload
            id="selling"
            isRequired
            label="통신판매업신고필증"
            text=" 통신판매업신고필증 확장자는 jpg, jpeg 만 가능합니다."
          />
        </SectionBody>
      </BodyWrapper>
    </BoxDesign>
  );
};

export default connect(null, { setBusinessImg, setBusinessInfo })(BusinessInfo);

const ClickableHeader = styled.div`
  cursor: pointer;
`;

const BodyWrapper = styled.div`
  ${props => (props.showContent ? '' : 'display: none')}
`;
