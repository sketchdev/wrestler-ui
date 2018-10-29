import { cancelNewWizard, setStep, setDatabaseAndContinue, setPort, startNewWizard, setConnStr, setDbName, showProgress, hideProgress } from '../actions/newWizard';
import { handleActions } from 'redux-actions';

const defaultState = {
  loading: false,
  loadingMessage: '',
  step: 0,
  port: 3000,
  dbEngine: null,
  connStr: '',
  dbName: '',
  redirectTo: null,
};

export default handleActions(
  {
    [startNewWizard]: (state) => ({ ...state, redirectTo: null, step: 0 }),
    [setPort]: (state, { payload: port }) => ({ ...state, port }),
    [setStep]: (state, { payload: step }) => ({ ...state, step }),
    [setDatabaseAndContinue]: (state, { payload: { dbEngine, step } }) => ({ ...state, dbEngine, step }),
    [setConnStr]: (state, { payload: connStr }) => ({ ...state, connStr }),
    [setDbName]: (state, { payload: dbName }) => ({ ...state, dbName }),
    [cancelNewWizard]: (state) => ({ ...state, redirectTo: '/' }),
    [showProgress]: (state, { payload: loadingMessage }) => ({ ...state, loading: true, loadingMessage }),
    [hideProgress]: (state) => ({ ...state, loading: false }),
  },
  defaultState
);
