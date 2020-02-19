import React, { useState, useReducer, useEffect } from 'react';
import styled from 'styled-components';
import { withStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ShowPage from './ShowPage';
import { API_URL } from '../../../utils/callUrl';
import { withRouter } from 'react-router-dom';
import Loading from 'components/Loading';

const useStyles = makeStyles({
  table: {
    minWidth: 1400,
  },
  container: {
    position: 'relative',
    maxHeight: 750,
  },
});

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: '#35363A',
    color: theme.palette.common.white,
    fontWeight: 'bold',
    padding: 0,
    paddingTop: 5,
  },
  body: {
    fontSize: 13,
    padding: 0,
    paddingTop: 5,
  },
}))(TableCell);

const StyledDateCell = withStyles(theme => ({
  root: {
    width: 140,
    color: '#2A6496',
    cursor: 'pointer',
  },
  head: {
    backgroundColor: '#35363A',
    color: theme.palette.common.white,
    fontWeight: 'bold',
  },
  body: {
    fontSize: 13,
  },
}))(TableCell);

const StyledLeftMostCell = withStyles(theme => ({
  root: {
    width: 100,
    paddingLeft: 20,
  },
  head: {
    backgroundColor: '#35363A',
    color: theme.palette.common.white,
    fontWeight: 'bold',
  },
  body: {
    fontSize: 13,
  },
}))(TableCell);

const StyledProdCodeCell = withStyles(theme => ({
  head: {
    backgroundColor: '#35363A',
    color: theme.palette.common.white,
    fontWeight: 'bold',
    padding: 0,
    paddingTop: 5,
    width: 180,
  },
  body: {
    fontSize: 13,
    padding: 0,
    paddingTop: 5,
    width: 180,
  },
}))(TableCell);

const UserTable = ({
  handleSearch,
  currentPage,
  offset,
  optionChange,
  pageChange,
  handleButton,
  sellerData,
  total,
  history,
}) => {
  const classes = useStyles();
  const checkType = type => {
    if (type === 1) return '쇼핑몰';
    if (type === 2) return '마켓';
    if (type === 3) return '로드샵';
    if (type === 4) return '디자이너브랜드';
    if (type === 5) return '제너럴브랜드';
    if (type === 6) return '내셔널브랜드';
    if (type === 7) return '뷰티';
  };

  useEffect(() => {
    handleSearch(currentPage, offset);
  }, []);

  if (!sellerData) return null;

  return (
    <>
      <TableContainer className={classes.container} component={Paper}>
        <Table className={classes.table} stickyHeader aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledLeftMostCell>번호</StyledLeftMostCell>
              <StyledDateCell>셀러 아이디</StyledDateCell>
              <StyledTableCell>영문 이름</StyledTableCell>
              <StyledTableCell>한글 이름</StyledTableCell>
              <StyledTableCell>담당자 이름</StyledTableCell>
              <StyledTableCell>담당자 연락처</StyledTableCell>
              <StyledTableCell>담당자 이메일</StyledTableCell>
              <StyledTableCell>셀러 속성</StyledTableCell>
              <StyledTableCell>상품 개수</StyledTableCell>
              <StyledTableCell>URL</StyledTableCell>
              <StyledTableCell>등록 일시</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sellerData.map((el, idx) => (
              <TableRow key={idx}>
                <StyledLeftMostCell>{el.id}</StyledLeftMostCell>
                <StyledDateCell
                  onClick={() => history.push(`/seller/information/${el.id}`)}
                >
                  {el.account}
                </StyledDateCell>
                <StyledTableCell>{el.name_en}</StyledTableCell>
                <StyledTableCell>{el.name_kr}</StyledTableCell>
                <StyledTableCell>{el.representative_name}</StyledTableCell>
                <StyledTableCell>{el.mobile_number}</StyledTableCell>
                <StyledTableCell>{el.email}</StyledTableCell>
                <StyledTableCell>
                  {checkType(el.seller_types_id)}
                </StyledTableCell>
                <StyledTableCell>{el.product_count}</StyledTableCell>
                <StyledTableCell>{el.site_url}</StyledTableCell>
                <StyledTableCell>
                  {el.created_at.slice(0, el.created_at.length - 3)}
                </StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <ShowPage
        currentPage={currentPage}
        offset={offset}
        optionChange={optionChange}
        pageChange={pageChange}
        handleButton={handleButton}
        total={total}
      />
    </>
  );
};

export default withRouter(UserTable);
