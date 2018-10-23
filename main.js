const { app, ipcMain, BrowserWindow, dialog } = require('electron');
const path = require('path');

let mainWindow; // keep a reference; otherwise, GC will collect

(async () => {
  try {
    const lock = app.requestSingleInstanceLock();
    if (!lock) {
      return app.quit();
    }

    await app.whenReady();

    mainWindow = new BrowserWindow({
      show: false,
      width: 1000,
      minWidth: 800,
      height: 600,
      minHeight: 600,
      title: 'Wrestler UI',
      acceptFirstMouse: true,
      webPreferences: {
        nodeIntegration: false,
        preload: path.join(__dirname, 'preload.js'),
        textAreasAreResizable: false,
      }
    });

    ipcMain.on('hw', (event, arg) => {
      console.log('hw', arg);
      console.log(dialog.showOpenDialog({ properties: ['openFile', 'openDirectory'] }));
      event.sender.send('hw-reply', 'hat');
    });

    mainWindow.webContents.openDevTools();

    if (app.isPackaged) {
      mainWindow.loadFile('build/index.html');
    } else {
      mainWindow.loadURL('http://localhost:3000/');
    }
    mainWindow.on('closed', () => mainWindow = null);
    mainWindow.once('ready-to-show', mainWindow.show);
  } catch (err) {
    console.error(err);
    app.quit();
  }
})();
