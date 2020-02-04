import React from 'react';
import styled from 'styled-components';
import SectionField from '../../../../components/SectionField';

const SelectSeller = () => {
  return (
    <SectionField label="셀러선택" isRequired>
      <InputBox placeholder="셀러검색을 해주세요" readOnly />
      <SearchButton>셀러 검색</SearchButton>
    </SectionField>
  );
};

export default SelectSeller;

// Styled Components

const InputBox = styled.input`
  width: 220px;
  background-color: #f8f9fd;
  cursor: not-allowed;
`;

const SearchButton = styled.button`
  width: 100px;
  height: 40px;
  padding: 8px 20px;
  font-size: 13px;
  color: white;
  margin-left: 8px;
  background-color: #36363a;
  border: 1px solid #36363a;
`;
