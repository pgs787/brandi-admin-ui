import React, { useReducer, useEffect, useState } from 'react';
import styled from 'styled-components';
import InfoInput from './InfoInput';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';

const useStyles = makeStyles(theme => ({
  root: {
    width: '55px',
    height: '34px',
    color: 'white',
    backgroundColor: '#5bc0de',
    fontSize: '14px',
    padding: '0',
    // margin: '0 0 3px 5px',
    '&:hover': {
      backgroundColor: '#31B0D5',
    },
  },
  cancel: {
    backgroundColor: '#d9534f',
    width: '55px',
    height: '34px',
    color: 'white',
    '&:hover': {
      backgroundColor: '#C9302C',
    },
  },
}));

const reducer = (state, action) => {
  return {
    ...state,
    [action.name]: action.value,
  };
};

const SignUpInfo = ({ handleClick }) => {
  const classes = useStyles();
  const [radioState, setRadioState] = useState('shoppingMall');
  const [inputState, dispatch] = useReducer(reducer, {
    id: '',
    password: '',
    rePassword: '',
    phoneNumber: '',
    sellerName: '',
    sellerNameEng: '',
    csNumber: '',
    sellerSite: '',
    kakaoId: '',
    instaId: '',
  });

  const handleChange = e => {
    setRadioState(e.target.value);
  };

  const onChange = e => {
    dispatch(e.target);
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <>
      <img
        style={{ marginBottom: '5px' }}
        src="http://sadmin.brandi.co.kr/include/img/seller_join_top_2.png"
      />
      <H4InfoTitle>가입 정보</H4InfoTitle>
      <InfoInput
        img="\f007"
        placeholder="아이디"
        name="id"
        type="text"
        value={inputState.id}
        onChange={onChange}
      />
      <InfoInput
        img="\f023"
        placeholder="비밀번호"
        name="password"
        type="password"
        value={inputState.password}
        onChange={onChange}
      />
      <InfoInput
        img="\f00c"
        placeholder="비밀번호 재입력"
        name="rePassword"
        type="password"
        value={inputState.rePassword}
        onChange={onChange}
      />
      <H4InfoTitle>
        담당자 정보 <SpanSubInfo>(*실제 샵을 운영하시는 분)</SpanSubInfo>
      </H4InfoTitle>
      <InfoInput
        img="\f095"
        placeholder="핸드폰번호"
        name="phoneNumber"
        type="text"
        value={inputState.phoneNumber}
        onChange={onChange}
      />
      <SpanSubInfo
        style={{
          fontSize: '12px',
        }}
      >
        <IDesc />
        입점 신청 후 브랜디 담당자가 연락을 드릴 수 있으니 정확한 정보를
        기입해주세요.
      </SpanSubInfo>
      <H4InfoTitle>셀러 정보</H4InfoTitle>
      <LabelRaido>
        <Radio
          checked={radioState === 'shoppingMall'}
          onChange={handleChange}
          value="shoppingMall"
          color="default"
          size="small"
        />
        쇼핑몰
      </LabelRaido>
      <LabelRaido>
        <Radio
          checked={radioState === 'market'}
          onChange={handleChange}
          value="market"
          color="default"
          size="small"
        />
        마켓
      </LabelRaido>
      <LabelRaido>
        <Radio
          checked={radioState === 'roadShop'}
          onChange={handleChange}
          value="roadShop"
          color="default"
          size="small"
        />
        로드샵
      </LabelRaido>
      <LabelRaido>
        <Radio
          checked={radioState === 'designer'}
          onChange={handleChange}
          value="designer"
          color="default"
          size="small"
        />
        디자이너브랜드
      </LabelRaido>
      <br />
      <LabelRaido>
        <Radio
          checked={radioState === 'general'}
          onChange={handleChange}
          value="general"
          color="default"
          size="small"
        />
        제너럴브랜드
      </LabelRaido>
      <LabelRaido>
        <Radio
          checked={radioState === 'national'}
          onChange={handleChange}
          value="national"
          color="default"
          size="small"
        />
        내셔널브랜드
      </LabelRaido>
      <LabelRaido>
        <Radio
          checked={radioState === 'beauty'}
          onChange={handleChange}
          value="beauty"
          color="default"
          size="small"
        />
        뷰티
      </LabelRaido>
      <InfoInput
        img="\f031"
        placeholder="셀러명 (상호)"
        name="sellerName"
        type="text"
        value={inputState.sellerName}
        onChange={onChange}
      />
      <InfoInput
        img="\f031"
        placeholder="영문셀러명 (영문상호)"
        name="sellerNameEng"
        type="text"
        value={inputState.sellerNameEng}
        onChange={onChange}
      />
      <InfoInput
        img="\f095"
        placeholder="고객센터 전화번호"
        name="csNumber"
        type="text"
        value={inputState.csNumber}
        onChange={onChange}
      />
      <InfoInput
        img="\f007"
        placeholder="사이트 URL"
        name="sellerSite"
        type="text"
        value={inputState.sellerSite}
        onChange={onChange}
      />
      <InfoInput
        img="\f0e5"
        placeholder="카카오톡 아이디"
        name="kakaoId"
        type="text"
        value={inputState.kakaoId}
        onChange={onChange}
      />
      <InfoInput
        img="\f0e5"
        placeholder="인스타그램 아이디"
        name="instaId"
        type="text"
        value={inputState.instaId}
        onChange={onChange}
      />
      <DivBtnWrap>
        <Button variant="contained" className={classes.root}>
          신청
        </Button>
        <Button
          variant="contained"
          className={classes.cancel}
          onClick={() => {
            const result = confirm('브랜디 가입을 취소하시겠습니까?');
            if (result) {
              handleClick();
            }
          }}
        >
          취소
        </Button>
      </DivBtnWrap>
    </>
  );
};

export default SignUpInfo;

const H4InfoTitle = styled.h4`
  margin: 25px 0 10px;
  font-size: 18px;
  font-weight: 300;
  line-height: 1.1;
`;

const SpanSubInfo = styled.span`
  font-size: 14px;
  color: rgb(30, 144, 255);
`;

const IDesc = styled.i`
  font-size: 12px;
  font-family: FontAwesome;
  margin-right: 3px;
  font-style: normal;
  &:before {
    content: '\f05a';
  }
`;

const DivBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const LabelRaido = styled.label`
  font-size: 14px;
  margin-right: 5px;
`;
