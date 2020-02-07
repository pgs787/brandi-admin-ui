import React, { useState } from 'react';
import styled from 'styled-components';
import Select from 'react-select';

const customStyles = {
  control: () => ({
    width: 120,
    height: 30,
    borderRadius: 0,
    fontSize: 12,
    border: '1px solid #dbdde2',
    display: 'flex',
    alignItems: 'center'
  }),
  indicatorsContainer: () => null
};

const SellerName = () => {
  const [selectedOptionFirst, setSelectedOptionFirst] = useState(null);

  const onChangeFirst = ({ value }) => {
    setSelectedOptionFirst(value);
  };

  return (
    <DivListWrapper>
      <LabelListName>셀러명</LabelListName>
      <DivListContent>
        <InputName placeholder="검색어를 입력하세요." />
        <DivSelectorWrap>
          <Select
            onChange={onChangeFirst}
            options={[
              { value: 'option1', label: 'Option 1' },
              { value: 'option2', label: 'Option 2' },
              { value: 'option3', label: 'Option 3' }
            ]}
            styles={customStyles}
            placeholder="Select"
          />
          <InputName placeholder="검색어를 입력하세요." />
        </DivSelectorWrap>
      </DivListContent>
    </DivListWrapper>
  );
};

export default SellerName;

const DivListWrapper = styled.div`
  display: flex;
  padding: 15px 25px 5px;
  align-items: center;
  min-width: 885px;
`;

const LabelListName = styled.label`
  display: inline-block;
  font-weight: 500;
  font-size: 15px;
  width: 100px;
`;

const DivListContent = styled.div`
  margin-left: 40px;
  display: flex;
`;

const InputName = styled.input`
  display: inline-block;
  font-size: 13px;
  width: 300px;
  height: 30px;
  padding: 6px 10px;
  color: #333333;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  transition: border-color ease-in-out 0.3s, box-shadow ease-in-out 0.3s;
  &:focus {
    border-color: #999999;
    outline: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
`;

const DivSelectorWrap = styled.div`
  margin-left: 30px;
  display: flex;
`;
