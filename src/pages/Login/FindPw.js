import React, { useReducer } from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const reducer = (state, action) => {
  return {
    ...state,
    [action.name]: [action.value]
  };
};

const FindPw = ({ handleClick }) => {
  const classes = useStyles();
  const [inputState, dispatch] = useReducer(reducer, {
    id: '',
    phoneNumber: ''
  });

  const handleChange = e => {
    dispatch(e.target);
  };

  return (
    <>
      <DivContent>
        <H3Header>비밀번호 찾기</H3Header>
        <HrLineCenter />
        <DivPaddingWrap>
          <PInfoMessage>
            * 인증받은 핸드폰번호로 임시 비밀번호를 문자로 발송해드립니다.
          </PInfoMessage>
          <H4InputTitle>아이디</H4InputTitle>
          <div style={{ position: 'relative' }}>
            <IInputIcon img="\f007" />
            <InputAccount
              placeholder="어드민 아이디"
              name="id"
              autoComplete="off"
              value={inputState.id}
              type="text"
              onChange={handleChange}
            />
          </div>
          <H4InputTitle style={{ marginTop: '25px' }}>
            담당자 핸드폰번호
          </H4InputTitle>
          <div
            style={{
              position: 'relative',
              width: '160px',
              display: 'inline-block'
            }}
          >
            <IInputIcon img="\f095" />
            <InputAccount
              placeholder="담당자 핸드폰번호"
              name="phoneNumber"
              autoComplete="off"
              value={inputState.phoneNumber}
              type="text"
              onChange={handleChange}
            />
          </div>
          <Button variant="contained" className={classes.root}>
            인증번호발송
          </Button>
          <DivCancel>
            <Button
              variant="contained"
              className={classes.cancel}
              onClick={() => {
                const result = confirm(
                  '비밀번호 찾기를 취소하고, 로그인 화면으로 돌아가시겠습니까?'
                );
                if (result) {
                  handleClick();
                }
              }}
            >
              취소
            </Button>
          </DivCancel>
        </DivPaddingWrap>
      </DivContent>
      <DivMargin />
    </>
  );
};

export default FindPw;

const DivContent = styled.div`
  background-color: #fff;
  width: 360px;
  margin: 0 auto;
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

const DivMargin = styled.div`
  width: 100%;
  height: 35.5vh;
`;

const HrLineCenter = styled.hr`
  margin: 20px 0;
  border: 0;
  border-top: 1px solid #e0dfdf;
`;

const DivPaddingWrap = styled.div`
  padding: 0 15px;
`;

const PInfoMessage = styled.p`
  font-size: 13px;
  margin-bottom: 20px;
  color: #222222;
`;

const H4InputTitle = styled.h4`
  color: #555;
  font-weight: 300;
  font-size: 18px;
  margin: 10px 0;
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

const useStyles = makeStyles(theme => ({
  root: {
    width: '105px',
    height: '34px',
    color: 'white',
    backgroundColor: '#5cb85c;',
    fontSize: '14px',
    padding: '0',
    margin: '0 0 3px 5px',
    '&:hover': {
      backgroundColor: '#439C44'
    }
  },
  cancel: {
    backgroundColor: '#d9534f',
    width: '60px',
    height: '34px',
    color: 'white',
    '&:hover': {
      backgroundColor: '#C9302C'
    }
  }
}));

const DivCancel = styled.div`
  margin: 30px 0 15px;
  display: flex;
  justify-content: center;
`;
