const { ipcMain: ipc } = require('electron');

const SERVER_START = exports.SERVER_START = 'startServer';
const SERVER_START_RESPONSE = exports.SERVER_START_RESPONSE = 'serverStartResponse';
const SERVER_LOG_MESSAGE = exports.SERVER_LOG_MESSAGE = 'serverLogMessage';

exports.initalize = () => {
  ipc.on(SERVER_START, (event, arg) => {
    setTimeout(() => {
      event.sender.send(SERVER_START_RESPONSE, 'server started...');
      setInterval(() => {
        event.sender.send(SERVER_LOG_MESSAGE, `${new Date().toLocaleTimeString()} - GET /blah/blah - 200 OK`);
      }, 3000);
    }, 2000);
  });
};
