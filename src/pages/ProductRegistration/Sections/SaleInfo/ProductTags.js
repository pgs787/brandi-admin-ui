import React, { useState } from 'react';
import SectionField from 'components/SectionField';
import CreatableSelect from 'react-select/creatable';
import { connect } from 'react-redux';

const customStyles = {
  control: () => ({
    height: 40,
    borderRadius: 0,
    fontSize: 13,
    border: '1px solid #dbdde2',
    display: 'flex',
    alignItems: 'center',
  }),
  container: base => ({
    ...base,
    width: '600px',
  }),
};

const ProductTags = () => {
  const [tags, setTags] = useState([]);

  const onChange = selectedOptions => {
    let selectedOptionVals = [];
    selectedOptions.map(option => selectedOptionVals.push(option.value));
    setTags(selectedOptionVals);
  };

  return (
    <SectionField label="상품 태그 관리" isRequired>
      <CreatableSelect
        onChange={onChange}
        styles={customStyles}
        placeholder="해시태그(#)를 제외한 상품 태그를 입력해주세요"
        isMulti
      />
    </SectionField>
  );
};

export default ProductTags;
