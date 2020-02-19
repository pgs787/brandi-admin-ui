import React, { useState } from 'react';
import styled from 'styled-components';
import Select from 'react-select';

//redux
import { connect } from 'react-redux';
import {
  setBeforePage,
  setAfterPage,
  selectedPage,
  setShowList,
} from 'store/actions';
const customStyles = {
  control: styles => ({
    ...styles,
    width: 100,
    height: 35,
  }),
  input: styles => ({
    ...styles,
    height: 25,
    display: 'flex',
    alignItems: 'center',
  }),
};

const ShowPage = ({
  setBeforePage,
  setAfterPage,
  selectedPage,
  setShowList,
  currentPage,
  totalProductCount,
  maxPage,
}) => {
  const [offset, setOffset] = useState({ label: 10, value: 10 });

  const showListChange = value => {
    setOffset(value);
    selectedPage(1);
    setShowList(value);
  };

  const pageChange = e => {
    selectedPage(e.target.value);
  };

  const handleButton = value => {
    if (value === 'plus' && currentPage < maxPage) {
      setAfterPage();
      console.log(currentPage);
    }

    if (value === 'minus' && currentPage > 1) {
      setBeforePage();
    }
  };

  return (
    <DivMainWrapper>
      <DivBtnWrap style={{ marginLeft: 0 }}>
        <Span>현재 페이지</Span>
        <DivArrowBtn onClick={() => handleButton('minus')}>
          <IArrow arrow="\f104" />
        </DivArrowBtn>
        <DivInputBtn style={{ padding: 0 }}>
          <InputCurrentPage
            type="number"
            value={currentPage}
            onChange={pageChange}
          />
        </DivInputBtn>
        <DivArrowBtn onClick={() => handleButton('plus')}>
          <IArrow arrow="\f105" />
        </DivArrowBtn>
        <Span style={{ marginLeft: '10px' }}>총 {maxPage}페이지</Span>
        <Span></Span>
      </DivBtnWrap>
      <DivBtnWrap>
        <Select
          styles={customStyles}
          value={offset}
          options={[
            { label: 10, value: 10 },
            { label: 20, value: 20 },
            { label: 50, value: 50 },
            { label: 100, value: 100 },
            { label: 150, value: 150 },
          ]}
          onChange={showListChange}
        />
        <Span style={{ marginLeft: '15px' }}>개씩 보기</Span>
      </DivBtnWrap>
      <DivBtnWrap>
        <Span>총 {totalProductCount}개</Span>
      </DivBtnWrap>
    </DivMainWrapper>
  );
};

const mapStateToProps = state => {
  return {
    currentPage: state.productManagement.currentPage,
    totalProductCount: state.productManagement.totalProductCount,
    maxPage: state.productManagement.setMaxPage,
  };
};

export default connect(mapStateToProps, {
  setBeforePage,
  setAfterPage,
  selectedPage,
  setShowList,
})(ShowPage);

const DivMainWrapper = styled.div`
  display: flex;
  padding: 20px;
`;

const DivBtnWrap = styled.div`
  display: flex;
  margin-left: 40px;
  align-items: center;
`;

const Span = styled.span`
  font-size: 16px;
`;

const DivArrowBtn = styled.div`
  padding: 5px 10px;
  font-size: 15px;
  line-height: 1.5;
  height: 35px;
  border: 1px solid #dedede;
  border-radius: 3px;
  margin-left: 10px;
  cursor: pointer;
  &:hover {
    background-color: #e6e6e6;
  }
`;

const DivInputBtn = styled.div`
  padding: 5px 10px;
  font-size: 15px;
  line-height: 1.5;
  height: 35px;
  border: 1px solid #dedede;
  border-radius: 3px;
  margin-left: 10px;
`;

const IArrow = styled.i`
  font-style: normal;
  font-family: FontAwesome;
  &:before {
    content: '${({ arrow }) => arrow}';
  }
`;

const InputCurrentPage = styled.input`
  border: none;
  text-align: center;
  width: 50px;
  height: 30px;
`;
