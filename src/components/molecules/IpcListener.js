import React, { Component } from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { addMessage } from '../../actions/runner';

class IpcListener extends Component {
  componentDidMount() {
    window.runner.addLogSubscriber(this.handleLogging);
    window.runner.start();
  }

  componentWillUnmount() {
    window.runner.removeLogSubscriber(this.handleLogging);
  }

  handleLogging = (message) => {
    this.props.addMessage(message);
  };

  render() {
    return <React.Fragment/>;
  }
}

const mapDispatchToProps = dispatch => ({
  addMessage: (message) => dispatch(addMessage(message)),
});

export default compose(
  connect(null, mapDispatchToProps),
)(IpcListener);
