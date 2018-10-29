import React from 'react';
import { compose } from 'recompose';
import { withStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography/Typography';
import * as classnames from 'classnames';
import PropTypes from 'prop-types';

const CenteredPaper = ({ classes, className, children, title, subtitle, horizontal }) => (
  <div className={classnames(classes.root, className, classes[horizontal])}>
    {title && <Typography className={classes.title} variant={'h3'}>{title}</Typography>}
    {subtitle && <Typography className={classes.subtitle} variant={'subtitle1'} paragraph>{subtitle}</Typography>}
    {children}
  </div>
);

CenteredPaper.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  className: PropTypes.string,
};


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
  },
  center: {
    alignItems: 'center',
  }
});

export default compose(
  withStyles(styles)
)(CenteredPaper);
