import React, { useState, useEffect } from 'react';
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
import { API_URL } from '../../../utils/callUrl';
import NoImage from '../../../images/no_image.png';
import axios from 'axios';

const DetailInfo = ({ setDetailImg, setDetailInfo, match, setLoading }) => {
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
  const [bgImage, setBgImage] = useState(NoImage);

  useEffect(() => {
    if (match.params.id) {
      setLoading(true);
      axios
        .get(`${API_URL}/seller/list-info-get/${match.params.id}`)
        .then(res => {
          console.log(res);
          const data = res.data.seller_info;
          if (data.single_line_intro) {
            setIntroduce(data.single_line_intro);
            setDetailInfo(data.single_line_intro, 'introduce');
          }
          if (data.detailed_intro) {
            setDetailIntro(data.detailed_intro);
            setDetailInfo(data.detailed_intro, 'detailIntro');
          }
          if (data.site_url) {
            setSite(data.site_url);
            setDetailInfo(data.site_url, 'site');
          }
          setDetailInfo(data.seller_representative[0].id, 'managerId');
          setDetailInfo(data.seller_representative[1].id, 'managerIdSecond');
          setDetailInfo(data.seller_representative[2].id, 'managerIdThird');

          if (data.seller_representative[0].name) {
            setName(data.seller_representative[0].name);
            setDetailInfo(data.seller_representative[0].name, 'managerName');
          }
          if (data.seller_representative[0].mobile_number) {
            setNumber(data.seller_representative[0].mobile_number);
            setDetailInfo(
              data.seller_representative[0].mobile_number,
              'managerNumber',
            );
          }
          if (data.seller_representative[0].email) {
            setMail(data.seller_representative[0].email);
            setDetailInfo(data.seller_representative[0].email, 'managerMail');
          }
          if (data.seller_representative[1]) {
            if (data.seller_representative[1].name) {
              setNameSecond(data.seller_representative[1].name);
              setDetailInfo(
                data.seller_representative[1].name,
                'managerNameSecond',
              );
            }
            if (data.seller_representative[1].mobile_number) {
              setNumberSecond(data.seller_representative[1].mobile_number);
              setDetailInfo(
                data.seller_representative[1].mobile_number,
                'managerNumberSecond',
              );
            }
            if (data.seller_representative[1].email) {
              setMailSecond(data.seller_representative[1].email);
              setDetailInfo(
                data.seller_representative[1].email,
                'managerMailSecond',
              );
            }
          }
          if (data.seller_representative[2]) {
            if (data.seller_representative[2].name) {
              setNameThird(data.seller_representative[2].name);
              setDetailInfo(
                data.seller_representative[2].name,
                'managerNameThird',
              );
            }
            if (data.seller_representative[2].mobile_number) {
              setNumberThird(data.seller_representative[2].mobile_number);
              setDetailInfo(
                data.seller_representative[2].mobile_number,
                'managerNumberThird',
              );
            }
            if (data.seller_representative[2].email) {
              setMailThird(data.seller_representative[2].email);
              setDetailInfo(
                data.seller_representative[2].email,
                'managerMailThird',
              );
            }
          }
          if (data.instagram_account) {
            setInstaId(data.instagram_account);
            setDetailInfo(data.instagram_account, 'instaId');
          }
          if (data.cs_phone_number) {
            setCsNumber(data.cs_phone_number);
            setDetailInfo(data.cs_phone_number, 'csNumber');
          }
          if (data.cs_kakao_account) {
            setKakaoId(data.cs_kakao_account);
            setDetailInfo(data.cs_kakao_account, 'kakaoId');
          }
          if (data.cs_yellow_account) {
            setYellowId(data.cs_yellow_account);
            setDetailInfo(data.cs_yellow_account, 'yellowId');
          }
        });
      setLoading(false);
    } else {
      setLoading(true);
      const token = localStorage.getItem('Login_token');
      axios
        .get(`${API_URL}/seller/info-get`, {
          headers: { Authorization: token },
        })
        .then(res => {
          console.log(res);
          const data = res.data.seller_info;
          if (data.single_line_intro) {
            setIntroduce(data.single_line_intro);
            setDetailInfo(data.single_line_intro, 'introduce');
          }
          if (data.detailed_intro) {
            setDetailIntro(data.detailed_intro);
            setDetailInfo(data.detailed_intro, 'detailIntro');
          }
          if (data.site_url) {
            setSite(data.site_url);
            setDetailInfo(data.site_url, 'site');
          }
          setDetailInfo(data.seller_representative[0].id, 'managerId');
          setDetailInfo(data.seller_representative[1].id, 'managerIdSecond');
          setDetailInfo(data.seller_representative[2].id, 'managerIdThird');

          if (data.seller_representative[0].name) {
            setName(data.seller_representative[0].name);
            setDetailInfo(data.seller_representative[0].name, 'managerName');
          }
          if (data.seller_representative[0].mobile_number) {
            setNumber(data.seller_representative[0].mobile_number);
            setDetailInfo(
              data.seller_representative[0].mobile_number,
              'managerNumber',
            );
          }
          if (data.seller_representative[0].email) {
            setMail(data.seller_representative[0].email);
            setDetailInfo(data.seller_representative[0].email, 'managerMail');
          }
          if (data.seller_representative[1]) {
            if (data.seller_representative[1].name) {
              setNameSecond(data.seller_representative[1].name);
              setDetailInfo(
                data.seller_representative[1].name,
                'managerNameSecond',
              );
            }
            if (data.seller_representative[1].mobile_number) {
              setNumberSecond(data.seller_representative[1].mobile_number);
              setDetailInfo(
                data.seller_representative[1].mobile_number,
                'managerNumberSecond',
              );
            }
            if (data.seller_representative[1].email) {
              setMailSecond(data.seller_representative[1].email);
              setDetailInfo(
                data.seller_representative[1].email,
                'managerMailSecond',
              );
            }
          }
          if (data.seller_representative[2]) {
            if (data.seller_representative[2].name) {
              setNameThird(data.seller_representative[2].name);
              setDetailInfo(
                data.seller_representative[2].name,
                'managerNameThird',
              );
            }
            if (data.seller_representative[2].mobile_number) {
              setNumberThird(data.seller_representative[2].mobile_number);
              setDetailInfo(
                data.seller_representative[2].mobile_number,
                'managerNumberThird',
              );
            }
            if (data.seller_representative[2].email) {
              setMailThird(data.seller_representative[2].email);
              setDetailInfo(
                data.seller_representative[2].email,
                'managerMailThird',
              );
            }
          }
          if (data.instagram_account) {
            setInstaId(data.instagram_account);
            setDetailInfo(data.instagram_account, 'instaId');
          }
          if (data.cs_phone_number) {
            setCsNumber(data.cs_phone_number);
            setDetailInfo(data.cs_phone_number, 'csNumber');
          }
          if (data.cs_kakao_account) {
            setKakaoId(data.cs_kakao_account);
            setDetailInfo(data.cs_kakao_account, 'kakaoId');
          }
          if (data.cs_yellow_account) {
            setYellowId(data.cs_yellow_account);
            setDetailInfo(data.cs_yellow_account, 'yellowId');
          }
        });
      setLoading(false);
    }
  }, []);

  const onChangeBgImage = e => {
    if (!e.target.files.length) {
      return;
    }

    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('upload', file);

    console.log(e.target.files);
    fetch(`${API_URL}/seller/image-upload`, {
      method: 'POST',
      body: formData,
    })
      .then(res => res.json())
      .then(res => {
        setDetailImg(res.url, 'backgroundImg');
        setBgImage(res.url);
      })
      .catch(err => console.log(err));
  };

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
            repImage={bgImage}
            onChange={onChangeBgImage}
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
