import React from 'react';
import styled from 'styled-components';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

const MoreInfo = ({ text }) => {
  return (
    <MoreInfoTextWrapper>
      {Array.isArray(text) ? (
        text.map((content, idx) => (
          <MoreInfoText key={idx}>
            <ErrorOutlineIcon
              key={idx}
              style={{ width: '17px', marginRight: '2px' }}
            />
            {content}
          </MoreInfoText>
        ))
      ) : (
        <MoreInfoText>
          <ErrorOutlineIcon style={{ width: '17px', marginRight: '2px' }} />
          {text}
        </MoreInfoText>
      )}
    </MoreInfoTextWrapper>
  );
};

export default MoreInfo;

// Styled Components
const MoreInfoTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 7px;
`;

const MoreInfoText = styled.div`
  color: #1e90ff;
  font-size: 13px;
  display: flex;
  align-items: center;
`;
