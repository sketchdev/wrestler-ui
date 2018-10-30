import React, { Component } from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { addToLog } from '../../actions/server';
import Server from '../../lib/server';

class ServerLogger extends Component {
  constructor(props) {
    super(props);
    this.server = new Server();
  }

  componentDidMount() {
    this.server.subscribeToLogging(this.handleLogging)
  }

  componentWillUnmount() {
    this.server.unsubscribeToLogging();
  }

  handleLogging = (message) => {
    this.props.addToLog(message);
  };

  render() {
    return <React.Fragment/>;
  }
}

const mapDispatchToProps = dispatch => ({
  addToLog: (message) => dispatch(addToLog(message)),
});

export default compose(
  connect(null, mapDispatchToProps),
)(ServerLogger);
