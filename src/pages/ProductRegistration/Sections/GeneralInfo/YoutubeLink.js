import React from 'react';
import SectionField from 'components/SectionField';
import InputBox from 'components/InputBox';
import { connect } from 'react-redux';
import { setYoutubeUrl } from 'store/actions';

const YoutubeLink = ({ setYoutubeUrl }) => {
  const onChange = value => {
    if (value.length >= 400) {
      alert('Youtube 영상 URL은 400자 이내로 작성해주세요.');
      return;
    }
    setYoutubeUrl(value);
  };

  return (
    <SectionField
      style={{ borderBottom: 'none' }}
      label="유튜브 영상 URL"
      moreInfoText={
        'https://www.youtube.com 또는 https://youtu.be로 시작하는 URL만 등록 가능합니다.'
      }
    >
      <InputBox onChange={onChange} placeholder="https://youtu.be/" />
    </SectionField>
  );
};

export default connect(null, { setYoutubeUrl })(YoutubeLink);
