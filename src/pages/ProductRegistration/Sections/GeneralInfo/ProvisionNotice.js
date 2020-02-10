import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import SectionField from 'components/SectionField';
import TodayIcon from '@material-ui/icons/Today';
import DatePicker from 'react-datepicker';
import Select from 'react-select';
import { connect } from 'react-redux';
import {
  setManufacturer,
  setManufactureDate,
  setOriginCountry,
} from 'store/actions';
import ToggleButtonGroup from 'components/ToggleButtonGroup';
import 'react-datepicker/dist/react-datepicker.css';

// 버튼 옵션
const availableStatus = [
  { value: '상품상세 참조', label: '상품상세 참조' },
  { value: '직접입력', label: '직접입력' },
];

// 원산지 옵션
const availableOptions = [
  { value: '기타', label: '기타' },
  { value: '중국', label: '중국' },
  { value: '한국', label: '한국' },
  { value: '베트남', label: '베트남' },
];

// 원산지 select tag 커스텀 스타일링
const customStyles = {
  control: () => ({
    height: 40,
    borderRadius: 0,
    fontSize: 12,
    border: '1px solid #dbdde2',
    display: 'flex',
    alignItems: 'center',
  }),
  container: base => ({
    ...base,
    width: '100%',
  }),
  indicatorsContainer: () => null,
};

const ProvisionNotice = ({
  setManufacturer,
  setManufactureDate,
  setOriginCountry,
}) => {
  // 버튼 상태값 (디폴트: '상품상세 참조')
  const [active, setActive] = useState('상품상세 참조');
  // 제조사(수입사) 상태값
  const [manufacturerText, setManufacturerText] = useState('');
  // 제조일자 상태값
  const [date, setDate] = useState('');
  // 원산지 상태값
  const [selectedOption, setSelectedOption] = useState('');

  // 상품상세 참조 버튼 누를 시 모든 상태 초기화
  useEffect(() => {
    if (active === '상품상세 참조') {
      setManufacturerText('');
      setDate('');
      setSelectedOption('');
      // 액션 함수 (store)
      setManufacturer('');
      setManufactureDate('');
      setOriginCountry('');
    }
  }, [active]);

  // 버튼 선택
  const onClick = value => {
    setActive(value);
  };

  // 제조사(수입사) 값 핸들링
  const onChangeManufacturer = e => {
    setManufacturerText(e.target.value);
    // 액션 함수 (store)
    setManufacturer(e.target.value);
  };

  // 제조일자 값 핸들링
  const onChangeDate = date => {
    setDate(date);
    // 액션 함수 (store)
    setManufactureDate(date);
  };

  // 원산지 값 핸들링
  const onChangeOption = ({ value }) => {
    setSelectedOption(value);
    // 액션 함수 (store)
    setOriginCountry(value);
  };

  return (
    <SectionField label="상품 정보 고시" isRequired>
      <ToggleButtonGroup
        options={availableStatus}
        onClick={onClick}
        defaultVal="상품상세 참조"
      ></ToggleButtonGroup>
      {active === '직접입력' && (
        <ProvisionNoticeDetailsWrapper>
          <FormWrapper>
            <FormLabel>제조사(수입사):</FormLabel>
            <InputTag
              value={manufacturerText}
              onChange={onChangeManufacturer}
              placeholder="제조사(수입사)를 입력해주세요"
            />
          </FormWrapper>
          <TempField>
            <FormLabel>제조일자:</FormLabel>
            <DatePicker
              selected={date}
              onChange={onChangeDate}
              dateFormat="yyyy-MM-dd"
            />
            <CalendarButton>
              <TodayIcon />
            </CalendarButton>
          </TempField>
          <FormWrapper>
            <FormLabel>원산지:</FormLabel>
            <Select
              onChange={onChangeOption}
              options={availableOptions}
              styles={customStyles}
              placeholder="원산지"
            />
          </FormWrapper>
        </ProvisionNoticeDetailsWrapper>
      )}
    </SectionField>
  );
};

// 스토어 연결
export default connect(null, {
  setManufacturer,
  setManufactureDate,
  setOriginCountry,
})(ProvisionNotice);

// Styled Components
const TempField = styled.div`
  position: relative;
  display: flex;
  margin-bottom: 5px;
`;

const ProvisionNoticeDetailsWrapper = styled.div`
  margin-top: 20px;
  width: 350px;
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
  width: 50px;
  padding: 0;
  border: 1px solid #dbdde2;
  position: absolute;
  right: 0;
  pointer-events: none;
  display: flex;
  justify-content: center;
`;

const ButtonGroupWrapper = styled.div``;

const OptionButton = styled.button`
  border: 1px solid #ddd;
  width: 140px;
  padding: 8px 20px;
  font-size: 13px;
  color: #767a83;
  ${props =>
    props.isActive &&
    css`
      color: white;
      background-color: #36363a;
      border: 1px solid #36363a;
    `}
`;

const InputTag = styled.input`
  width: 100%;
  background-color: #f8f9fd;
  &:focus {
    border-color: #999999;
    background-color: white;
  }
`;
