import { handleActions } from 'redux-actions';
import { addToLog } from '../actions/server';

const defaultState = {
  messages: [],
};

export default handleActions(
  {
    [addToLog]: (state, { payload: { message } }) => ({ ...state, messages: state.messages.slice(0).concat([message]) }),
  },
  defaultState
);
