import React, { useState } from 'react';
import styled from 'styled-components';
import BoxDesign from 'components/BoxDesign';
import SectionTitle from 'components/SectionTitle';
import SectionBody from 'components/SectionBody';
import ImgUpload from '../GeneralInfo/ImgUpload';
import InfomationInput from '../GeneralInfo/InfomationInput';
import InformationTextarea from 'components/InformationTextarea';
import InfoThreeInput from 'components/InfoThreeInput';
import { connect } from 'react-redux';
import { setDetailInfo, setDetailImg } from 'store/actions';

const DetailInfo = ({ setDetailImg, setDetailInfo }) => {
  const [showContent, setShowContent] = useState(true);
  const [introduce, setIntroduce] = useState('');
  const [detailIntro, setDetailIntro] = useState('');
  const [site, setSite] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [mail, setMail] = useState('');
  const [nameSecond, setNameSecond] = useState('');
  const [numberSecond, setNumberSecond] = useState('');
  const [mailSecond, setMailSecond] = useState('');
  const [nameThird, setNameThird] = useState('');
  const [numberThird, setNumberThird] = useState('');
  const [mailThird, setMailThird] = useState('');
  const [instaId, setInstaId] = useState('');
  const [csNumber, setCsNumber] = useState('');
  const [kakaoId, setKakaoId] = useState('');
  const [yellowId, setYellowId] = useState('');

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
            id="background"
            label="셀러 배경이미지"
            text={[
              '브랜디 앱과 웹 사이트의 셀러 페이지에 보여질 배경이미지입니다.',
              '셀러 프로필 확장자는 jpg, jpeg만 가능합니다.',
            ]}
          />
          <InfomationInput
            value={introduce}
            onChange={e => {
              setIntroduce(e.target.value);
              setDetailInfo(e.target.value, 'introduce');
            }}
            name="셀러 한줄 소개"
            isRequired
          />
          <InformationTextarea
            value={detailIntro}
            onChange={e => {
              setDetailIntro(e.target.value);
              setDetailInfo(e.target.value, 'detailIntro');
            }}
            name="셀러 상세 소개"
            text="셀러 상세 소개 글은 최소10자 이상 입니다."
            width="325"
            placeholder="셀러 상세 소개"
          />
          <InfomationInput
            value={site}
            onChange={e => {
              setSite(e.target.value);
              setDetailInfo(e.target.value, 'site');
            }}
            name="사이트 URL"
            isRequired
          />
          <InfoThreeInput
            nameValue={name}
            numberValue={number}
            mailValue={mail}
            nameSecondValue={nameSecond}
            numberSecondValue={numberSecond}
            mailSecondValue={mailSecond}
            nameThirdValue={nameThird}
            numberThirdValue={numberThird}
            mailThirdValue={mailThird}
            deleteSecName={setNameSecond}
            deleteSecNum={setNumberSecond}
            deleteSecMail={setMailSecond}
            deleteThrName={setNameThird}
            deleteThrNum={setNumberThird}
            deleteThrMail={setMailThird}
            changeName={e => {
              setName(e.target.value);
              setDetailInfo(e.target.value, 'managerName');
            }}
            changeNumber={e => {
              setNumber(e.target.value);
              setDetailInfo(e.target.value, 'managerNumber');
            }}
            changeMail={e => {
              setMail(e.target.value);
              setDetailInfo(e.target.value, 'managerMail');
            }}
            changeNameSecond={e => {
              {
                setNameSecond(e.target.value);
                setDetailInfo(e.target.value, 'managerNameSecond');
              }
            }}
            changeNumberSecond={e => {
              {
                setNumberSecond(e.target.value);
                setDetailInfo(e.target.value, 'managerNumberSecond');
              }
            }}
            changeMailSecond={e => {
              {
                setMailSecond(e.target.value);
                setDetailInfo(e.target.value, 'managerMailSecond');
              }
            }}
            changeNameThird={e => {
              {
                setNameThird(e.target.value);
                setDetailInfo(e.target.value, 'managerNameThird');
              }
            }}
            changeNumberThird={e => {
              setNumberThird(e.target.value);
              setDetailInfo(e.target.value, 'managerNumberThird');
            }}
            changeMailThird={e => {
              setMailThird(e.target.value);
              setDetailInfo(e.target.value, 'managerMailThird');
            }}
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
          <InfomationInput
            value={instaId}
            onChange={e => {
              setInstaId(e.target.value);
              setDetailInfo(e.target.value, 'instaId');
            }}
            name="인스타그램 아이디"
          />
          <InfoThreeInput
            csNumberValue={csNumber}
            kakaoIdValue={kakaoId}
            yellowIdValue={yellowId}
            changeCsNumber={e => {
              setCsNumber(e.target.value);
              setDetailInfo(e.target.value, 'csNumber');
            }}
            changeKakao={e => {
              setKakaoId(e.target.value);
              setDetailInfo(e.target.value, 'kakaoId');
            }}
            changeYellow={e => {
              setYellowId(e.target.value);
              setDetailInfo(e.target.value, 'yellowId');
            }}
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

export default connect(null, { setDetailInfo, setDetailImg })(DetailInfo);

const ClickableHeader = styled.div`
  cursor: pointer;
`;

const BodyWrapper = styled.div`
  ${props => (props.showContent ? '' : 'display: none')}
`;
