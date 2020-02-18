import React from 'react';
import styled, { css } from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
  my: {
    position: 'absolute',
    left: '48%',
    top: '42%',
  },
}));

const Loading = ({ loading }) => {
  const classes = useStyles();

  return (
    <Dim loading={loading}>
      <CircularProgress className={classes.my} size={70} color="inherit" />
    </Dim>
  );
};

const Dim = styled.div`
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.4);
`;

export default Loading;
