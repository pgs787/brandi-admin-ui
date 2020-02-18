import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SectionField from 'components/SectionField';

const ImgUpload = ({ label, text, isRequired, id, repImage, onChange }) => {
  return (
    <SectionField label={label} moreInfoText={text} isRequired={isRequired}>
      <ImageBox>
        <ActualImage src={repImage} alt="no-image" />
      </ImageBox>
      <UploadButtonWrapper>
        <ChooseImageButton id={id} onChange={onChange} />
        <ChooseImageButtonLabel htmlFor={id}>
          이미지 선택
        </ChooseImageButtonLabel>
      </UploadButtonWrapper>
    </SectionField>
  );
};

export default ImgUpload;

const ImageBox = styled.div`
  width: 130px;
  height: 100px;
  padding: 4px;
  margin-bottom: 5px;
  border: 1px solid #ddd;
`;

const ActualImage = styled.img`
  width: 120px;
  height: 90px;
  display: block;
  margin: 0 auto;
  max-height: 100%;
`;

const UploadButtonWrapper = styled.div`
  width: 130px;
  height: 34px;
`;

const ChooseImageButton = styled.input.attrs({
  type: 'file',
  accept: '.jpg',
})`
  border: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const ChooseImageButtonLabel = styled.label`
  border: 1px solid #ddd;
  display: inline-block;
  width: 100%;
  height: 100%;
  font-size: 13px;
  color: #767a83;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    color: white;
    background-color: #36363a;
    border: 1px solid #36363a;
  }
`;
