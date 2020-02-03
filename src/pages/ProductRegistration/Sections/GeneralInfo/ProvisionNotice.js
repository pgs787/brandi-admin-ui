import React from 'react';
import styled from 'styled-components';
import SectionField from '../../../../components/SectionField';
import ToggleButtonGroup from '../../../../components/ToggleButtonGroup';
import InputBox from '../../../../components/InputBox';
import SelectBox from '../../../../components/SelectBox';
import TodayIcon from '@material-ui/icons/Today';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const ProvisionNotice = () => {
  const [isDirectInput] = React.useState(true);
  const [date, setDate] = React.useState(new Date());

  const onChange = date => {
    setDate(date);
  };

  return (
    <SectionField label="상품 정보 고시">
      <ToggleButtonGroup options={['상품상세 참조', '직접입력']} />
      {isDirectInput && (
        <ProvisionNoticeDetailsWrapper>
          <FormWrapper>
            <FormLabel>제조사(수입사):</FormLabel>
            <InputBox placeholder="제조사(수입사)를 입력해주세요" />
          </FormWrapper>
          <TempField>
            <FormLabel>제조일자:</FormLabel>
            <DatePicker
              selected={date}
              onChange={onChange}
              dateFormat="yyyy-MM-dd"
            />
            <CalendarButton>
              <TodayIcon />
            </CalendarButton>
          </TempField>
          <FormWrapper>
            <FormLabel>원산지:</FormLabel>
            <SelectBox defaultValue="한국">
              <option value="기타">기타</option>
              <option value="중국">중국</option>
              <option value="한국">한국</option>
              <option value="베트남">베트남</option>
            </SelectBox>
          </FormWrapper>
        </ProvisionNoticeDetailsWrapper>
      )}
    </SectionField>
  );
};

export default ProvisionNotice;

// Styled Components
const TempField = styled.div`
  position: relative;
  display: flex;
  margin-bottom: 5px;
`;

const ProvisionNoticeDetailsWrapper = styled.div`
  margin-top: 20px;
  width: 400px;
`;

const FormWrapper = styled.form`
  display: flex;
  margin-bottom: 5px;
`;

const FormLabel = styled.label`
  min-width: 120px;
  display: flex;
  align-items: center;
`;

const CalendarButton = styled.button`
  background-color: #f8f9fd;
  height: 40px;
  width: 70px;
  border: 1px solid #dbdde2;
  position: absolute;
  right: 0;
  pointer-events: none;
`;
