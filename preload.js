const ipc = require('electron').ipcRenderer;

ipc.on('yarn-start-response', (event, arg) => {
  console.log(arg);
});

ipc.on('yarn-stop-response', (event, arg) => {
  console.log(arg);
});

window.handleStart = () => {
  ipc.send('yarn-start');
};

window.handleStop = () => {
  ipc.send('yarn-stop');
};
