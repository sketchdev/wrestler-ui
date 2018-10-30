import { combineReducers } from 'redux';
import newWizard from './newWizard';
import runner from './runner';

export default combineReducers({
  newWizard,
  runner,
});
