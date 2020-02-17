import React from 'react';
import styled from 'styled-components';
import BoxDesign from 'components/BoxDesign';
import Navigation from 'components/Navigation/Navigation';
import Title from './Title';
import UserTable from './Table';

const UserManagement = () => {
  return (
    <Navigation>
      <PageWrapper>
        <Title />
        <BoxDesign>
          <UserTable />
        </BoxDesign>
      </PageWrapper>
    </Navigation>
  );
};

export default UserManagement;

const PageWrapper = styled.div`
  padding: 25px 20px 20px;
  background-color: #edf0f5;
`;
