import React, { useState } from 'react';
import styled from 'styled-components';
import SectionField from 'components/SectionField';
import InfoInput from 'pages/Login/InfoInput';

const SellerAccount = () => {
  const [showModal, setShowModal] = useState(false);

  const onToggleModal = () => {
    setShowModal(!showModal);
  };

  const onCancel = () => {
    setShowModal(!showModal);
  };

  return (
    <SectionField
      label="셀러 계정"
      moreInfoText="셀러명(한글, 영문) 변경시 셀러명과 동일하게 등록된 브랜드 정보는 자동으로 변경되지 않습니다. 관리자께서는 이점 유의해주시기 바라며, 브랜드 정보 수정은 [이전 버전 관리 > 브랜드관리] 에서 가능합니다."
    >
      <Wrapper>
        <p>bress12</p>
        <Button onClick={onToggleModal}>비밀번호 변경하기</Button>
      </Wrapper>
      {showModal && <Backdrop onClick={onCancel} />}
      {showModal && (
        <SellerSelectModal>
          <SelectHeader>비밀번호 변경하기</SelectHeader>
          <ModalBody>
            <InputHeader>변경할 비밀번호</InputHeader>
            <InfoInput />
            <InputHeader>비밀번호 재입력</InputHeader>
            <InfoInput />
          </ModalBody>
          <SetButtonWrapper>
            <ApplyButton>변경</ApplyButton>
            <CancelButton onClick={onCancel}>취소</CancelButton>
          </SetButtonWrapper>
        </SellerSelectModal>
      )}
    </SectionField>
  );
};

export default SellerAccount;

const Wrapper = styled.div`
  margin: 10px 0;
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  font-size: 13px;
  color: white;
  margin-left: 15px;
  background-color: #36363a;
  border: 1px solid #36363a;
`;

const Backdrop = styled.div`
  position: fixed;
  min-width: 100vw;
  min-height: 100vh;
  max-height: 100vh;
  background-color: black;
  z-index: 100;
  opacity: 0.5;
  left: 0;
  top: 0;
`;

const SellerSelectModal = styled.div`
  position: fixed;
  width: 500px;
  background-color: white;
  z-index: 200;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 6px;
`;

const SelectHeader = styled.div`
  height: 25%;
  padding: 15px;
  border-bottom: 1px solid #efefef;
  font-size: 18px;
  color: #222222;
  display: flex;
  align-items: center;
`;

const ModalBody = styled.div`
  padding: 20px 25px 25px;
`;

const InputHeader = styled.p`
  margin: 10px;
  font-size: 14px;
`;

const SetButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 15px;
`;

const ApplyButton = styled.button`
  color: white;
  background-color: #36363a;
  border: 1px solid #36363a;
`;

const CancelButton = styled.button``;
