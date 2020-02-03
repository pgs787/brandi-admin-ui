import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

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

const SignUpPolicy = ({ handleClick, toInfo }) => {
  const classes = useStyles();
  const [checkbox, setCheckbox] = useState({
    terms: false,
    policy: false,
  });

  const handleCheckbox = val => {
    const copy = {
      ...checkbox,
    };
    copy[val] = !copy[val];
    setCheckbox(copy);
  };

  const toNext = () => {
    if (checkbox.terms === false && checkbox.policy === false) {
      alert('판매자 이용약관과 입점정책에 동의해주세요');
    } else if (checkbox.terms && checkbox.policy === false) {
      alert('판매자 이용약관에 동의해주세요');
    } else if (checkbox.terms === false && checkbox.policy) {
      alert('입점정책에 동의해주세요');
    } else {
      toInfo();
    }
  };

  return (
    <>
      <img
        src="http://sadmin.brandi.co.kr/include/img/seller_join_top_1.png"
        style={{ marginBottom: '10px' }}
      />
      <H4PolicyTitle>1. 브랜디 판매자 이용약관</H4PolicyTitle>
      <PrePolicyContainer>
        <DivInnerTitle>
          <strong>판매자이용약관</strong>
        </DivInnerTitle>
        <strong>제1장 총칙</strong>
        <br />
        <strong>제 1 조 목적</strong>
        <br />이 약관은 (주)브랜디(이하 "회사"라 함)가 운영하는 오픈마켓 판매자
        페이지 (
        <ABrandiURL href="http://sadmin.brandi.co.kr/login" target="_blank">
          sadmin.brandi.co.kr
        </ABrandiURL>
        , 이하 "브랜디셀러관리자")에 판매회원으로 가입하여 사이버 몰(
        <ABrandiURL href="http://www.brandi.co.kr" target="_blank">
          www.brandi.co.kr
        </ABrandiURL>
        이하 "몰"이라 함)과 스마트폰 등 이동통신기기를 통해 제공 되는 모바일
        애플리케이션 (이하 "브랜디 앱"이라고 합니다)
      </PrePolicyContainer>
      <LabelCheckbox>
        <div
          onClick={() => handleCheckbox('terms')}
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <DivCheckbox check={checkbox.terms} />
          판매자 이용약관을 동의합니다
        </div>
        <AToTerms
          href="https://docs.google.com/document/u/1/d/1srM-7cn8AwqObaKXnZVaMIKykZG-6oxMRN3eYpC7gQ0/pub"
          target="_blank"
        >
          [전문보기]
        </AToTerms>
      </LabelCheckbox>
      <H4PolicyTitle>2. 브랜디 입점 정책</H4PolicyTitle>
      <PrePolicyContainer>
        <strong>1. 상품이미지 정책</strong>
        <br />
        국내 도매처 이미지, 해외 도매 거래처 이미지의 사용을 제한하며 입점
        취소사유가 될 수 있습니다.
        <br />
        <br />
        <strong>2. 전 상품 무료배송 정책</strong>
        <br />
        브랜디는 현재 전 상품 무료배송 정책을 시행하고 있습니다. 브랜디에서의
        판매상품은 100% 무료배송으로 진행해 주셔야 합니다. (배송비 업체 부담).
        <br />
        <br />
        <strong>3. 전 상품 가격정찰제</strong>
        <br />
        브랜디에서의 판매상품은 자사몰의 최종 판매가와 가격이 동일해야 합니다.
        월 1회 이상 판매가 모니터링을 실시하여 가격이 상이할 경우, 브랜디 내
        상품 노출이 제한됩니다.
        <br />
        <br />
        <strong>4. 정산 정책</strong>
        <br />
        브랜디는 월 2회 정산되며, 판매 수수료와는 별도로 서버 이용료
        (45,000원/월 2회 분납, VAT 별도)가 부과됩니다.
      </PrePolicyContainer>
      <LabelCheckbox>
        <div
          onClick={() => handleCheckbox('policy')}
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <DivCheckbox check={checkbox.policy} />
          판매자 본인은 위 내용을 숙지하였고 정책에 동의합니다
        </div>
      </LabelCheckbox>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button onClick={toNext} variant="contained" className={classes.root}>
          다음
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
      </div>
    </>
  );
};

export default SignUpPolicy;

const H4PolicyTitle = styled.h4`
  margin: 30px 0 10px;
  font-size: 18px;
  line-height: 1.1;
`;

const PrePolicyContainer = styled.pre`
  white-space: pre-wrap;
  max-height: 340px;
  display: block;
  padding: 9.5px 9.5px 20px;
  margin: 0 0 10px;
  font-size: 13px;
  line-height: 1.42857143;
  color: #333;
  word-break: break-all;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-family: Menlo, Monaco, Consolas, 'Courier New', monospace;
`;

const DivInnerTitle = styled.div`
  text-align: center;
  margin-top: 15px;
`;

const ABrandiURL = styled.a`
  color: #0d638f;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const LabelCheckbox = styled.label`
  display: flex;
  align-items: center;
  margin: 10px 0;
  min-height: 20px;
  font-weight: 400;
  font-size: 14px;
  cursor: pointer;
`;

const DivCheckbox = styled.div`
  display: inline-block;
  background-position: 0 -260px;
  background-image: url('http://sadmin.brandi.co.kr/include/plugins/uniform/images/sprite.png');
  width: 19px;
  height: 19px;
  background-repeat: no-repeat;
  margin-right: 5px;
  margin-bottom: 3px;
  ${({ check }) =>
    check &&
    css`
      background-position: -76px -260px;
    `};
`;

const AToTerms = styled.a`
  color: black;
  text-decoration: none;
  margin-left: 7px;
  &:hover {
    text-decoration: underline;
  }
`;
