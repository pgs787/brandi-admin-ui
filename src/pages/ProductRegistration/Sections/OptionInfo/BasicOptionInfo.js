import React from 'react';
import styled from 'styled-components';
import SectionField from 'components/SectionField';
import { makeStyles } from '@material-ui/core/styles';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import Button from '@material-ui/core/Button';
// components
import BasicOption from './BasicOption';
import BasicOptionList from './BasicOptionLIst';
// redux
import { connect } from 'react-redux';
import { selectedList } from 'store/actions';

const useStyles = makeStyles({
  check: {
    marginRight: '3px',
    fontSize: '15px',
  },
});
const BasicOptionInfo = ({
  basicColor,
  basicSize,
  stock,
  stockState,
  list,
  selectedList,
}) => {
  // 선택된 기본옵션 테이블 생성 함수.
  const onClick = () => {
    let selectedData = [];
    let count = 0;
    basicColor.map(color => {
      basicSize.map((size, index) => {
        selectedData.push({
          id: count,
          basic_options_colors_id: color,
          basic_options_sizes_id: size,
          is_stock_managed: stock,
          stock_volume: '',
          stockState: stockState,
        });
        count++;
      });
    });
    selectedList(selectedData);
  };
  const classes = useStyles();
  return (
    <SectionField label="옵션 정보">
      <BasicOption></BasicOption>
      <ButtonBox>
        <Button onClick={onClick} variant="contained" color="primary">
          <DoneOutlineIcon className={classes.check} />
          적용
        </Button>
      </ButtonBox>

      {list && <BasicOptionList></BasicOptionList>}
    </SectionField>
  );
};
const ButtonBox = styled.div`
  margin: 10px 0px;
`;
const mapStateToProps = state => {
  return {
    basicColor: state.optionInfo.basicColor,
    basicSize: state.optionInfo.basicSize,
    stock: state.optionInfo.setStock,
    stockState: state.optionInfo.stockState,
    list: state.optionInfo.selectedList,
  };
};
export default connect(mapStateToProps, { selectedList })(BasicOptionInfo);
