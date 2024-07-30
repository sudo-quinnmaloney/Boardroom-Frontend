import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import LoadingClosedFidget from "../assets/widgets/LoadingClosed";

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
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
    <Grid item className={classes.descriptionSide} component={Paper} elevation={4} square>
      <LoadingClosedFidget />
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