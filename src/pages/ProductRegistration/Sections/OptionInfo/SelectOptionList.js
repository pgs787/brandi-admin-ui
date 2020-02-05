import React, { useState } from 'react';
import Select from 'react-select';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import styled, { css } from 'styled-components';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { data } from './Data';
// component

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
    width: '400px',
  }),
};
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const SelectOptionList = () => {
  const classes = useStyles();
  const [activeId, setActiveId] = useState(0);

  const onClick = id => {
    setActiveId(id);
  };
  const onChange = selectedOptions => {
    let selectedOptionVals = [];
    selectedOptions.map(option => selectedOptionVals.push(arr.value));
  };

  return (
    <TableContainer component={Paper} className={classes.container}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead className={classes.title}>
          <TableRow>
            <StyledTableCell className={classes.titleCell}>
              기본옵션 항목 선택
            </StyledTableCell>
            <StyledTableCell className={classes.info} align="right">
              asd
            </StyledTableCell>
            <StyledTableCell className={classes.info} align="right">
              asd
            </StyledTableCell>
            <StyledTableCell className={classes.info} align="right">
              asd
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <StyledTableRow key={row.name}>
              <StyledTableCell
                component="th"
                scope="row"
                className={classes.titleCell}
              >
                {row.name}
              </StyledTableCell>
              <StyledTableCell className={classes.info} align="right">
                asd
              </StyledTableCell>
              <StyledTableCell className={classes.info} align="right">
                asd
              </StyledTableCell>
              <StyledTableCell className={classes.info} align="right">
                asd
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
const ButtonGroupWrapper = styled.div``;

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

export default SelectOptionList;
