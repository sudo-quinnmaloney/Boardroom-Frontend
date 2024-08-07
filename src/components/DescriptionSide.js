import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const useStyles = makeStyles(theme => ({
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(4),
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  content: {
    marginBottom: theme.spacing(2),
  },
  descriptionSide: {
    flexGrow: 1,
    marginRight: '30%', // Ensure it does not overlap with SignInSide
    position: 'relative',
    zIndex: 1,
    height: '100%',
    overflow: 'scroll',
  },
}));

// TODO: conditionally load "LoadingClosedFidget" if production, or if still loading
// TODO: make a gitChangelogDisplay element for loadingClosedFidget to display
// TODO: add "click to enter" pulse to LoadingClosedFidget
// TODO: add opening animation on click for LoadingClosedFidget
// TODO: add project description and encourage SignUp

export default function DescriptionSide() {
  const classes = useStyles();

  return (
    <Grid item className={classes.descriptionSide} bgcolor={'inherit'} component={Paper} elevation={4} square>
      <div className={classes.paper}>
        <Typography component="h1" variant="h5" className={classes.title}>
          COMING SOON.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          COMING SOON.
        </Typography>
        <Typography component="h1" variant="h5" className={classes.title}>
          COMING SOON.
        </Typography>
        <Typography variant="body1" className={classes.content}>
          COMING SOON.
        </Typography>
        <Typography component="h1" variant="h5" className={classes.title}>
          Relevant Links
        </Typography>
        <Link href="https://github.com/sudo-quinnmaloney" variant="body2" className={classes.content}>
          GitHub Profile
        </Link>
        <Link href="https://www.linkedin.com/in/quinn-maloney-a65a00144/" variant="body2" className={classes.content}>
          LinkedIn Profile
        </Link>
      </div>
    </Grid>
  );
}