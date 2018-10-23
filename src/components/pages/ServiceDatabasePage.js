import React from 'react';
import CenteredPaper from '../molecules/CenteredPaper';
import Button from '@material-ui/core/Button/Button';
import { Link } from 'react-router-dom';
import ButtonGroup from '../molecules/ButtonGroup';
import { withStyles } from '@material-ui/core';
import { compose } from 'recompose';

class ServiceDatabasePage extends React.Component {
  render() {
    return (
      <CenteredPaper title={'How about your database?'} subtitle={`Pick the database engine you'd like to use.`}>
        <ButtonGroup>
          <Button size={'large'} variant={'outlined'} color={'primary'} component={Link} to={'/service/new/db'}>Use MongoDB</Button>
          <Button size={'large'} variant={'outlined'} component={Link} to={'/'}>Just store everything in memory for now</Button>
          <Button size={'large'} variant={'outlined'} component={Link} to={'/'}>Go back and pick a port</Button>
        </ButtonGroup>
      </CenteredPaper>
    );
  }
}

const styles = theme => ({
  field: {
    marginBottom: theme.spacing.unit * 4,
  }
});

export default compose(
  withStyles(styles)
)(ServiceDatabasePage);
