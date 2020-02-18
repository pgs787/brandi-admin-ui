import React, { useState, useReducer } from 'react';
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

const useStyles = makeStyles({
  table: {
    minWidth: 1400,
  },
  container: {
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

const Data = [
  {
    number: 18737,
    sellerId: 'clzls047',
    enName: '	friday',
    krName: '	목요일',
    userNumber: '	1731966',
    managerName: '김채원',
    managerNumber: '	010-7616-6616',
    managerMail: '	kimcw@brandi.co.kr',
    sellerProp: '쇼핑몰',
    productCount: '5',
    URL: 'http://www.naver.com',
    registDate: '2020-02-13 10:32:57',
  },
  {
    number: 18737,
    sellerId: 'clzls047',
    enName: '	friday',
    krName: '	목요일',
    userNumber: '	1731966',
    managerName: '김채원',
    managerNumber: '	010-7616-6616',
    managerMail: '	kimcw@brandi.co.kr',
    sellerProp: '쇼핑몰',
    productCount: '5',
    URL: 'http://www.naver.com',
    registDate: '2020-02-13 10:32:57',
  },
  {
    number: 18737,
    sellerId: 'clzls047',
    enName: '	friday',
    krName: '	목요일',
    userNumber: '	1731966',
    managerName: '김채원',
    managerNumber: '	010-7616-6616',
    managerMail: '	kimcw@brandi.co.kr',
    sellerProp: '쇼핑몰',
    productCount: '5',
    URL: 'http://www.naver.com',
    registDate: '2020-02-13 10:32:57',
  },
  {
    number: 18737,
    sellerId: 'clzls047',
    enName: '	friday',
    krName: '	목요일',
    userNumber: '	1731966',
    managerName: '김채원',
    managerNumber: '	010-7616-6616',
    managerMail: '	kimcw@brandi.co.kr',
    sellerProp: '쇼핑몰',
    productCount: '5',
    URL: 'http://www.naver.com',
    registDate: '2020-02-13 10:32:57',
  },
  {
    number: 18737,
    sellerId: 'clzls047',
    enName: '	friday',
    krName: '	목요일',
    userNumber: '	1731966',
    managerName: '김채원',
    managerNumber: '	010-7616-6616',
    managerMail: '	kimcw@brandi.co.kr',
    sellerProp: '쇼핑몰',
    productCount: '5',
    URL: 'http://www.naver.com',
    registDate: '2020-02-13 10:32:57',
  },
];

const UserTable = ({
  currentPage,
  offset,
  optionChange,
  pageChange,
  handleButton,
  sellerData,
}) => {
  const classes = useStyles();

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
            {Data.map((el, idx) => (
              <TableRow key={idx}>
                <StyledLeftMostCell>{el.number}</StyledLeftMostCell>
                <StyledDateCell onClick={() => console.log('hh')}>
                  {el.sellerId}
                </StyledDateCell>
                <StyledTableCell>{el.enName}</StyledTableCell>
                <StyledTableCell>{el.krName}</StyledTableCell>
                <StyledTableCell>{el.managerName}</StyledTableCell>
                <StyledTableCell>{el.managerNumber}</StyledTableCell>
                <StyledTableCell>{el.managerMail}</StyledTableCell>
                <StyledTableCell>{el.sellerProp}</StyledTableCell>
                <StyledTableCell>{el.productCount}</StyledTableCell>
                <StyledTableCell>{el.URL}</StyledTableCell>
                <StyledTableCell>{el.registDate}</StyledTableCell>
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
      />
    </>
  );
};

export default UserTable;
