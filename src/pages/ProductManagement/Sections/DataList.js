import React from 'react';
import styled from 'styled-components';
import { withStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import { productData } from '../../../../config';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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

const createData = ({
  registerStatus,
  registerDate,
  repImage,
  productName,
  productCode,
  productNumber,
  sellerType,
  sellerName,
  salePrice,
  discountedPrice,
  isSelling,
  isDisplaying,
  isDiscounted,
  deliveryType,
}) => {
  return {
    registerStatus,
    registerDate,
    repImage,
    productName,
    productCode,
    productNumber,
    sellerType,
    sellerName,
    salePrice,
    discountedPrice,
    isSelling,
    isDisplaying,
    isDiscounted,
    deliveryType,
  };
};

const rows = productData.map((product, idx) => createData(product));

const DataList = () => {
  const classes = useStyles();

  return (
    <TableContainer className={classes.container} component={Paper}>
      <Table className={classes.table} stickyHeader aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledLeftMostCell>등록상태</StyledLeftMostCell>
            <StyledDateCell>등록일</StyledDateCell>
            <StyledTableCell>대표이미지</StyledTableCell>
            <StyledTableCell>상품명</StyledTableCell>
            <StyledProdCodeCell>상품코드</StyledProdCodeCell>
            <StyledTableCell>상품번호</StyledTableCell>
            <StyledTableCell>셀러속성</StyledTableCell>
            <StyledTableCell>셀러명</StyledTableCell>
            <StyledTableCell>판매가</StyledTableCell>
            <StyledTableCell>할인가</StyledTableCell>
            <StyledTableCell>판매여부</StyledTableCell>
            <StyledTableCell>진열여부</StyledTableCell>
            <StyledTableCell>할인여부</StyledTableCell>
            <StyledTableCell>배송구분</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, idx) => (
            <TableRow key={idx}>
              <StyledLeftMostCell>{row.registerStatus}</StyledLeftMostCell>
              <StyledDateCell>{row.registerDate}</StyledDateCell>
              <StyledTableCell>
                <RepImageBox src={row.repImage} />
              </StyledTableCell>
              <StyledTableCell>{row.productName}</StyledTableCell>
              <StyledProdCodeCell>{row.productCode}</StyledProdCodeCell>
              <StyledTableCell>{row.productNumber}</StyledTableCell>
              <StyledTableCell>{row.sellerType}</StyledTableCell>
              <StyledTableCell>{row.sellerName}</StyledTableCell>
              <StyledTableCell>
                {parseInt(row.salePrice).toLocaleString()}
              </StyledTableCell>
              <StyledTableCell>
                {parseInt(row.discountedPrice).toLocaleString()}
              </StyledTableCell>
              <StyledTableCell>{row.isSelling}</StyledTableCell>
              <StyledTableCell>{row.isDisplaying}</StyledTableCell>
              <StyledTableCell>{row.isDiscounted}</StyledTableCell>
              <StyledTableCell>{row.deliveryType}</StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataList;

// Functions

// Styled Components

const RepImageBox = styled.img`
  width: 70px;
  height: 70px;
`;
