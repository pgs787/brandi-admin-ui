import React from 'react';
import styled from 'styled-components';
import SectionField from '../../../../components/SectionField';
import NoImage from '../../../../images/no_image.png';

const ImageUpload = () => {
  return (
    <SectionField
      label="이미지 등록"
      moreInfoText="640 * 720 사이즈 이상 등록 가능하며 확장자는 jpg 만 등록 가능합니다."
    >
      <ImagesWrapper>
        <ImageBoxWrapper>
          <ImageBox>
            <ActualImage src={NoImage} alt="no-image" />
          </ImageBox>
          <ChooseImageButton>대표 이미지 선택</ChooseImageButton>
        </ImageBoxWrapper>
        <ImageBoxWrapper>
          <ImageBox>
            <ActualImage src={NoImage} alt="no-image" />
          </ImageBox>
          <ChooseImageButton>이미지 선택</ChooseImageButton>
        </ImageBoxWrapper>
        <ImageBoxWrapper>
          <ImageBox>
            <ActualImage src={NoImage} alt="no-image" />
          </ImageBox>
          <ChooseImageButton>이미지 선택</ChooseImageButton>
        </ImageBoxWrapper>
        <ImageBoxWrapper>
          <ImageBox>
            <ActualImage src={NoImage} alt="no-image" />
          </ImageBox>
          <ChooseImageButton>이미지 선택</ChooseImageButton>
        </ImageBoxWrapper>
        <ImageBoxWrapper>
          <ImageBox>
            <ActualImage src={NoImage} alt="no-image" />
          </ImageBox>
          <ChooseImageButton>이미지 선택</ChooseImageButton>
        </ImageBoxWrapper>
      </ImagesWrapper>
    </SectionField>
  );
};

export default ImageUpload;

// Styled Components

const ImagesWrapper = styled.div`
  display: flex;
`;

const ImageBoxWrapper = styled.div`
  margin-right: 20px;
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

const ChooseImageButton = styled.button`
  width: 100%;
`;
