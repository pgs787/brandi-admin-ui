import React, { useState } from 'react';
import styled from 'styled-components';
import SectionField from 'components/SectionField';
import NoImage from '../../../../images/no_image.png';

const ImageUpload = () => {
  const [repImage, setRepImage] = useState(NoImage);
  const [secondImage, setSecondImage] = useState(NoImage);

  const onChangeRepImage = e => {
    if (!e.target.files.length) {
      return;
    }

    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('image_file', file);
    formData.append('image_size', 'medium');

    console.log(e.target.files);
    fetch('http://192.168.1.196:5000/product/image', {
      method: 'POST',
      body: formData,
    })
      .then(res => res.json())
      .then(res => setRepImage(res.image_url))
      .catch(err => console.log(err));
  };

  return (
    <SectionField
      label="이미지 등록"
      moreInfoText="640 * 720 사이즈 이상 등록 가능하며 확장자는 jpg 만 등록 가능합니다."
      isRequired
    >
      <ImagesWrapper>
        <ImageBoxWrapper>
          <ImageBox>
            <ActualImage src={repImage} alt="no-image" />
          </ImageBox>
          <UploadButtonWrapper>
            <ChooseImageButton
              id="file"
              type="file"
              accept=".jpg"
              onChange={onChangeRepImage}
            />
            <ChooseImageButtonLabel htmlFor="file">
              대표 이미지 선택
            </ChooseImageButtonLabel>
          </UploadButtonWrapper>
        </ImageBoxWrapper>
        <ImageBoxWrapper>
          <ImageBox>
            <ActualImage src={NoImage} alt="no-image" />
          </ImageBox>
          <UploadButtonWrapper>
            <ChooseImageButton id="file" type="file" accept=".jpg" />
            <ChooseImageButtonLabel htmlFor="file">
              이미지 선택
            </ChooseImageButtonLabel>
          </UploadButtonWrapper>
        </ImageBoxWrapper>
        <ImageBoxWrapper>
          <ImageBox>
            <ActualImage src={NoImage} alt="no-image" />
          </ImageBox>
          <UploadButtonWrapper>
            <ChooseImageButton id="file" type="file" accept=".jpg" />
            <ChooseImageButtonLabel htmlFor="file">
              이미지 선택
            </ChooseImageButtonLabel>
          </UploadButtonWrapper>
        </ImageBoxWrapper>
        <ImageBoxWrapper>
          <ImageBox>
            <ActualImage src={NoImage} alt="no-image" />
          </ImageBox>
          <UploadButtonWrapper>
            <ChooseImageButton id="file" type="file" accept=".jpg" />
            <ChooseImageButtonLabel htmlFor="file">
              이미지 선택
            </ChooseImageButtonLabel>
          </UploadButtonWrapper>
        </ImageBoxWrapper>
        <ImageBoxWrapper>
          <ImageBox>
            <ActualImage src={NoImage} alt="no-image" />
          </ImageBox>
          <UploadButtonWrapper>
            <ChooseImageButton id="file" type="file" accept=".jpg" />
            <ChooseImageButtonLabel htmlFor="file">
              이미지 선택
            </ChooseImageButtonLabel>
          </UploadButtonWrapper>
        </ImageBoxWrapper>
      </ImagesWrapper>
    </SectionField>
  );
};

export default ImageUpload;

// Styled Components

const ImagesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

const ImageBoxWrapper = styled.div`
  margin-right: 10px;
`;

const ImageBox = styled.div`
  width: 180px;
  height: 180px;
  padding: 4px;
  margin-bottom: 5px;
  border: 1px solid #ddd;
`;

const ActualImage = styled.img`
  width: 100%;
  height: 100%;
`;

const UploadButtonWrapper = styled.div`
  height: 34px;
`;

const ChooseImageButton = styled.input.attrs({
  type: 'file',
  id: 'file',
  accept: '.jpg',
})`
  border: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  overflow: hidden;
  padding: 0;
  position: absolute !important;
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
