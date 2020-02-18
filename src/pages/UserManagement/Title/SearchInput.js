import React from 'react';
import styled from 'styled-components';

const SearchInput = ({ title, value, onChangeInput }) => {
  return (
    <DivListWrapper>
      <LabelListName>{title}</LabelListName>
      <DivListContent>
        <InputList
          placeholder="검색어를 입력하세요."
          value={value}
          onChange={e => onChangeInput(e.target.value)}
        />
      </DivListContent>
    </DivListWrapper>
  );
};

export default SearchInput;

const DivListWrapper = styled.div`
  display: flex;
  padding: 15px 25px 5px;
  align-items: center;
  min-width: 500px;
`;

const LabelListName = styled.label`
  display: inline-block;
  font-weight: 500;
  font-size: 15px;
  width: 100px;
`;

const DivListContent = styled.div`
  margin-left: 40px;
`;

const InputList = styled.input`
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
    box-shadow: none;
  }
`;
