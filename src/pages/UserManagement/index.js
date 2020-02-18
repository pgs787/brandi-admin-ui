import React, { useState } from 'react';
import styled from 'styled-components';
import BoxDesign from 'components/BoxDesign';
import Navigation from 'components/Navigation/Navigation';
import Title from './Title';
import UserTable from './Table';
import axios from 'axios';
import { API_URL } from '../../utils/callUrl';
import Loading from 'components/Loading';

const UserManagement = () => {
  const [sellerData, setSellerData] = useState([]);
  const [sellerProp, setSellerProp] = useState('전체');
  const [number, setNumber] = useState('');
  const [sellerId, setSellerId] = useState('');
  const [enName, setEnName] = useState('');
  const [krName, setKrName] = useState('');
  const [managerName, setmanagerName] = useState('');
  const [managerNumber, setManagerNumber] = useState('');
  const [managerMail, setmanagerMail] = useState('');
  const [startingDateTime, setStartingDateTime] = useState(new Date());
  const [endingDateTime, setEndingDateTime] = useState(new Date());
  const [currentPage, setCurrentPage] = useState(1);
  const [offset, setOffset] = useState({ label: 10, value: 10 });
  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    axios
      .get(
        `${API_URL}/${번호}${셀러아이디}${영문이름}${한글이름}${담당자이름}${담당자연락처}${담당자이메일}${셀러속성}${시작기간}${끝기간}${몇개씩보기}${현재페이지}`,
      )
      .then(res => setSellerData(res));
  };

  const onChangeStartingDate = date => {
    console.log(date.getFullYear(), date.getMonth() + 1, date.getDate());
    setStartingDateTime(date);
  };

  const onChangeEndingDate = date => {
    setEndingDateTime(date);
  };

  const clickSellerProp = value => {
    setSellerProp(value);
  };

  const changeNumber = value => {
    setNumber(value);
  };
  const changeSellerId = value => {
    setSellerId(value);
  };
  const changeEnName = value => {
    setEnName(value);
  };
  const changeKrName = value => {
    setKrName(value);
  };

  const changeManagerName = value => {
    setmanagerName(value);
  };

  const changeManagerNumber = value => {
    setManagerNumber(value);
  };

  const changeManagerMail = value => {
    setmanagerMail(value);
  };

  const clickReset = () => {
    setSellerProp('전체');
    onChangeStartingDate(new Date());
    onChangeEndingDate(new Date());
    changeNumber('');
    changeSellerId('');
    changeEnName('');
    changeKrName('');
    changeManagerMail('');
    changeManagerName('');
    changeManagerNumber('');
  };

  const optionChange = value => {
    setOffset(value);
  };

  const pageChange = e => {
    setCurrentPage(e.target.value);
  };

  const handleButton = value => {
    if (value === 'plus') {
      setCurrentPage(currentPage + 1);
    }
    if (value === 'minus') {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      {loading.map && <Loading />}
      <Navigation>
        <PageWrapper>
          <Title
            sellerProp={sellerProp}
            number={number}
            sellerId={sellerId}
            enName={enName}
            krName={krName}
            managerName={managerName}
            managerNumber={managerNumber}
            managerMail={managerMail}
            startingDateTime={startingDateTime}
            endingDateTime={endingDateTime}
            onChangeStartingDate={onChangeStartingDate}
            onChangeEndingDate={onChangeEndingDate}
            clickSellerProp={clickSellerProp}
            changeNumber={changeNumber}
            changeSellerId={changeSellerId}
            changeEnName={changeEnName}
            changeKrName={changeKrName}
            changeManagerName={changeManagerName}
            changeManagerNumber={changeManagerNumber}
            changeManagerMail={changeManagerMail}
            clickReset={clickReset}
          />
          <BoxDesign>
            <UserTable
              currentPage={currentPage}
              offset={offset}
              optionChange={optionChange}
              pageChange={pageChange}
              handleButton={handleButton}
              sellerData={sellerData}
            />
          </BoxDesign>
        </PageWrapper>
      </Navigation>
    </>
  );
};

export default UserManagement;

const PageWrapper = styled.div`
  padding: 25px 20px 20px;
  background-color: #edf0f5;
`;
