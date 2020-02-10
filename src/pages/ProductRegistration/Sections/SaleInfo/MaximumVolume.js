import React, { useState } from 'react';
import styled from 'styled-components';
import SectionField from 'components/SectionField';
import { connect } from 'react-redux';

const MaximumVolume = () => {
  const [maxVolumeLocal, setMaxVolumeLocal] = useState(1);
  const [isValid, setIsValid] = useState(true);

  const onChange = e => {
    const val = e.target.value;
    setMaxVolumeLocal(val);

    // 숫자 1~20 만 가능
    val < 1 || val > 20 ? setIsValid(false) : setIsValid(true);
  };

  return (
    <SectionField
      label="최대판매수량"
      moreInfoText="20개를 초과하여 설정하실 수 없습니다"
    >
      <InputTag
        type="number"
        value={maxVolumeLocal}
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
      개 이하
    </SectionField>
  );
};

export default MaximumVolume;

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
