const ipc = require('electron').ipcRenderer;

const selectFile = () => {
  ipc.on('hw-reply', (event, arg) => {
    console.log('hw-reply', arg);
  });
  ipc.send('hw', 'hit');
};

window.selectFile = selectFile;
