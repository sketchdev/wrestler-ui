import React from 'react';
import { withStyles } from '@material-ui/core';
import { compose } from 'recompose';
import PropTypes from 'prop-types';

const Spacer = ({ classes, vertical = 'default' }) => (
  <div className={classes[vertical]}>&nbsp;</div>
);

const styles = theme => ({
  default: {
    height: theme.spacing.unit,
  },
  small: {
    height: theme.spacing.unit * 2,
  },
  medium: {
    height: theme.spacing.unit * 3,
  },
  large: {
    height: theme.spacing.unit * 4,
  }
});

Spacer.propTypes = {
  vertical: PropTypes.oneOf(['default', 'small', 'medium', 'large']),
};

export default compose(
  withStyles(styles)
)(Spacer);
