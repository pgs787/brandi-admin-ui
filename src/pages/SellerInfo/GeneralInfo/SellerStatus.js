import React from 'react';
import styled from 'styled-components';
import SectionField from 'components/SectionField';

const SellerStatus = () => {
  return (
    <SectionField label="셀러 상태">
      <PSellerStatus>입점</PSellerStatus>
    </SectionField>
  );
};

export default SellerStatus;

const PSellerStatus = styled.p`
  font-size: 14px;
  min-width: 220px;
  padding: 7px 0;
`;
