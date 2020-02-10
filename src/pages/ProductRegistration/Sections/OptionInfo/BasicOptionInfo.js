import React from 'react';
import styled from 'styled-components';
import SectionField from '../../../../components/SectionField';
import { makeStyles } from '@material-ui/core/styles';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import Button from '@material-ui/core/Button';
// components
import BasicOption from './BasicOption';
import BasicOptionList from './BasicOptionLIst';
// redux
import { connect } from 'react-redux';
import { selectedList } from '../../../../redux/actions';

const useStyles = makeStyles({
  check: {
    marginRight: '3px',
    fontSize: '15px',
  },
});
const BasicOptionInfo = ({ basicColor, basicSize, stock, selectedList }) => {
  // 선택된 기본옵션 테이블 생성 함수.
  const onClick = () => {
    console.log('click : ', basicColor);
    console.log('click : ', basicSize);
    let selectedData = [];
    basicColor.map(color => {
      basicSize.map((size, index) => {
        selectedData.push({
          id: index,
          color: color,
          size: size,
          stock: stock,
        });
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
      <BasicOptionList></BasicOptionList>
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
  };
};
export default connect(mapStateToProps, { selectedList })(BasicOptionInfo);
