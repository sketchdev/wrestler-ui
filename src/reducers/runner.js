import { handleActions } from 'redux-actions';
import { addMessage } from '../actions/runner';

const defaultState = {
  limit: 5,
  skip: 0,
  messages: [],
};

export default handleActions(
  {
    [addMessage]: (state, { payload: message }) => ({ ...state, messages: state.messages.slice(0).concat([message]) }),
  },
  defaultState
);
