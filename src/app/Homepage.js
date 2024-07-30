// Update Homepage.js
import React from 'react';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import SignInSide from './SignInSide';
import DescriptionSide from './DescriptionSide';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
    display: 'flex',
    overflow: 'scroll', // Prevent overflow
  },
}));

export default function Homepage() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <DescriptionSide />
      <SignInSide />
    </Grid>
  );
}