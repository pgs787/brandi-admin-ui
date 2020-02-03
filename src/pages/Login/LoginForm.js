import React, { useState, useReducer } from 'react';
import styled, { css } from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  signup: {
    backgroundColor: 'white',
    marginRight: '10px'
  },
  signin: {
    backgroundColor: '#5bc0de',
    '&:hover': {
      backgroundColor: '#31B0D5'
    }
  }
}));

const reducer = (state, action) => {
  return {
    ...state,
    [action.name]: action.value
  };
};

const LoginForm = ({ handleClick, toSignUp }) => {
  const [checkbox, setCheckbox] = useState(false);
  const [inputState, dispatch] = useReducer(reducer, {
    id: '',
    password: ''
  });
  const classes = useStyles();

  const handleChange = e => {
    dispatch(e.target);
  };

  return (
    <>
      <DivContent>
        <form>
          <H3LoginTitle>셀러 로그인</H3LoginTitle>
          <DivInputIcon>
            <IInputIcon img="\f007" />
            <InputAccount
              placeholder="셀러 아이디"
              name="id"
              value={inputState.id}
              type="text"
              autoComplete="off"
              onChange={handleChange}
            />
          </DivInputIcon>
          <DivInputIcon>
            <IInputIcon img="\f023" />
            <InputAccount
              name="password"
              onChange={handleChange}
              value={inputState.password}
              placeholder="셀러 비밀번호"
              type="password"
            />
          </DivInputIcon>
          <DivFormAction>
            <LabelAction
              onClick={() => {
                setCheckbox(!checkbox);
              }}
            >
              <DivCheckbox check={checkbox} />
              아이디/비밀번호 기억하기
            </LabelAction>
            <LabelAction>
              <DivSearchPw onClick={handleClick}>
                <ISearchIcon />
                비밀번호 찾기
              </DivSearchPw>
            </LabelAction>
          </DivFormAction>
          <DivBtnWrap>
            <Button
              onClick={toSignUp}
              className={classes.signup}
              variant="contained"
            >
              셀러가입
            </Button>
            <Button
              className={classes.signin}
              variant="contained"
              color="primary"
            >
              로그인
            </Button>
          </DivBtnWrap>
          <ABannerImg
            href="https://www.notion.so/HELPI-f24864d9056c4d2a8b988a07814d5c7f"
            target="_blank"
          >
            <img
              src="http://sadmin.brandi.co.kr/include/img/admin_mainbn_helpi.png"
              style={{ width: '360px', marginTop: '25px' }}
            />
          </ABannerImg>
          <DivFormBottom>
            <H4BotText>
              입점안내
              <AToIntro href="http://www.brandiinc.com/brandi/" target="_blank">
                보러가기
              </AToIntro>
            </H4BotText>
            <H4BotText>고객센터</H4BotText>
          </DivFormBottom>
          <PCsInfo>
            | 대표번호 : 1566-1910
            <br />| 카카오톡 플러스친구 :
            <AToIntro
              style={{ fontWeight: '400' }}
              href="https://pf.kakao.com/_pSxoZu"
              target="_blank"
            >
              @브랜디셀러
            </AToIntro>
          </PCsInfo>
        </form>
      </DivContent>
      <DivMargin />
    </>
  );
};

export default LoginForm;

const DivMargin = styled.div`
  width: 100%;
  height: 17.5vh;
`;

const DivContent = styled.div`
  background-color: #fff;
  width: 360px;
  margin: 0 auto;
  padding: 20px 30px 15px;
  border-radius: 4px;
`;

const H3LoginTitle = styled.h3`
  margin: 20px 0 25px;
  font-size: 24px;
  font-weight: 300;
`;

const DivInputIcon = styled.div`
  position: relative;
  margin-bottom: 15px;
`;

const IInputIcon = styled.i`
  color: #ccc;
  position: absolute;
  margin: 11px 2px 4px 10px;
  width: 16px;
  height: 16px;
  font-size: 14px;
  text-align: center;
  line-height: 14px;
  font-family: FontAwesome;
  font-style: normal;
  &:before {
  content: '${({ img }) => img}';
  }
`;

const InputAccount = styled.input`
  font-size: 14px;
  font-weight: normal;
  color: #333333;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  transition: border-color ease-in-out 0.3s, box-shadow ease-in-out 0.3s;
  width: 100%;
  height: 34px;
  padding: 6px 12px 5px 33px;
  &:focus {
    border-color: #999999;
    outline: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
`;

const DivFormAction = styled.div`
  padding-top: 12px;
  display: flex;
  justify-content: space-between;
`;

const LabelAction = styled.label`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  display: flex;
  cursor: pointer;
`;

const DivCheckbox = styled.div`
  background-position: 0 -260px;
  background-image: url('http://sadmin.brandi.co.kr/include/plugins/uniform/images/sprite.png');
  width: 19px;
  height: 19px;
  background-repeat: no-repeat;
  margin-right: 5px;
  ${({ check }) =>
    check &&
    css`
      background-position: -76px -260px;
    `}
`;

const DivSearchPw = styled.div`
  color: #0d638f;
  text-decoration: none;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const ISearchIcon = styled.i`
  font-family: FontAwesome;
  font-style: normal;
  display: inline-block;
  font-size: 13px;
  margin-right: 3px;
  &:before {
    content: '\f002';
  }
`;

const DivBtnWrap = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
`;

const ABannerImg = styled.a`
  margin-left: -30px;
`;

const DivFormBottom = styled.div`
  margin-top: 25px;
`;

const H4BotText = styled.h4`
  color: #555;
  font-size: 18px;
  margin: 10px 0;
  font-weight: 300;
`;

const AToIntro = styled.a`
  color: #0d638f;
  font-weight: 300;
  margin-left: 5px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const PCsInfo = styled.p`
  color: #222;
  font-size: 13px;
  margin-bottom: 10px;
`;
