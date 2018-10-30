import { createAction } from 'redux-actions';

export const addToLog = createAction('ADD_TO_LOG', message => message);

