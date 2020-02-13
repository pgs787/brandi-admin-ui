import React, { useState } from 'react';
import styled from 'styled-components';
import BoxDesign from 'components/BoxDesign';
import SectionTitle from 'components/SectionTitle';
import SectionBody from 'components/SectionBody';
import ImgUpload from '../GeneralInfo/ImgUpload';
import InfomationInput from '../GeneralInfo/InfomationInput';
import InformationTextarea from 'components/InformationTextarea';
import InfoThreeInput from 'components/InfoThreeInput';

const DetailInfo = () => {
  const [showContent, setShowContent] = useState(true);

  const onClick = () => {
    setShowContent(!showContent);
  };

  return (
    <BoxDesign>
      <ClickableHeader onClick={onClick}>
        <SectionTitle title="상세 정보" />
      </ClickableHeader>
      <BodyWrapper showContent={showContent}>
        <SectionBody>
          <ImgUpload
            label="셀러 배경이미지"
            text={[
              '브랜디 앱과 웹 사이트의 셀러 페이지에 보여질 배경이미지입니다.',
              '셀러 프로필 확장자는 jpg, jpeg만 가능합니다.',
            ]}
          />
          <InfomationInput name="셀러 한줄 소개" isRequired />
          <InformationTextarea
            name="셀러 상새 소개"
            text="셀러 상세 소개 글은 최소10자 이상 입니다."
            width="325"
            placeholder="셀러 상세 소개"
          />
          <InfomationInput name="사이트 URL" isRequired />
          <InfoThreeInput
            number="3"
            name="담당자 정보"
            isRequired
            firstImg="\f007"
            secondImg="\f095"
            thirdImg="\f003"
            firstPlaceholder="담당자 명"
            secondPlaceholder="담당자 핸드폰번호"
            thirdPlaceholder="담당자 이메일"
            button
          />
          <InfomationInput name="인스타그램 아이디" />
          <InfoThreeInput
            number="1"
            name="고객센터"
            isRequired
            firstImg="\f095"
            secondImg="\f0e5"
            thirdImg="\f075"
            firstPlaceholder="고객센터 전화번호"
            secondPlaceholder="카카오 아이디"
            thirdPlaceholder="옐로우 아이디"
          />
        </SectionBody>
      </BodyWrapper>
    </BoxDesign>
  );
};

export default DetailInfo;

const ClickableHeader = styled.div`
  cursor: pointer;
`;

const BodyWrapper = styled.div`
  ${props => (props.showContent ? '' : 'display: none')}
`;
