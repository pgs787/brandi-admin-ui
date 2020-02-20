import React, { useState, useEffect } from 'react';
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
import { server_url } from '../../../../config';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { totalProductCount, setMaxPage } from 'store/actions';

const useStyles = makeStyles({
  table: {
    minWidth: 1400,
  },
  container: {
    maxHeight: 750,
  },
  code: {
    color: '#2A6496',
    cursor: 'pointer',
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

const DataList = ({
  currentPage,
  showList,
  pagenateData,
  totalProductCount,
  setMaxPage,
  history,
}) => {
  const classes = useStyles();
  const [list, setList] = useState([]);
  /* &seller_attribute=${sellerProp} */
  useEffect(() => {
    const productInfo = {
      상품명: '&product_name',
      상품번호: '&product_number',
      상품코드: '&serial_number',
    };
    const selling = () => {
      if (pagenateData.sellingStatus === '판매') {
        return 'true';
      } else if (pagenateData.sellingStatus === '미판매') {
        return 'false';
      }
      return '';
    };
    const display = () => {
      if (pagenateData.displayStatus === '진열') {
        return 'true';
      } else if (pagenateData.displayStatus === '미진열') {
        return 'false';
      }
      return '';
    };
    const discount = () => {
      if (pagenateData.discountStatus === '할인') {
        return 'true';
      } else if (pagenateData.discountStatus === '미할인') {
        return 'false';
      }
      return '';
    };
    fetch(
      `${server_url}/product_list?limit=${
        showList.value
      }&offset=${currentPage}&seller_name=${
        pagenateData.sellerNameInput
      }&start_date=${pagenateData.startDate}&end_date=${
        pagenateData.endDate
      }&is_discounted=${discount()}&is_displayed=${display()}&is_sold=${selling()}&${
        productInfo[pagenateData.selectedOption.value]
      }=${pagenateData.selectOptionInput}`,
      {
        method: 'GET',
      },
    )
      .then(res => res.json())
      .then(res => {
        console.log(res);
        console.log(
          `${server_url}/product_list?limit=${
            showList.value
          }&offset=${currentPage}&seller_name=${
            pagenateData.sellerNameInput
          }&start_date=${pagenateData.startDate}&end_date=${
            pagenateData.endDate
          }&is_discounted=${discount()}&is_displayed=${display()}&is_sold=${selling()}&${
            productInfo[pagenateData.selectedOption.value]
          }=${pagenateData.selectOptionInput}`,
        );
        totalProductCount(res.search_count);
        setMaxPage(Math.ceil(res.search_count / showList.value));
        setList(res.products_data);
      })
      .catch(err => console.log(err));
  }, [currentPage, showList, pagenateData]);

  return (
    <TableContainer className={classes.container} component={Paper}>
      <Table className={classes.table} stickyHeader aria-label="simple table">
        <TableHead>
          <TableRow>
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
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map((row, idx) => (
            <TableRow key={idx}>
              <StyledDateCell>{row.created_at}</StyledDateCell>
              <StyledTableCell>
                <RepImageBox src={row.main_image} />
              </StyledTableCell>
              <StyledTableCell>{row.name}</StyledTableCell>
              <StyledProdCodeCell
                className={classes.code}
                onClick={() =>
                  history.push(`/product/registration/${row.serial_number}`)
                }
              >
                {row.serial_number}
              </StyledProdCodeCell>
              <StyledTableCell>{row.product_number}</StyledTableCell>
              <StyledTableCell>{row.seller_type}</StyledTableCell>
              <StyledTableCell>{row.seller_name}</StyledTableCell>
              <StyledTableCell>
                {parseInt(row.price).toLocaleString()}
              </StyledTableCell>
              <StyledTableCell>
                {row.discounted_price
                  ? parseInt(row.discounted_price).toLocaleString()
                  : 0}
              </StyledTableCell>
              <StyledTableCell>{row.is_sold}</StyledTableCell>
              <StyledTableCell>{row.is_displayed}</StyledTableCell>
              <StyledTableCell>{row.is_discounted}</StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
const mapStateToProps = state => {
  return {
    pagenateData: state.productManagement.pagenateData,
    currentPage: state.productManagement.currentPage,
    showList: state.productManagement.showList,
  };
};
export default connect(mapStateToProps, { totalProductCount, setMaxPage })(
  withRouter(DataList),
);

// Functions

// Styled Components

const RepImageBox = styled.img`
  width: 70px;
  height: 70px;
`;
