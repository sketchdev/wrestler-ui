import React from 'react';
import withDefaultTemplate from '../templates/DefaultTemplate';
import Button from '@material-ui/core/Button/Button';

class RootPage extends React.Component {
  render() {
    return (
      <div>
        <Button variant={'outlined'} color={'primary'} onClick={window.handleStart}>Start</Button>
        <Button variant={'outlined'} onClick={window.handleStop}>Stop</Button>
      </div>
    );
  }
}

export default withDefaultTemplate(RootPage);
