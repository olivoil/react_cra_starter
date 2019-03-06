import React, { FC } from 'react';
import { makeStyles } from '@material-ui/styles';
import logo from '../logo.svg';

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center'
  },
  logo: {
    animation: 'App-logo-spin infinite 20s linear',
    height: '40vmin',
    pointerEvents: 'none'
  }
}));

const Loader: FC<{}> = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img src={logo} className={classes.logo} alt="logo" />
      <div>loading...</div>
    </div>
  );
};

export default Loader;
