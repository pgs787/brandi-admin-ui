import React, { useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import styled, { css } from 'styled-components';
import Select from 'react-select';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { data } from './Data';
// component

// redux
import { connect } from 'react-redux';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

const customStyles = {
  menu: (provided, state) => ({
    ...provided,
  }),
  control: () => ({
    height: 40,
    borderRadius: 0,
    fontSize: 13,
    border: '1px solid #dbdde2',
    display: 'flex',
    alignItems: 'center',
  }),
  container: base => ({
    ...base,
    width: '80%',
  }),
};

const useStyles = makeStyles({
  container: {
    overflow: 'visible',
  },
  table: {
    minWidth: 700,
  },
  title: {
    height: '50px',
  },
  titleCell: {
    padding: '7px',
    paddingLeft: '16px',
    color: '#767a83',
  },
  infoTitle: {
    color: '#767a83',
  },
  info: {
    borderLeft: '1px solid',
    borderLeftColor: '#dbdde2',
    color: '#767a83',
  },
});

const SelectOptionList = ({ basicColor, basicSize, selectedList }) => {
  const classes = useStyles();
  const [activeId, setActiveId] = useState(0);

  const selectedColor = color => {
    console.log(color);
  };
  const selectedSize = size => {
    console.log(size);
  };
  const onClick = id => {
    console.log(id);
    setActiveId(id);
  };
  console.log(basicColor);
  console.log(basicSize);
  console.log(selectedList);
  return (
    <TableContainer component={Paper} className={classes.container}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead className={classes.title}>
          <TableRow>
            <StyledTableCell className={classes.titleCell}>
              색 상
            </StyledTableCell>
            <StyledTableCell className={classes.info} align="left">
              사이즈
            </StyledTableCell>
            <StyledTableCell className={classes.info} align="left">
              일반재고
            </StyledTableCell>
            <StyledTableCell
              className={classes.info}
              align="left"
            ></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {selectedList.map((element, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell
                component="th"
                scope="row"
                className={classes.titleCell}
              >
                <Select
                  styles={customStyles}
                  options={data.colorData}
                  onChange={selectedColor}
                  defaultValue={{ value: element.color, label: element.color }}
                />
              </StyledTableCell>
              <StyledTableCell className={classes.info} align="left">
                <Select
                  styles={customStyles}
                  options={data.sizeData}
                  onChange={selectedSize}
                  defaultValue={{ value: element.size, label: element.size }}
                />
              </StyledTableCell>
              <StyledTableCell className={classes.info} align="left">
                <ButtonGroupWrapper>
                  {['수량 관리 안함', '재고 수량 관리'].map((option, idx) => (
                    <OptionButton
                      key={idx}
                      id={idx}
                      onClick={() => onClick(idx)}
                      activeId={element.stock === idx}
                      value={option}
                    >
                      {option}
                    </OptionButton>
                  ))}
                </ButtonGroupWrapper>
                <InputTag disabled={activeId === 0 ? true : false}></InputTag>
              </StyledTableCell>
              <StyledTableCell
                className={classes.info}
                align="left"
              ></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
// styled-components
const ButtonGroupWrapper = styled.div`
  display: inline;
`;

const OptionButton = styled.button`
  border: 1px solid #ddd;
  width: 140px;
  padding: 8px 20px;
  font-size: 13px;
  color: #767a83;
  ${props =>
    props.activeId &&
    css`
      color: white;
      background-color: #36363a;
      border: 1px solid #36363a;
    `}
`;

const InputTag = styled.input`
  width: 10%;
  height: 34px;
  position: absolute;
  background-color: #f8f9fd;
  &:focus {
    border-color: #999999;
    background-color: white;
  }
`;

// store
const mapStateToProps = state => {
  return {
    basicColor: state.optionInfo.basicColor,
    basicSize: state.optionInfo.basicSize,
    selectedList: state.optionInfo.selectedList,
  };
};
export default connect(mapStateToProps, null)(SelectOptionList);
