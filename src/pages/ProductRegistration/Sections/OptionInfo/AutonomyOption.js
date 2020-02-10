import React, { useState, useEffect } from 'react';
import CreatableSelect from 'react-select/creatable';
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
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import Checkbox from '@material-ui/core/Checkbox';

// redux
import { connect } from 'react-redux';
import { addAutonomyOption } from '../../../../redux/actions';

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
  firstTitle: {
    padding: '7px',
    paddingLeft: '16px',
  },
  titleCell: {
    padding: '7px',
    paddingLeft: '16px',
    color: '#767a83',
    borderLeft: '1px solid',
    borderLeftColor: '#dbdde2',
  },
  infoTitle: {
    color: '#767a83',
  },
  info: {
    padding: '7px',
    paddingLeft: '16px',
    borderLeft: '1px solid',
    borderLeftColor: '#dbdde2',
    color: '#767a83',
  },
  btn: {
    minWidth: '38px',
    padding: 0,
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
  }),
};

const AutonomyOption = ({ type, list, addAutonomyOption }) => {
  const classes = useStyles();
  const [option, setOption] = useState([]);
  const [checked, setChecked] = useState(true);
  /*  const [optionType, setOptionType] = useState(0);
   */
  /* useEffect(() => {
    setOptionType(type);
  }, [type]); */
  console.log('list : ', list);
  const setUp = id => {
    console.log(id);
  };

  const setDown = id => {
    console.log(id);
  };

  const removeOption = id => {
    console.log(id);
  };

  const addOption = () => {
    addAutonomyOption();
  };

  const handleChange = id => {
    setChecked(!checked);
  };

  const onChange = (selected, id) => {
    console.log(selected);
    console.log(id);
    let selectedOptionVals = [];
    selected.map(item => selectedOptionVals.push(item.value));
    setOption(selectedOptionVals);
  };

  return (
    <TableContainer component={Paper} className={classes.container}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead className={classes.title}>
          <TableRow>
            <StyledTableCell
              style={{ width: '15%' }}
              className={classes.firstTitle}
            >
              순서
            </StyledTableCell>
            <StyledTableCell
              style={{ width: '15%' }}
              className={classes.titleCell}
              align="left"
            >
              옵션명
            </StyledTableCell>
            <StyledTableCell
              style={{ width: '60%' }}
              className={classes.titleCell}
              align="left"
            >
              옵션값
            </StyledTableCell>
            <StyledTableCell
              style={{ width: '10%' }}
              className={classes.titleCell}
              align="left"
            ></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* body */}
          {list.map((element, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell
                className={classes.infoTitle}
                component="th"
                scope="row"
              >
                <Button
                  variant="contained"
                  className={classes.btn}
                  onClick={() => {
                    setUp(index);
                  }}
                >
                  <ExpandMoreIcon />
                </Button>
                <Button
                  variant="contained"
                  className={classes.btn}
                  onClick={() => {
                    setDown(index);
                  }}
                >
                  <ExpandLessIcon />
                </Button>
              </StyledTableCell>
              <StyledTableCell className={classes.info} align="left">
                <InputTag placeholder="예시) 색상"></InputTag>
                {type === 1 && (
                  <Checkbox
                    checked={checked}
                    onChange={() => handleChange(index)}
                    value="checked"
                    color="primary"
                  />
                )}
              </StyledTableCell>
              <StyledTableCell className={classes.info} align="left">
                <CreatableSelect
                  styles={customStyles}
                  onChange={value => {
                    onChange(value, index);
                  }}
                  placeholder="옵션을 선택해 주세요."
                  isMulti
                />
              </StyledTableCell>
              <StyledTableCell className={classes.info} align="left">
                {' '}
                <Button
                  variant="contained"
                  className={classes.btn}
                  onClick={() => {
                    removeOption(index);
                  }}
                >
                  <RemoveIcon />
                </Button>
                {index === list.length - 1 && (
                  <Button
                    variant="contained"
                    className={classes.btn}
                    onClick={() => {
                      addOption();
                    }}
                  >
                    <AddIcon />
                  </Button>
                )}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const InputTag = styled.input`
  width: 90%;
  height: 34px;
  background-color: #fafafa;
  &:focus {
    border-color: #999999;
    background-color: white;
  }
`;
const mapStateToProps = state => {
  return {
    type: state.optionInfo.setType,
    list: state.optionInfo.autonomyList,
  };
};
export default connect(mapStateToProps, { addAutonomyOption })(AutonomyOption);
