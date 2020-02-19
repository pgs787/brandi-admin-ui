import React, { useState, useReducer, useEffect } from 'react';
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
import axios from 'axios';
import { API_URL } from '../../../utils/callUrl';
import { setSellerName, setSellerImg } from 'store/actions';
import NoImage from '../../../images/no_image.png';

const reducer = (state, action, status) => {
  console.log(action);
  console.log(status);
  return {
    ...state,
  };
};

const GeneralInfo = ({ setSellerName, setSellerImg, match }) => {
  const [showContent, setShowContent] = useState(true);
  const [sellerNameKr, setSellerNameKr] = useState('');
  const [sellerNameEn, setSellerNameEn] = useState('');
  const [account, setAccount] = useState('');
  const [repImage, setRepImage] = useState(NoImage);
  const [type, setType] = useState(1);

  useEffect(() => {
    // console.log(match.params) === {}
    if (match.params.id) {
      console.log('잇다');
      axios
        .get(`${API_URL}/seller/list-info-get/${match.params.id}`)
        .then(res => {
          console.log(res);
          const data = res.data.seller_info;
          if (data.name_kr) {
            setSellerNameKr(data.name_kr);
            setSellerName(data.name_kr, 'kr');
          }
          if (data.name_en) {
            setSellerNameEn(data.name_en);
            setSellerName(data.name_en, 'en');
          }
          if (data.account) {
            setAccount(data.account);
          }
          if (data.profile_image) {
            setRepImage(data.profile_image);
            setSellerImg(data.profile_image);
          }
          if (data.seller_types_id) {
            setType(data.seller_types_id);
          }
        });
    } else {
      console.log('없다');
      const token = localStorage.getItem('Login_token');
      axios
        .get(`${API_URL}/seller/info-get`, {
          headers: { Authorization: token },
        })
        .then(res => {
          console.log(res);
          const data = res.data.seller_info;
          if (data.name_kr) {
            setSellerNameKr(data.name_kr);
            setSellerName(data.name_kr, 'kr');
          }
          if (data.name_en) {
            setSellerNameEn(data.name_en);
            setSellerName(data.name_en, 'en');
          }
          if (data.account) {
            setAccount(data.account);
          }
          if (data.profile_image) {
            setRepImage(data.profile_image);
            setSellerImg(data.profile_image);
          }
          if (data.seller_types_id) {
            setType(data.seller_types_id);
          }
        });
    }
  }, []);

  const onChangeRepImage = e => {
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
        setSellerImg(res.url);
        setRepImage(res.url);
      })
      .catch(err => console.log(err));
  };

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
            repImage={repImage}
            onChange={onChangeRepImage}
            id="profile"
            isRequired
            label="셀러 프로필"
            text="셀러 프로필 확장자는 jpg, jpeg만 가능합니다."
          />
          <SellerStatus />
          <SellerProperty type={type} />
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
          <SellerAccount account={account} />
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
