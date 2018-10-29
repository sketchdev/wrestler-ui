import React from 'react';
import WhichPort from '../molecules/NewWizard/WhichPort';
import WhichDatabase from '../molecules/NewWizard/WhichDatabase';
import MongoConnect from '../molecules/NewWizard/MongoConnect';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import Progress from '../molecules/NewWizard/Progress';

const NewWizardPage = ({ loading, loadingMessage, redirectTo, step, port, connStr, dbName, setPort, setStep, setConnStr, setDbName, cancelNewWizard, setDatabaseAndContinue, finishAndStart }) => {
  if (loading) {
    return <Progress message={loadingMessage}/>;
  }
  return (
    <React.Fragment>
      {redirectTo && <Redirect to={redirectTo}/>}
      {step === 0 && <WhichPort port={port} onPortChange={e => setPort(e.target.value)} onContinue={setStep(1)} onCancel={cancelNewWizard}/>}
      {step === 1 && <WhichDatabase onMongo={setDatabaseAndContinue('mongo', 2)} onMemory={setDatabaseAndContinue('memory', 3)} onBack={setStep(0)} onCancel={cancelNewWizard}/>}
      {step === 2 && <MongoConnect connStr={connStr} dbName={dbName} onChangeConnStr={e => setConnStr(e.target.value)} onChangeDbName={e => setDbName(e.target.value)} onBack={setStep(1)} onCancel={cancelNewWizard} onFinish={finishAndStart}/>}
    </React.Fragment>
  );
};

NewWizardPage.propTypes = {
  loading: PropTypes.bool.isRequired,
  loadingMessage: PropTypes.string,
  step: PropTypes.number.isRequired,
  port: PropTypes.string.isRequired,
  setPort: PropTypes.func.isRequired,
  setStep: PropTypes.func.isRequired,
  cancelNewWizard: PropTypes.func.isRequired,
  setDatabaseAndContinue: PropTypes.func.isRequired,
  setConnStr: PropTypes.func.isRequired,
  setDbName: PropTypes.func.isRequired,
  connStr: PropTypes.string.isRequired,
  dbName: PropTypes.string.isRequired,
  finishAndStart: PropTypes.func.isRequired,
};

export default NewWizardPage;
