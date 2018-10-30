const { ipcRenderer: ipc } = require('electron');
const { SERVER_START, SERVER_START_RESPONSE, SERVER_LOG_MESSAGE } = require('./lib/runner');

const runner = {
  logSubscribers: {},

  addLogSubscriber: (fn) => runner.logSubscribers[fn] = fn,
  removeLogSubscriber: (fn) => (delete runner.logSubscribers[fn]),

  handleStartResponse: (event, arg) => {
    console.log(arg);
  },

  handleLogMessage: (event, arg) => {
    Object.values(runner.logSubscribers).forEach(subscriber => subscriber(arg));
  },

  start: () => {
    ipc.send(SERVER_START);
    ipc.on(SERVER_START_RESPONSE, runner.handleStartResponse);
    ipc.on(SERVER_LOG_MESSAGE, runner.handleLogMessage);
  },
};

window.runner = runner;
