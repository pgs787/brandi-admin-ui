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
  const [siteUrl, setSiteUrl] = useState('');
  const [startingDateTime, setStartingDateTime] = useState(
    new Date('2020-01-01T03:24:00'),
  );
  const [endingDateTime, setEndingDateTime] = useState(new Date());
  const [currentPage, setCurrentPage] = useState(1);
  const [offset, setOffset] = useState({ label: 10, value: 10 });
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState('');

  const takeStartDate = () => {
    const year = startingDateTime.getFullYear().toString();
    const month = (startingDateTime.getMonth() + 1).toString();
    const date = startingDateTime.getDate().toString();
    return year + '-' + month + '-' + date;
  };

  const takeEndDate = () => {
    const year = endingDateTime.getFullYear().toString();
    const month = (endingDateTime.getMonth() + 1).toString();
    const date = endingDateTime.getDate().toString();
    return year + '-' + month + '-' + date;
  };

  const checkType = type => {
    if (type === '전체') return '';
    if (type === '쇼핑몰') return '&seller_types_id=1;';
    if (type === '마켓') return '&seller_types_id=2';
    if (type === '로드샵') return '&seller_types_id=3';
    if (type === '디자이너브랜드') return '&seller_types_id=4';
    if (type === '제너럴브랜드') return '&seller_types_id=5';
    if (type === '내셔널브랜드') return '&seller_types_id=6';
    if (type === '뷰티') return '&seller_types_id=7';
  };

  const handleSearch = (value, ofs) => {
    setLoading(true);
    console.log(offset.value, takeStartDate());
    axios
      .get(
        `${API_URL}/seller/list?limit=${
          ofs.value
        }&offset=${value}&start_date=${takeStartDate()}&end_date=${takeEndDate()}&account=${sellerId}&name_kr=${krName}&name_en=${enName}&site_url=${siteUrl}&representative_name=${managerName}&mobile_number=${managerNumber}&email=${managerMail}${checkType(
          sellerProp,
        )}&id=${number}`,
      )
      .then(res => {
        console.log(res.data);
        setSellerData(res.data.seller_info);
        setTotal(res.data.seller_count);
        console.log(res.data.seller_info);
        setLoading(false);
      })
      .catch(err => {
        alert('올바르지 않은 요청입니다');
        console.log(err);
        location.reload();
        // setLoading(false);
      });
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

  const changeSite = value => {
    setSiteUrl(value);
  };

  const clickReset = () => {
    setSellerProp('전체');
    onChangeStartingDate(new Date('2020-01-01T03:24:00'));
    onChangeEndingDate(new Date());
    changeNumber('');
    changeSellerId('');
    changeEnName('');
    changeKrName('');
    changeManagerMail('');
    changeManagerName('');
    changeManagerNumber('');
    changeSite('');
  };

  const optionChange = value => {
    setOffset(value);
    console.log(value);
    handleSearch(currentPage, value);
  };

  const pageChange = e => {
    if (e.target.value <= Math.ceil(total / offset.value)) {
      setCurrentPage(e.target.value);
    }
  };

  const handleButton = value => {
    if (value === 'plus') {
      handleSearch(parseInt(currentPage) + 1, offset);
      setCurrentPage(parseInt(currentPage) + 1);
    }
    if (value === 'minus') {
      handleSearch(parseInt(currentPage) - 1, offset);
      setCurrentPage(parseInt(currentPage) - 1);
    }
  };

  return (
    <>
      {loading && <Loading />}
      <Navigation>
        <PageWrapper>
          <Title
            siteUrl={siteUrl}
            changeSite={changeSite}
            handleSearch={handleSearch}
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
            currentPage={currentPage}
            offset={offset}
          />
          <BoxDesign>
            <UserTable
              sellerData={sellerData}
              handleSearch={handleSearch}
              currentPage={currentPage}
              offset={offset}
              optionChange={optionChange}
              pageChange={pageChange}
              handleButton={handleButton}
              sellerData={sellerData}
              currentPage={currentPage}
              total={total}
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
