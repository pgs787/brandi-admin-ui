import React, { useState } from 'react';
import styled from 'styled-components';
import BoxDesign from 'components/BoxDesign';
import SectionTitle from 'components/SectionTitle';
import SectionBody from 'components/SectionBody';
import UseRelationProduct from './UseRelationProduct';

const RelationProduct = () => {
  const [showContent, setShowContent] = useState(true);

  const onClick = () => {
    setShowContent(!showContent);
  };
  return (
    <BoxDesign>
      <ClickableHeader onClick={onClick}>
        <SectionTitle title="코디 상품" />
      </ClickableHeader>
      <BodyWrapper showContent={showContent}>
        <SectionBody>
          <UseRelationProduct />
        </SectionBody>
      </BodyWrapper>
    </BoxDesign>
  );
};

export default RelationProduct;

// Styled Components
const ClickableHeader = styled.div`
  cursor: pointer;
`;

const BodyWrapper = styled.div`
  ${props => (props.showContent ? '' : 'display: none')}
`;
