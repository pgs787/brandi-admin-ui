import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Select from 'react-select';
import SectionField from 'components/SectionField';
import { connect } from 'react-redux';
import { setSeller } from 'store/actions';
import { data } from '../../../../../config';
import { API_URL } from '../../../../utils/callUrl';
import { customStylesSelectSeller } from 'styles/customStyles';

const options = data.generalInfo.sellers;

const SelectSeller = ({ setSeller }) => {
  const [showModal, setShowModal] = useState(false);
  const [tempSelectedValue, setTempSelectedValue] = useState('');
  const [selectedSeller, setSelectedSeller] = useState('');
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch(
      `${API_URL}/seller/list?limit=${30}&offset=${1}&start_date=${'2020-02-18'}&end_date=${'2020-02-20'}`,
      {
        method: 'GET',
      },
    )
      .then(res => res.json())
      .then(res => {
        console.log('res: ', res.seller_info);
        setUserData(
          res.seller_info.map(element => {
            return { value: element.account, label: element.account };
          }),
        );
      })
      .catch(err => console.log('err: ', err));
  }, []);
  const onChange = ({ value }) => {
    setTempSelectedValue(value);
  };

  const onToggleModal = () => {
    setShowModal(!showModal);
  };

  const onApply = () => {
    setSelectedSeller(tempSelectedValue);
    setSeller(tempSelectedValue);
    setShowModal(!showModal);
  };

  const onCancel = () => {
    setShowModal(!showModal);
  };

  return (
    <SectionField label="셀러선택" isRequired>
      <InputBox
        placeholder="셀러검색을 해주세요"
        value={selectedSeller}
        readOnly
      />
      <SearchButton onClick={onToggleModal}>셀러 검색</SearchButton>
      {showModal && <Backdrop onClick={onCancel} />}
      {showModal && (
        <SellerSelectModal>
          <SelectHeader>
            셀러 선택
            <SelectHeaderMoreInfo>
              * 상품을 등록할 셀러를 선택해주세요. (검색 10건)
            </SelectHeaderMoreInfo>
          </SelectHeader>
          <ModalBody>
            <FormLabel>셀러 검색</FormLabel>
            <Select
              styles={customStylesSelectSeller}
              placeholder="셀러 검색"
              options={userData}
              onChange={onChange}
            />
          </ModalBody>
          <SetButtonWrapper>
            <ApplyButton onClick={onApply}>적용</ApplyButton>
            <CancelButton onClick={onCancel}>취소</CancelButton>
          </SetButtonWrapper>
        </SellerSelectModal>
      )}
    </SectionField>
  );
};

export default connect(null, { setSeller })(SelectSeller);

// Styled Components

const InputBox = styled.input`
  width: 220px;
  background-color: #f8f9fd;
  cursor: not-allowed;
`;

const SearchButton = styled.button`
  width: 100px;
  height: 38px;
  padding: 8px 20px;
  font-size: 13px;
  color: white;
  margin-left: 8px;
  background-color: #36363a;
  border: 1px solid #36363a;
`;

const FormLabel = styled.label`
  min-width: 120px;
  font-size: 15px;
  display: flex;
  align-items: center;
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
  height: 200px;
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

const SelectHeaderMoreInfo = styled.span`
  color: #1e90ff;
  font-size: 12px;
  margin-left: 20px;
`;

const ModalBody = styled.div`
  height: 50%;
  padding: 25px;
  display: flex;
  align-items: center;
`;

const SetButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 25%;
`;

const ApplyButton = styled.button`
  color: white;
  background-color: #36363a;
  border: 1px solid #36363a;
`;

const CancelButton = styled.button``;
