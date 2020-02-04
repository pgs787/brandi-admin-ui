import React, { useState } from 'react';
import styled from 'styled-components';
import SectionField from '../../../../components/SectionField';
import { connect } from 'react-redux';
import { setYoutubeUrl } from '../../../../redux/actions';

const YoutubeLink = ({ setYoutubeUrl }) => {
  const [youtubeUrlLocal, setYoutubeUrlLocal] = useState('');

  const onChange = e => {
    setYoutubeUrlLocal(e.target.value);
    setYoutubeUrl(e.target.value);
  };

  return (
    <SectionField
      style={{ borderBottom: 'none' }}
      label="유튜브 영상 URL"
      moreInfoText={
        'https://www.YoutubeLink.com 또는 https://youtu.be로 시작하는 URL만 등록 가능합니다.'
      }
    >
      <InputTag
        value={youtubeUrlLocal}
        onChange={onChange}
        placeholder="https://youtu.be/"
      />
    </SectionField>
  );
};

export default connect(null, { setYoutubeUrl })(YoutubeLink);

// Styled Components

const InputTag = styled.input`
  width: 100%;
  background-color: #f8f9fd;
  &:focus {
    border-color: #999999;
    background-color: white;
  }
`;
