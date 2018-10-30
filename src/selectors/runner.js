import { createSelector } from 'reselect';

const getMessages = state => state.runner.messages;
const getLimit = state => state.runner.limit;
const getSkip = state => state.runner.skip;

export const getVisibleMessages = createSelector(
  [getMessages, getLimit, getSkip],
  (messages, limit, skip) => {
    const messagesClone = messages.slice(0);
    messagesClone.reverse();
    console.log('getVisibleMessages', skip, limit);
    return messagesClone.slice(skip, skip + limit);
  }
);
