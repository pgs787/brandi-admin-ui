import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import Button from '@material-ui/core/Button';

// component
import SectionField from 'components/SectionField';
import AutonomyOption from './AutonomyOption';
import AutonomyOptionList from './AutonomyOptionList';

const useStyles = makeStyles({
  check: {
    marginRight: '3px',
    fontSize: '15px',
  },
});

const AutonomyOptionInfo = () => {
  // 선택된 기본옵션 테이블 생성 함수.
  const onClick = () => {
    console.log('click : ', basicColor);
    console.log('click : ', basicSize);
    let selectedData = [];

    selectedList(selectedData);
    console.log('selectedData : ', selectedData);
  };
  const classes = useStyles();
  return (
    <SectionField label="옵션 정보">
      <AutonomyOption></AutonomyOption>

      <ButtonBox>
        <Button onClick={onClick} variant="contained" color="primary">
          <DoneOutlineIcon className={classes.check} />
          적용
        </Button>
      </ButtonBox>
      <AutonomyOptionList></AutonomyOptionList>
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
export default AutonomyOptionInfo;
