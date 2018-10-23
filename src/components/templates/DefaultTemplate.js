import React from 'react';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  root: {
    paddingBottom: theme.spacing.unit * 3,
    borderTop: `6px solid ${theme.palette.primary.dark}`,
  },
  main: {
    textAlign: 'center',
  },
  inner: {
    margin: 'auto',
    maxWidth: '960px',
    textAlign: 'left',
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
  },
});

const Component = withStyles(styles)(({ classes, header, navigation, children }) => (
  <div className={classes.root}>
    {header}
    {navigation}
    <div className={classes.main}>
      <div className={classes.inner}>
        {children}
      </div>
    </div>
  </div>
));

const withDefaultTemplate = (WrappedComponent, { header, navigation } = {}) => {
  return () => (
    <Component header={header} navigation={navigation}>
      <WrappedComponent/>
    </Component>
  );
};

export default withDefaultTemplate;
