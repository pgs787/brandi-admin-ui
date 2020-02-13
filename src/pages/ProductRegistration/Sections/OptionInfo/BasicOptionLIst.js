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
import Button from '@material-ui/core/Button';
import RemoveIcon from '@material-ui/icons/Remove';
import { data } from './Data';
// component

// redux
import { connect } from 'react-redux';
import { colorChange, sizeChange, stockChange, setStockCount, removeBasicList } from 'store/actions';

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
    width: '90%',
  },
  table: {},
  title: {
    height: '50px',
  },
  titleCell: {
    padding: '5px',
    paddingLeft: '16px',
    color: '#767a83',
  },
  infoTitle: {
    color: '#767a83',
  },
  stockCell: {
    borderLeft: '1px solid',
    borderLeftColor: '#dbdde2',
    marginBottom: '-1px',
    color: '#767a83',
    display: 'flex',
    flexWrap: 'wrap',
  },
  info: {
    borderLeft: '1px solid',
    borderLeftColor: '#dbdde2',
    padding: '0px 0px 0px 16px',
    color: '#767a83',
  },
  removeBtn: {
    minWidth: '38px',
    padding: 0,
  },
});

const BasicOptionList = ({
  list,
  colorChange,
  sizeChange,
  stockChange,
  setStockCount,
  removeBasicList,
}) => {
  const classes = useStyles();

  const selectedColor = (color, index) => {
    colorChange(color, index)
  };
  const selectedSize = (size, index) => {
    sizeChange(size, index);
  };
  const stockHandler = (idx, index) => {
    stockChange(idx, index);
  };
  const setCount = (e, index) => {
    console.log(e.target.value)
    console.log(index)

    setStockCount(e.target.value, index);
  }
  const removeList = id => {
    removeBasicList(id);
  };
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
          {list.map((element, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell
                component="th"
                scope="row"
                className={classes.titleCell}
              >
                <Select
                  styles={customStyles}
                  options={data.colorData}
                  onChange={value => {
                    selectedColor(value, index);
                  }}
                  value={{ value: element.color, label: element.color }}
                />
              </StyledTableCell>
              <StyledTableCell className={classes.info} align="left">
                <Select
                  styles={customStyles}
                  options={data.sizeData}
                  onChange={value => {
                    selectedSize(value, index);
                  }}
                  value={{ value: element.size, label: element.size }}
                />
              </StyledTableCell>
              <StyledTableCell className={classes.stockCell} align="left">
                <ButtonGroupWrapper>
                  {['수량 관리 안함', '재고 수량 관리'].map((option, idx) => (
                    <OptionButton
                      key={idx}
                      id={idx}
                      onClick={() => {
                        stockHandler(idx, index);
                      }}
                      activeId={element.stock === idx}
                      value={option}
                    >
                      {option}
                    </OptionButton>
                  ))}
                </ButtonGroupWrapper>
                <InputTag type='number'
                  disabled={element.stock === 0 ? true : false} 
                  onChange={(e) => setCount(e, index)}
                  value={element.count}
                ></InputTag>
              </StyledTableCell>
              <StyledTableCell
                style={{ width: '70px' }}
                className={classes.info}
                align="left"
              >
                <Button
                  variant="contained"
                  className={classes.removeBtn}
                  onClick={() => {
                    removeList(index);
                  }}
                >
                  <RemoveIcon />
                </Button>
              </StyledTableCell>
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
  width: 130px;
  height: 34px;
  background-color: #f8f9fd;
  &:focus {
    border-color: #999999;
    background-color: white;
  }
`;

// store
const mapStateToProps = state => {
  return {
    list: state.optionInfo.selectedList,
  };
};
export default connect(mapStateToProps, {
  colorChange,
  sizeChange,
  stockChange,
  setStockCount,
  removeBasicList,
})(BasicOptionList);
