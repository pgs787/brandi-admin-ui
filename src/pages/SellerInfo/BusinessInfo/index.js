import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import BoxDesign from '../../../components/BoxDesign';
import SectionTitle from 'components/SectionTitle';
import SectionBody from 'components/SectionBody';
import InfomationInput from '../GeneralInfo/InfomationInput';
import ImgUpload from '../GeneralInfo/ImgUpload';
import { connect } from 'react-redux';
import { setBusinessInfo, setBusinessImg } from 'store/actions';
import axios from 'axios';
import { API_URL } from '../../../utils/callUrl';
import NoImage from '../../../images/no_image.png';

const BusinessInfo = ({ setBusinessImg, setBusinessInfo }) => {
  const [showContent, setShowContent] = useState(true);
  const [ceoName, setCeoName] = useState('');
  const [sellerName, setSellerName] = useState('');
  const [businessNumber, setBusinessNumber] = useState('');
  const [correspondNumber, setCorrespondNumber] = useState('');
  const [registImg, setRegistImg] = useState(NoImage);
  const [sellingImg, setSellingImg] = useState(NoImage);

  useEffect(() => {
    const token = localStorage.getItem('Login_token');
    axios
      .get(`${API_URL}/seller/info-get`, { headers: { Authorization: token } })
      .then(res => {
        const data = res.data.seller_info;
        if (data.ceo_name) {
          setCeoName(data.ceo_name);
          setBusinessInfo(data.ceo_name, 'ceoName');
        }
        if (data.company_name) {
          setSellerName(data.company_name);
          setBusinessInfo(data.company_name, 'sellerName');
        }
        if (data.company_code) {
          setBusinessNumber(data.company_code);
          setBusinessInfo(data.company_code, 'businessNumber');
        }
        if (data.mail_order_code) {
          setCorrespondNumber(data.mail_order_code);
          setBusinessInfo(data.mail_order_code, 'correspondNumber');
        }
        if (data.company_certi_image) {
          setRegistImg(data.company_certi_image);
          setBusinessImg(data.company_certi_image, 'registImg');
        }
        if (data.mail_order_image) {
          setSellingImg(data.mail_order_image);
          setBusinessImg(data.mail_order_image, 'sellingImg');
        }
      });
  }, []);

  const onChangeRegistImg = e => {
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
        setRegistImg(res.url);
        setBusinessImg(res.url, 'registImg');
      })
      .catch(err => console.log(err));
  };

  const onChangeSellingImg = e => {
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
        setSellingImg(res.url);
        setBusinessImg(res.url, 'sellingImg');
      })
      .catch(err => console.log(err));
  };

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
            repImage={registImg}
            onChange={onChangeRegistImg}
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
            repImage={sellingImg}
            onChange={onChangeSellingImg}
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
