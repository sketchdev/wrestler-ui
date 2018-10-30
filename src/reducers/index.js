import { combineReducers } from 'redux';
import newWizard from './newWizard';
import server from './server';

export default combineReducers({
  newWizard,
  server,
});
