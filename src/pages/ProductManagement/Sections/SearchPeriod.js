import React, { useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';

const SearchPeriod = () => {
  const [startingDateTime, setStartingDateTime] = useState(new Date());
  const [endingDateTime, setEndingDateTime] = useState(new Date());

  const onChangeStartingDate = date => {
    setStartingDateTime(date);
  };

  const onChangeEndingDate = date => {
    setEndingDateTime(date);
    console.log(date);
  };

  return (
    <DivListWrapper>
      <LabelListName>조회기간</LabelListName>
      <DivListContent>
        <DatePickerWrapper>
          <DatePicker
            selected={startingDateTime}
            onChange={onChangeStartingDate}
            dateFormat="yyyy-MM-dd"
          />
        </DatePickerWrapper>
        <CalendarButton>~</CalendarButton>
        <DatePickerWrapper>
          <DatePicker
            selected={endingDateTime}
            onChange={onChangeEndingDate}
            dateFormat="yyyy-MM-dd"
          />
        </DatePickerWrapper>
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
`;
