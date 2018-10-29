import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { newWizardSelector } from '../../selectors';
import NewWizardPage from '../pages/NewWizardPage';
import { cancelNewWizard, setStep, setDatabaseAndContinue, setPort, startNewWizard, setConnStr, setDbName, finishAndStart } from '../../actions/newWizard';

class NewWizard extends Component {
  componentWillUnmount() {
    this.props.startNewWizard();
  }
  render() {
    return <NewWizardPage {...this.props}/>;
  }
}

const mapDispatchToProps = dispatch => ({
  startNewWizard: () => dispatch(startNewWizard()),
  setStep: (step) => () => dispatch(setStep(step)),
  setPort: (port) => dispatch(setPort(port)),
  cancelNewWizard: () => dispatch(cancelNewWizard()),
  setDatabaseAndContinue: (dbEngine, step) => () => dispatch(setDatabaseAndContinue(dbEngine, step)),
  setConnStr: (connStr) => dispatch(setConnStr(connStr)),
  setDbName: (dbName) => dispatch(setDbName(dbName)),
  finishAndStart: () => dispatch(finishAndStart())
});

export default compose(
  connect(newWizardSelector, mapDispatchToProps),
)(NewWizard);
