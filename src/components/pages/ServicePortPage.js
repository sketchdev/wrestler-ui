import React from 'react';
import CenteredPaper from '../molecules/CenteredPaper';
import Button from '@material-ui/core/Button/Button';
import TextField from '@material-ui/core/TextField/TextField';
import { Link } from 'react-router-dom';
import ButtonGroup from '../molecules/ButtonGroup';
import { withStyles } from '@material-ui/core';
import { compose } from 'recompose';

class ServicePortPage extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <CenteredPaper title={'What port?'} subtitle={'Values from 3,000 to 9,000 are popular choices.'}>
        <TextField className={classes.field} type={'number'} autoFocus defaultValue={3000}/>
        <ButtonGroup>
          <Button size={'large'} variant={'outlined'} color={'primary'} component={Link} to={'/service/new/db'}>Continue creating a service</Button>
          <Button size={'large'} variant={'outlined'} component={Link} to={'/'}>Cancel and go back</Button>
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
)(ServicePortPage);
