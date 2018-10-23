import React from 'react';
import { withStyles } from '@material-ui/core';
import { compose } from 'recompose';

// noinspection JSUnresolvedFunction
const ButtonGroup = ({ classes, children }) => (
  <React.Fragment>
    {React.Children.map(children, child => React.cloneElement(child, { className: classes.button }))}
  </React.Fragment>
);

const styles = theme => ({
  button: {
    marginBottom: theme.spacing.unit,
  }
});

export default compose(
  withStyles(styles),
)(ButtonGroup);
