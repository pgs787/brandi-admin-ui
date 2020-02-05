import React, { useState } from 'react';
import styled from 'styled-components';
import SectionField from '../../../../components/SectionField';
import { connect } from 'react-redux';

const MinimumVolume = () => {
  const [minVolumeLocal, setMinVolumeLocal] = useState(1);
  const [isValid, setIsValid] = useState(true);

  const onChange = e => {
    const val = e.target.value;
    setMinVolumeLocal(val);

    val < 1 || val > 20 ? setIsValid(false) : setIsValid(true);
  };

  return (
    <SectionField
      label="최소판매수량"
      moreInfoText="20개를 초과하여 설정하실 수 없습니다"
    >
      <InputTag
        type="number"
        value={minVolumeLocal}
        onChange={onChange}
        onKeyDown={e =>
          (e.keyCode === 69 ||
            e.keyCode === 190 ||
            e.keyCode === 187 ||
            e.keyCode === 189) &&
          e.preventDefault()
        }
        isValid={isValid}
      />
      개 이상
    </SectionField>
  );
};

export default MinimumVolume;

// Styled Components

const InputTag = styled.input`
  width: 100px;
  background-color: #f8f9fd;
  &:focus {
    border-color: #999999;
    background-color: white;
    ${props => !props.isValid && 'border: 1px solid red'}
  }
  margin-right: 5px;
`;
