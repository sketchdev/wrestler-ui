import { createAction } from 'redux-actions';

export const startNewWizard = createAction('START_NEW_WIZARD');
export const setPort = createAction('SET_PORT', port => port);
export const setStep = createAction('SET_STEP', step => step);
export const setConnStr = createAction('SET_CONN_STR', connStr => connStr);
export const setDbName = createAction('SET_DB_NAME', dbName => dbName);
export const cancelNewWizard = createAction('CANCEL_NEW_WIZARD');
export const setDatabaseAndContinue = createAction('SET_DATABASE_AND_CONTINUE', (dbEngine, step) => ({ dbEngine, step }));
export const showProgress = createAction('SHOW_PROGRESS', message => message);
export const hideProgress = createAction('HIDE_PROGRESS');

export const finishAndStart = () => async dispatch => {
  console.log('starting');
  dispatch(showProgress('Starting, please wait...'));
  await new Promise(resolve => {
    console.log('doing stuff');
    setTimeout(() => {
      resolve();
    }, 200000);
  });
  console.log('done');
  dispatch(hideProgress());
};
