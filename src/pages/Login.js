import React, { useState } from 'react';
import styled from 'styled-components';
import LoginForm from './Login/LoginForm';
import FindPw from './Login/FindPw';
import SignUp from './Login/SignUp';

const Login = () => {
  const [currentState, setCurrentState] = useState('login');

  const currentPage = () => {
    if (currentState === 'login')
      return (
        <LoginForm
          handleClick={() => setCurrentState('findPw')}
          toSignUp={() => setCurrentState('signUp')}
        />
      );
    else if (currentState === 'findPw')
      return <FindPw handleClick={() => setCurrentState('login')} />;
    else if (currentState === 'signUp')
      return <SignUp handleClick={() => setCurrentState('login')} />;
  };

  return (
    <>
      <DivLoginLogo>
        <a href="/login">
          <ImgBrandiLogo src="http://sadmin.brandi.co.kr/include/img/logo_seller_admin_1.png" />
        </a>
      </DivLoginLogo>
      {currentPage()}
      <DivLoginFooter>
        <DivFooterInner>
          | 상호 : (주)브랜디 | 주소 : (06223) 서울특별시 강남구 테헤란로 32길
          26 청송빌딩 | 사업자등록번호 : 220-88-93187 | 통신판매업신고 :
          2016-서울강남-00359호 | 이메일 : help@brandi.co.kr
          <br />
          2018 © brandi inc.
        </DivFooterInner>
      </DivLoginFooter>
    </>
  );
};

export default Login;

const DivLoginLogo = styled.div`
  margin: 0 auto;
  padding: 60px 15px 15px;
  text-align: center;
  display: flex;
  justify-content: center;
`;

const ImgBrandiLogo = styled.img`
  width: 100px;
  height: 40px;
  display: block;
  background-size: cover;
`;

const DivLoginFooter = styled.div`
  position: relative;
  width: 100%;
  bottom: 0;
  text-align: center;
  background-color: #35363a;
  padding: 30px;
`;

const DivFooterInner = styled.div`
  color: #999ba2;
  padding: 0 15px;
  font-size: 12px;
`;

const DivMargin = styled.div`
  width: 100%;
  height: 18.5vh;
`;
