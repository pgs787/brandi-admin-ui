import React, { useReducer, useEffect, useState } from 'react';
import styled from 'styled-components';
import InfoInput from './InfoInput';
import {
  checkId,
  checkUrl,
  checkPhoneNumber,
  checkSellerName,
  checkSellerNameEng,
} from 'utils/checkValidation';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import axios from 'axios';
import { API_URL } from 'utils/callUrl';

const useStyles = makeStyles(theme => ({
  root: {
    width: '55px',
    height: '34px',
    color: 'white',
    backgroundColor: '#5bc0de',
    fontSize: '14px',
    padding: '0',
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
  const [radioState, setRadioState] = useState(1);
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

  const validators = {
    id: value =>
      !checkId(value) &&
      '아이디는 5~20글자의 영문, 숫자, 언더바, 하이픈만 사용 가능하며 시작 문자는 영문 또는 숫자입니다.',
    password: value =>
      !(value.length > 3) && '비밀번호의 최소 길이는 4글자입니다.',
    rePassword: value =>
      !(value === inputState.password) && '비밀번호가 일치하지 않습니다',
    phoneNumber: value => {
      if (toString(value).length === 0) {
        return '필수 입력항목입니다.';
      }
      if (!checkPhoneNumber(value)) {
        return '올바른 정보를 입력해주세요. (ex. 01012345678)';
      }
    },
    sellerName: value => {
      if (!value.length > 0) return '필수 입력항목입니다.';
      if (!checkSellerName(value)) return '올바른 정보를 입력해주세요.';
    },
    sellerNameEng: value => {
      if (!value.length > 0) return '필수 입력항목입니다.';
      if (!checkSellerNameEng(value)) return '올바른 정보를 입력해주세요.';
    },
    csNumber: value => {
      if (!value.length > 0) return '필수 입력항목입니다.';
      if (!(value.length === 10 || value.length === 11))
        return '10자리 또는 11자리 번호를 입력해주세요';
    },
    sellerSite: value =>
      !checkUrl(value) &&
      '올바른 주소를 입력해주세요. (ex. http://www.brandi.co.kr)',
    kakaoId: () => {},
    instaId: () => {},
  };

  const [errors, setErrors] = useState([]);

  const setValidationResult = (key, data) => {
    let nextState = errors.filter(error => error.key !== key);

    if (data) {
      nextState = nextState.concat({
        key,
        message: data,
      });
    }
    setErrors(nextState);
  };

  const checkBeforeSubmit = () => {
    const submitErrors = Object.entries(validators).reduce(
      (prev, [key, validator]) => {
        const value = inputState[key];
        const result = validator(value, inputState);

        if (!result) return prev;

        return prev.concat({
          key,
          message: result,
        });
      },
      [],
    );

    setErrors(submitErrors);

    if (!submitErrors.length) {
      axios
        .post(`${API_URL}/seller/sign-up`, {
          seller_types_id: radioState,
          account: inputState.id,
          name_kr: inputState.sellerName,
          name_en: inputState.sellerNameEng,
          password: inputState.password,
          mobile_number: inputState.phoneNumber,
          cs_phone_number: inputState.csNumber,
          site_url: inputState.sellerSite,
          instagram_account: inputState.instaId,
          cs_kakao_account: inputState.kakaoId,
        })
        .then(res => {
          alert('정상적으로 가입 되었습니다.');
          location.reload();
        })
        .catch(error => {
          console.log(error.response);
        });
    } else {
      alert('올바른 형식으로 다시 입력해주세요');
    }

    // ....다음 동작들
  };

  const handleChange = e => {
    console.log(radioState);
    setRadioState(e.target.value);
  };

  const onChange = e => {
    dispatch(e.target);
    const { name, value } = e.target;
    const validator = validators[name];
    const result = validator(value, inputState);
    setValidationResult(name, result);
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
      <DivInputWrap>
        <InfoInput
          img="\f007"
          placeholder="아이디"
          name="id"
          type="text"
          value={inputState.id}
          onChange={onChange}
          errors={errors}
        />
      </DivInputWrap>
      <DivInputWrap>
        <InfoInput
          img="\f023"
          placeholder="비밀번호"
          name="password"
          type="password"
          value={inputState.password}
          onChange={onChange}
          errors={errors}
        />
      </DivInputWrap>
      <DivInputWrap>
        <InfoInput
          img="\f00c"
          placeholder="비밀번호 재입력"
          name="rePassword"
          type="password"
          value={inputState.rePassword}
          onChange={onChange}
          errors={errors}
        />
      </DivInputWrap>
      <H4InfoTitle>
        담당자 정보 <SpanSubInfo>(*실제 샵을 운영하시는 분)</SpanSubInfo>
      </H4InfoTitle>
      <DivInputWrap>
        <InfoInput
          img="\f095"
          placeholder="핸드폰번호"
          name="phoneNumber"
          type="number"
          value={inputState.phoneNumber}
          onChange={onChange}
          errors={errors}
        />
      </DivInputWrap>
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
          checked={radioState == 1}
          onChange={handleChange}
          value={1}
          color="default"
          size="small"
        />
        쇼핑몰
      </LabelRaido>
      <LabelRaido>
        <Radio
          checked={radioState == 2}
          onChange={handleChange}
          value={2}
          color="default"
          size="small"
        />
        마켓
      </LabelRaido>
      <LabelRaido>
        <Radio
          checked={radioState == 3}
          onChange={handleChange}
          value={3}
          color="default"
          size="small"
        />
        로드샵
      </LabelRaido>
      <LabelRaido>
        <Radio
          checked={radioState == 4}
          onChange={handleChange}
          value={4}
          color="default"
          size="small"
        />
        디자이너브랜드
      </LabelRaido>
      <br />
      <LabelRaido>
        <Radio
          checked={radioState == 5}
          onChange={handleChange}
          value={5}
          color="default"
          size="small"
        />
        제너럴브랜드
      </LabelRaido>
      <LabelRaido>
        <Radio
          checked={radioState == 6}
          onChange={handleChange}
          value={6}
          color="default"
          size="small"
        />
        내셔널브랜드
      </LabelRaido>
      <LabelRaido>
        <Radio
          checked={radioState == 7}
          onChange={handleChange}
          value={7}
          color="default"
          size="small"
        />
        뷰티
      </LabelRaido>
      <DivInputWrap>
        <InfoInput
          img="\f031"
          placeholder="셀러명 (상호)"
          name="sellerName"
          type="text"
          value={inputState.sellerName}
          onChange={onChange}
          errors={errors}
        />
      </DivInputWrap>
      <DivInputWrap>
        <InfoInput
          img="\f031"
          placeholder="영문셀러명 (영문상호)"
          name="sellerNameEng"
          type="text"
          value={inputState.sellerNameEng}
          onChange={onChange}
          errors={errors}
        />
      </DivInputWrap>
      <DivInputWrap>
        <InfoInput
          img="\f095"
          placeholder="고객센터 전화번호"
          name="csNumber"
          type="number"
          value={inputState.csNumber}
          onChange={onChange}
          errors={errors}
        />
      </DivInputWrap>
      <DivInputWrap>
        <InfoInput
          img="\f007"
          placeholder="사이트 URL"
          name="sellerSite"
          type="text"
          value={inputState.sellerSite}
          onChange={onChange}
          errors={errors}
        />
      </DivInputWrap>
      <DivInputWrap>
        <InfoInput
          img="\f0e5"
          placeholder="카카오톡 아이디"
          name="kakaoId"
          type="text"
          value={inputState.kakaoId}
          onChange={onChange}
        />
      </DivInputWrap>
      <DivInputWrap>
        <InfoInput
          img="\f0e5"
          placeholder="인스타그램 아이디"
          name="instaId"
          type="text"
          value={inputState.instaId}
          onChange={onChange}
        />
      </DivInputWrap>
      <DivBtnWrap>
        <Button
          onClick={checkBeforeSubmit}
          variant="contained"
          className={classes.root}
        >
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

const PErrorMsg = styled.p`
  color: #a94442;
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 13px;
`;

const DivInputWrap = styled.div`
  margin-bottom: 15px;
`;
