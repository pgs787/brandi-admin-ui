import React, { useState } from 'react';
import styled from 'styled-components';
import SignUpPolicy from './SignUpPolicy';
import SignUpInfo from './SignUpInfo';

const SignUp = ({ handleClick }) => {
  const [step, setStep] = useState('policy');

  const toInfo = () => {
    setStep('info');
  };

  const currentStep = () => {
    if (step === 'policy')
      return <SignUpPolicy handleClick={handleClick} toInfo={toInfo} />;
    else if (step === 'info') return <SignUpInfo handleClick={handleClick} />;
  };

  return (
    <DivContent>
      <H3Header>셀러회원 가입</H3Header>
      <HrLineCenter />
      <DivPaddingWrap>{currentStep()}</DivPaddingWrap>
    </DivContent>
  );
};

export default SignUp;

const DivContent = styled.div`
  background-color: #fff;
  width: 500px;
  margin: 0 auto;
  margin-bottom: 40px;
  padding: 20px 30px 15px;
  border-radius: 4px;
`;

const H3Header = styled.h3`
  font-weight: 300;
  font-size: 24px;
  margin: 20px 0 10px;
  line-height: 1.1;
  text-align: center;
`;

const HrLineCenter = styled.hr`
  margin: 20px 0;
  border: 0;
  border-top: 1px solid #e0dfdf;
`;

const DivPaddingWrap = styled.div`
  padding: 0 15px;
`;
