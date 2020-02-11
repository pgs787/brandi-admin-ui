import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import SectionField from 'components/SectionField';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { checkPercentage } from 'utils/checkValidation';
import { connect } from 'react-redux';
import {
  setDiscountRate,
  setDiscountedPrice,
  setDiscountPeriod,
} from 'store/actions';

const availableStatus = [{ value: '사용' }, { value: '사용 안함' }];
const discountDateStatus = [{ value: '무기한' }, { value: '기간 설정' }];

const Discount = ({
  salePrice,
  setDiscountRate,
  setDiscountedPrice,
  setDiscountPeriod,
}) => {
  const [activeUseId, setActiveUseId] = useState(0);
  const [activeUseDateId, setActiveUseDateId] = useState(0);
  const [discountRateLocal, setDiscountRateLocal] = useState('');
  const [discountedPriceLocal, setDiscountedPriceLocal] = useState(salePrice);
  const [discountAmountLocal, setDiscountAmountLocal] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [startingDateTime, setStartingDateTime] = useState(new Date());
  const [endingDateTime, setEndingDateTime] = useState(new Date());

  // 판매가 변경시 할인정보 초기화
  useEffect(() => {
    setDiscountedPriceLocal(salePrice);
    setDiscountRateLocal('');
    setDiscountAmountLocal('');
    setDiscountRate(0);
    setDiscountedPrice(salePrice);
  }, [salePrice]);

  // '사용 안함' 선택 시 할인정보 초기화
  useEffect(() => {
    if (activeUseId === 1) {
      setDiscountRateLocal('');
      setDiscountedPriceLocal(salePrice);
      setDiscountAmountLocal('');
      setDiscountRate(0);
      setDiscountedPrice(salePrice);
    }
  }, [activeUseId]);

  const round = num => {
    num = parseFloat(num);
    return Math.round(num / 10) * 10;
  };

  const onClickUse = id => {
    setActiveUseId(id);
  };

  const onClickUseDate = id => {
    setActiveUseDateId(id);
  };

  const onChangeDiscountRate = e => {
    const discountPercentage = e.target.value;

    // 퍼센트값 validation
    if (!checkPercentage(discountPercentage)) {
      setIsValid(false);
    } else {
      setIsValid(true);
      setDiscountRateLocal(discountPercentage);
      setDiscountedPriceLocal(
        round(((100 - discountPercentage) / 100) * salePrice),
      );
      setDiscountAmountLocal(salePrice * (discountPercentage / 100));
    }

    // 스토어 업데이트
    setDiscountRate(discountPercentage);
    setDiscountedPrice(round(((100 - discountPercentage) / 100) * salePrice));
  };

  // 할인 시작 날짜 선택
  const onChangeStartingDate = date => {
    setStartingDateTime(date);
  };

  // 할인 종료 날짜 선택
  const onChangeEndingDate = date => {
    setEndingDateTime(date);
  };

  // 컴마를 포함한 금액 표시를 위한 함수 정리
  const calcDiscountedPrice = discountedPrice => {
    // 빈칸일 시 에러방지를 위해 0원으로 치환
    return isNaN(parseInt(discountedPrice))
      ? (0).toLocaleString('ko-KR')
      : parseInt(discountedPrice).toLocaleString('ko-KR');
  };

  const calcDiscountAmount = discountAmount => {
    // 빈칸일 시 에러방지를 위해 0원으로 치환
    return isNaN(parseInt(discountAmount))
      ? (0).toLocaleString('ko-KR')
      : parseInt(discountAmount).toLocaleString('ko-KR');
  };

  return (
    <SectionField
      label="할인"
      moreInfoText={[
        '할인판매가 = 판매가 * 할인율',
        '할인 판매가를 입력하시면 판매가 정보가 자동 계산되어집니다.',
      ]}
    >
      <ButtonGroupWrapper>
        {availableStatus.map((status, idx) => (
          <OptionButton
            key={idx}
            id={idx}
            onClick={() => onClickUse(idx)}
            isActive={activeUseId === idx}
          >
            {status.value}
          </OptionButton>
        ))}
      </ButtonGroupWrapper>
      {activeUseId === 0 && (
        <DiscountDetailsWrapper>
          <FormWrapper>
            <FormLabel>할인율</FormLabel>
            <DiscountInputBoxWrapper>
              <InputTag
                value={discountRateLocal}
                type="number"
                min="0"
                max="100"
                onChange={onChangeDiscountRate}
                placeholder="0"
                onKeyDown={e =>
                  (e.keyCode === 69 ||
                    e.keyCode === 190 ||
                    e.keyCode === 187 ||
                    e.keyCode === 189) &&
                  e.preventDefault()
                }
                isValid={isValid}
              />
              <TagSpan>%</TagSpan>
            </DiscountInputBoxWrapper>
          </FormWrapper>
          <FormWrapper>
            <FormLabel>할인가</FormLabel>
            <DiscountWrapper>
              <DiscountedPriceWrapper>
                <DiscountedPrice>
                  {calcDiscountedPrice(discountedPriceLocal)}
                </DiscountedPrice>
                <WonSpan>원</WonSpan>
                <DiscountAmount>
                  {`(${calcDiscountAmount(discountAmountLocal)}원 할인)`}
                </DiscountAmount>
              </DiscountedPriceWrapper>
            </DiscountWrapper>
          </FormWrapper>
          <TempField>
            <FormLabel>할인기간</FormLabel>
            {/* <RadioGroupWrapper>
              {discountDateStatus.map((status, idx) => (
                <>
                  <RadioButton
                    type="radio"
                    key={idx}
                    id={idx}
                    onClick={() => onClickUseDate(idx)}
                    checked={activeUseDateId === idx}
                  />
                  <RadioOptionLabel>{status.value}</RadioOptionLabel>
                </>
              ))}
            </RadioGroupWrapper> */}
            {/* {activeUseDateId === 1 && ( */}
            {/* <DateRangeWrapper> */}
            <DatePickerWrapper>
              <DatePicker
                selected={startingDateTime}
                onChange={onChangeStartingDate}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={30}
                timeCaption="time"
                dateFormat="yyyy-MM-dd h:mm aa"
              />
            </DatePickerWrapper>
            <CalendarButton>~</CalendarButton>
            <DatePickerWrapper>
              <DatePicker
                selected={endingDateTime}
                onChange={onChangeEndingDate}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={30}
                timeCaption="time"
                dateFormat="yyyy-MM-dd h:mm aa"
              />
            </DatePickerWrapper>
            {/* </DateRangeWrapper> */}
            {/* )} */}
          </TempField>
        </DiscountDetailsWrapper>
      )}
    </SectionField>
  );
};

