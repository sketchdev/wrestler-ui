import React from 'react';
import withDefaultTemplate from '../templates/DefaultTemplate';
import Button from '@material-ui/core/Button/Button';
import CenteredPaper from '../molecules/CenteredPaper';
import { compose } from 'recompose';
import { Link } from 'react-router-dom';
import ButtonGroup from '../molecules/ButtonGroup';

class RootPage extends React.Component {
  render() {
    return (
      <CenteredPaper title={'Hello!'} subtitle={'Would you like to create a service or open an existing project?'}>
        <ButtonGroup>
          <Button size={'large'} variant={'outlined'} color={'primary'} component={Link} to={'/service/new'}>Create a service</Button>
          <Button size={'large'} variant={'outlined'}>Open an existing project</Button>
        </ButtonGroup>
      </CenteredPaper>
    );
  }
}

export default compose(
  withDefaultTemplate,
)(RootPage);
