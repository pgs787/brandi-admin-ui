import React from 'react';
import SectionField from 'components/SectionField';
import InputBox from 'components/InputBox';
import { connect } from 'react-redux';
import { setProductName } from 'store/actions';

const ProductName = ({ setProductName }) => {
  const onChange = value => {
    if (value.length >= 200) {
      alert('상품명은 200자 이내로 작성해주세요.');
      return;
    }
    setProductName(value);
  };

  return (
    <SectionField
      label="상품명"
      moreInfoText={
        '상품명에는 쌍따옴표(") 또는 홑따옴표(\')를 포함할 수 없습니다.'
      }
      isRequired
    >
      <InputBox onChange={onChange} placeholder="상품명을 입력해주세요" />
    </SectionField>
  );
};

export default connect(null, { setProductName })(ProductName);
