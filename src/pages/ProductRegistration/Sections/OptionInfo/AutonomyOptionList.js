import React, { useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import styled, { css } from 'styled-components';
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
// redux
import { connect } from 'react-redux';
import { selectedList } from 'store/actions';

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
    marginBottom: '-1.5px',
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

const AutonomyOptionList = ({ list, selectedList }) => {
  const [activeId, setActiveId] = useState(0);
  const classes = useStyles();

  const onClick = (idx, index) => {
    selectedList(changeList);
  };

  return (
    <TableContainer component={Paper} className={classes.container}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead className={classes.title}>
          <TableRow>
            <StyledTableCell className={classes.titleCell}></StyledTableCell>
            <StyledTableCell className={classes.info} align="left">
              옵션명
            </StyledTableCell>
            <StyledTableCell className={classes.info} align="left">
              필수여부
            </StyledTableCell>
            <StyledTableCell className={classes.info} align="left">
              일반재고
            </StyledTableCell>
            <StyledTableCell className={classes.info} align="left">
              추가금액
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <StyledTableRow>
            <StyledTableCell
              component="th"
              scope="row"
              className={classes.titleCell}
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
            <StyledTableCell className={classes.info} align="left">
              레드 / S
            </StyledTableCell>
            <StyledTableCell className={classes.info} align="left">
              Y
            </StyledTableCell>
            <StyledTableCell className={classes.stockCell} align="left">
              <ButtonGroupWrapper>
                {['수량 관리 안함', '재고 수량 관리'].map((option, idx) => (
                  <OptionButton
                    key={idx}
                    id={idx}
                    onClick={() => onClick(idx)}
                    activeId={activeId === idx}
                    value={option}
                  >
                    {option}
                  </OptionButton>
                ))}
              </ButtonGroupWrapper>
              <InputTag disabled={activeId === 0 ? true : false}></InputTag>
            </StyledTableCell>
            <StyledTableCell className={classes.info} align="left">
              <InputTag type="number"></InputTag>원
            </StyledTableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
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

const mapStateToProps = state => {
  return {
    list: state.optionInfo.selectedList,
  };
};

export default connect(mapStateToProps, { selectedList })(AutonomyOptionList);
