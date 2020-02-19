import React from 'react';
import styled from 'styled-components';
import BoxDesign from '../../../components/BoxDesign';
import SellerSearchBox from './SellerSearchBox';

const Title = ({
  sellerProp,
  number,
  sellerId,
  enName,
  krName,
  managerName,
  managerNumber,
  managerMail,
  startingDateTime,
  endingDateTime,
  onChangeStartingDate,
  onChangeEndingDate,
  clickSellerProp,
  changeNumber,
  changeSellerId,
  changeEnName,
  changeKrName,
  changeManagerName,
  changeManagerNumber,
  changeManagerMail,
  clickReset,
  handleSearch,
  siteUrl,
  changeSite,
  currentPage,
  offset,
}) => {
  return (
    <>
      <BoxDesign>
        <PageTitle>셀러 계정 관리</PageTitle>
      </BoxDesign>
      <BoxDesign style={{ padding: '30px' }}>
        <SellerSearchBox
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
          handleSearch={handleSearch}
          siteUrl={siteUrl}
          changeSite={changeSite}
          currentPage={currentPage}
          offset={offset}
        />
      </BoxDesign>
    </>
  );
};

export default Title;

const PageTitle = styled.h3`
  padding: 20px 25px;
  font-size: 26px;
`;