const mapStateToProps = state => {
  return {
    salePrice: state.saleInfo.salePrice,
  };
};

export default connect(mapStateToProps, {
  setDiscountRate,
  setDiscountedPrice,
  setDiscountPeriod,
})(Discount);

// Styled Components

const DiscountDetailsWrapper = styled.div`
  margin-top: 20px;
  width: 350px;
`;

const FormWrapper = styled.form`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const FormLabel = styled.label`
  min-width: 120px;
  display: flex;
  align-items: center;
`;

const DiscountInputBoxWrapper = styled.div`
  width: 100%;
  display: flex;
`;

const InputTag = styled.input`
  width: 100%;
  background-color: #f8f9fd;
  &:focus {
    border-color: #999999;
    background-color: white;
    ${props => !props.isValid && 'border: 1px solid red'}
  }
`;

const TagSpan = styled.div`
  width: 50px;
  background-color: #f8f9fd;
  height: 40px;
  font-size: 14px;
  border: 1px solid #dbdde2;
  border-left: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #555555;
`;

const DiscountWrapper = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
`;

const DiscountedPriceWrapper = styled.div`
  color: #1088ed;
`;

const DiscountedPrice = styled.span`
  font-size: 22px;
  font-weight: bold;
`;

const WonSpan = styled.span`
  font-size: 18px;
`;

const DiscountAmount = styled.span`
  font-size: 12px;
  margin-left: 3px;
`;

const ButtonGroupWrapper = styled.div`
  display: flex;
`;

const RadioGroupWrapper = styled.div`
  display: flex;
  width: 300px;
`;

const RadioButton = styled.input`
  width: 20px;
`;

const RadioOptionLabel = styled.label`
  width: 80px;
  padding-left: 5px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const DateRangeWrapper = styled.div``;

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

const TempField = styled.div`
  position: relative;
  display: flex;
  margin-bottom: 20px;
  width: 500px;
`;

const DatePickerWrapper = styled.div``;

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
