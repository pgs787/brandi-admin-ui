import React, { useState } from 'react';
import styled from 'styled-components';
import BoxDesign from '../../components/BoxDesign';
import Navigation from '../../components/Navigation/Navigation';
import GeneralInfo from './GeneralInfo';
import BusinessInfo from './BusinessInfo';
import DetailInfo from './DetailInfo';
import DeliveryInfo from './DeliveryInfo';
import ButtonGroup from './GeneralInfo/ButtonGroup';
import Loading from 'components/Loading';

const SellerInfo = ({ match }) => {
  const [loading, setLoading] = useState(false);

  return (
    <Navigation>
      {loading && <Loading />}
      <PageWrapper>
        <BoxDesign>
          <PageTitle>
            셀러 정보 수정페이지 <RequiredSpan>* 필수 항목</RequiredSpan>
          </PageTitle>
        </BoxDesign>
        <GeneralInfo match={match} />
        <BusinessInfo match={match} />
        <DetailInfo setLoading={setLoading} match={match} />
        <DeliveryInfo match={match} />
        <ButtonGroup />
      </PageWrapper>
    </Navigation>
  );
};

export default SellerInfo;

const PageWrapper = styled.div`
  padding: 25px 20px 20px;
  background-color: #edf0f5;
`;

const PageTitle = styled.h3`
  padding: 20px 25px;
  font-size: 26px;
`;

const RequiredSpan = styled.small`
  font-size: 14px;
  margin-left: 8px;
  color: red;
`;
