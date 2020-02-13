import React, { useState } from 'react';
import styled from 'styled-components';
import BoxDesign from 'components/BoxDesign';
import SectionTitle from 'components/SectionTitle';
import SectionBody from 'components/SectionBody';
import SalePrice from './SalePrice';
import Discount from './Discount';
import MinimumVolume from './MinimumVolume';
import MaximumVolume from './MaximumVolume';
import ProductTags from './ProductTags';

const SaleInfo = () => {
  const [showContent, setShowContent] = useState(true);

  const onClick = () => {
    setShowContent(!showContent);
  };
  return (
    <BoxDesign>
      <ClickableHeader onClick={onClick}>
        <SectionTitle title="판매 정보" />
      </ClickableHeader>
      <BodyWrapper showContent={showContent}>
        <SectionBody>
          <SalePrice />
          <Discount />
          <MinimumVolume />
          <MaximumVolume />
          <ProductTags />
        </SectionBody>
      </BodyWrapper>
    </BoxDesign>
  );
};

export default SaleInfo;

// Styled Components
const ClickableHeader = styled.div`
  cursor: pointer;
`;

const BodyWrapper = styled.div`
  ${props => (props.showContent ? '' : 'display: none')}
`;
