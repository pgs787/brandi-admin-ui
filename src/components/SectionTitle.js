import React from 'react';
import styled from 'styled-components';

const SectionTitle = ({ title }) => {
  return (
    <SectionTitleWrapper>
      <TitleContent>{title}</TitleContent>
    </SectionTitleWrapper>
  );
};

export default SectionTitle;

// Styled Components

const SectionTitleWrapper = styled.div`
  border-bottom: 1px solid #ddd;
  padding: 20px 25px;
`;

const TitleContent = styled.div`
  font-size: 15px;
  display: flex;
  align-items: center;
  font-weight: bold;
`;
