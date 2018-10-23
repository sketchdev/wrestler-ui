import React from 'react';
import withDefaultTemplate from '../templates/DefaultTemplate';
import Button from '@material-ui/core/Button/Button';

class RootPage extends React.Component {
  handleSelectFile = () => {
    window.selectFile();
  };
  render() {
    return (
      <Button variant={'outlined'} color={'primary'} onClick={this.handleSelectFile}>Select...</Button>
    );
  }
}

export default withDefaultTemplate(RootPage);
