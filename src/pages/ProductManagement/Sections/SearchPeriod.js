import React, { useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';

const SearchPeriod = ({
  startingDateTime,
  endingDateTime,
  onChangeStartingDate,
  onChangeEndingDate,
}) => {
  const validateDateRange = () => {
    if (startingDateTime > endingDateTime) return false;
    else return true;
  };

  return (
    <DivListWrapper>
      <LabelListName>조회기간</LabelListName>
      <DivListContent>
        <DatePickerWrapper>
          <DatePicker
            selected={startingDateTime}
            onChange={onChangeStartingDate}
            format="yy-mm-dd"
          />
        </DatePickerWrapper>
        <CalendarButton>~</CalendarButton>
        <DatePickerWrapper>
          <DatePicker
            selected={endingDateTime}
            onChange={onChangeEndingDate}
            format="yy-mm-dd"
          />
        </DatePickerWrapper>
        {!validateDateRange() && <PErrMsg>올바른 날짜를 입력해주세요.</PErrMsg>}
      </DivListContent>
    </DivListWrapper>
  );
};

export default SearchPeriod;

const DivListWrapper = styled.div`
  display: flex;
  padding: 15px 25px 5px;
  align-items: center;
`;

const LabelListName = styled.label`
  display: inline-block;
  font-weight: 500;
  font-size: 15px;
  width: 100px;
`;
const CalendarButton = styled.div`
  background-color: #f8f9fd;
  height: 40px;
  width: 40px;
  padding: 0;
  border: 1px solid #dbdde2;
  border-left: none;
  border-right: none;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DatePickerWrapper = styled.div``;

const DivListContent = styled.div`
  margin-left: 40px;
  display: flex;
  align-items: center;
`;

const PErrMsg = styled.p`
  color: red;
  font-size: 13px;
  margin-left: 20px;
`;
