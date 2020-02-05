import React from 'react';
import styled from 'styled-components';
import SectionField from '../../../../components/SectionField';
import { makeStyles } from '@material-ui/core/styles';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import Button from '@material-ui/core/Button';
import BasicOption from './BasicOption';

import SelectOptionList from './SelectOptionList';

const useStyles = makeStyles({
  check: {
    marginRight: '3px',
    fontSize: '15px',
  },
});
const OptionInformation = () => {
  const classes = useStyles();
  return (
    <SectionField label="옵션 정보">
      <BasicOption></BasicOption>
      <ButtonBox>
        <Button variant="contained" color="primary">
          <DoneOutlineIcon className={classes.check} />
          적용
        </Button>
      </ButtonBox>
      <SelectOptionList></SelectOptionList>
    </SectionField>
  );
};
const ButtonBox = styled.div`
  margin: 10px 0px;
`;

export default OptionInformation;
