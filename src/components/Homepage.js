// Update Homepage.js
import React from 'react';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import makeStyles from '@mui/styles/makeStyles';
import SignInSide from './SignInSide';
import DescriptionSide from './DescriptionSide';
import LoadingClosedFidget from "../assets/widgets/LoadingClosed";

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    display: 'flex',
    overflow: 'hidden', // Prevent overflow
  },
}));

export default function Homepage() {
  const classes = useStyles();
  if (process.env.REACT_APP_IN_DEVELOPMENT === 'true') {
    console.log('Boardroom is currently in development, but you can follow my progress and get the gist here in the meantime.');
  }
  return (
    <Grid container component="main" id={classes.root}>
      <CssBaseline />
      {
        process.env.REACT_APP_IN_DEVELOPMENT === 'false' ? (
          <div>
            <DescriptionSide />
            <SignInSide />
          </div>
        ) : <LoadingClosedFidget />
      }
    </Grid>
  );
}