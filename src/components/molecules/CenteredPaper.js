import React from 'react';
import { compose } from 'recompose';
import { withStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography/Typography';

const CenteredPaper = ({ classes, children, title, subtitle }) => (
  <div className={classes.root}>
    <Typography className={classes.title} variant={'h3'}>{title}</Typography>
    <Typography className={classes.subtitle} variant={'subtitle1'} paragraph>{subtitle}</Typography>
    {children}
  </div>
);

const styles = theme => ({
  root: {
    paddingLeft: theme.spacing.unit * 4,
    paddingRight: theme.spacing.unit * 4,
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  title: {
    color: theme.palette.grey[400],
  },
  subtitle: {
    marginBottom: theme.spacing.unit * 4,
  }
});

export default compose(
  withStyles(styles)
)(CenteredPaper)
