import React from 'react';
import SectionField from '../../../../components/SectionField';
import InputBox from '../../../../components/InputBox';

const YoutubeLink = () => {
  return (
    <SectionField
      style={{ borderBottom: 'none' }}
      label="유튜브 영상 URL"
      moreInfoText={
        'https://www.YoutubeLink.com 또는 https://youtu.be로 시작하는 URL만 등록 가능합니다.'
      }
    >
      <InputBox placeholder="https://youtu.be/" />
    </SectionField>
  );
};

export default YoutubeLink;
