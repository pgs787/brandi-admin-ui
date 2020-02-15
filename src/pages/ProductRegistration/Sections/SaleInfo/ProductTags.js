import React, { useState } from 'react';
import SectionField from 'components/SectionField';
import CreatableSelect from 'react-select/creatable';
import { connect } from 'react-redux';
import { setProductTags } from 'store/actions';
import { customStylesProductTags } from 'styles/customStyles';

const ProductTags = ({ setProductTags }) => {
  const [tags, setTags] = useState([]);

  const onChange = selectedOptions => {
    if (!selectedOptions) {
      setProductTags([]);
      return;
    }

    let selectedOptionVals = [];
    selectedOptions.map(option => selectedOptionVals.push(option.value));
    setTags(selectedOptionVals);
    setProductTags(selectedOptionVals);
  };

  return (
    <SectionField label="상품 태그 관리" isRequired>
      <CreatableSelect
        onChange={onChange}
        styles={customStylesProductTags}
        placeholder="해시태그(#)를 제외한 상품 태그를 입력해주세요"
        isMulti
      />
    </SectionField>
  );
};

export default connect(null, { setProductTags })(ProductTags);
