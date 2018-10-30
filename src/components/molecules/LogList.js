import React from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { getVisibleMessages } from '../../selectors/runner';

const LogList = ({ messages }) => (
  <div>
    <div>HIIIIII</div>
    {messages.map(message => (
      <div key={message}>{message}</div>
    ))}
  </div>
);

const mapStateToProps = state => ({
  messages: getVisibleMessages(state),
});

export default compose(
  connect(mapStateToProps),
)(LogList);
