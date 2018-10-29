import { createStructuredSelector } from 'reselect';

const loadingSelector = state => state.newWizard.loading;
const loadingMessageSelector = state => state.newWizard.loadingMessage;
const stepSelector = state => state.newWizard.step;
const portSelector = state => '' + state.newWizard.port ;
const connStrSelector = state => '' + state.newWizard.connStr;
const dbNameSelector = state => '' + state.newWizard.dbName;
const redirectToSelector = state => state.newWizard.redirectTo;

export const newWizardSelector = createStructuredSelector({
  loading: loadingSelector,
  loadingMessage: loadingMessageSelector,
  step: stepSelector,
  port: portSelector,
  connStr: connStrSelector,
  dbName: dbNameSelector,
  redirectTo: redirectToSelector,
});
