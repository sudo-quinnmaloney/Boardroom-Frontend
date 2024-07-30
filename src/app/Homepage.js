// Update Homepage.js
import React from 'react';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import makeStyles from '@mui/styles/makeStyles';
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