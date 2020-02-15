import React, { useState, useReducer } from 'react';
import styled from 'styled-components';
import BoxDesign from 'components/BoxDesign';
import SectionTitle from 'components/SectionTitle';
import SectionBody from 'components/SectionBody';
import ImgUpload from './ImgUpload';
import SellerStatus from './SellerStatus';
import SellerProperty from './SellerProperty';
import InfomationInput from './InfomationInput';
import SellerAccount from './SellerAccount';
import { connect } from 'react-redux';
import { setSellerName, setSellerImg } from 'store/actions';

const reducer = (state, action, status) => {
  console.log(action);
  console.log(status);
  return {
    ...state,
  };
};

const GeneralInfo = ({ setSellerName, setSellerImg }) => {
  const [showContent, setShowContent] = useState(true);
  const [sellerNameKr, setSellerNameKr] = useState('');
  const [sellerNameEn, setSellerNameEn] = useState('');

  const onClick = () => {
    setShowContent(!showContent);
  };

  const onChange = (e, status) => {
    setSellerName(e.target.value, status);
  };

  return (
    <BoxDesign>
      <ClickableHeader onClick={onClick}>
        <SectionTitle title="기본 정보" />
      </ClickableHeader>
      <BodyWrapper showContent={showContent}>
        <SectionBody>
          <ImgUpload
            id="profile"
            isRequired
            label="셀러 프로필"
            text="셀러 프로필 확장자는 jpg, jpeg만 가능합니다."
          />
          <SellerStatus />
          <SellerProperty />
          <InfomationInput
            value={sellerNameKr}
            onChange={e => {
              setSellerNameKr(e.target.value);
              onChange(e, 'kr');
            }}
            name="셀러 한글명"
          />
          <InfomationInput
            value={sellerNameEn}
            onChange={e => {
              setSellerNameEn(e.target.value);
              onChange(e, 'en');
            }}
            name="셀러 영문명"
          />
          <SellerAccount />
        </SectionBody>
      </BodyWrapper>
    </BoxDesign>
  );
};

export default connect(null, { setSellerName, setSellerImg })(GeneralInfo);

const ClickableHeader = styled.div`
  cursor: pointer;
`;

const BodyWrapper = styled.div`
  ${props => (props.showContent ? '' : 'display: none')}
`;
