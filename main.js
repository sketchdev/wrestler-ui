const { app, ipcMain: ipc, BrowserWindow, dialog } = require('electron');
const path = require('path');
const menu = require('./menu');

let mainWindow; // keep a reference; otherwise, GC will collect
let yarn;

(async () => {
  try {
    const lock = app.requestSingleInstanceLock();
    if (!lock) {
      return app.quit();
    }

    app.setName('Wrestler UI');
    await app.whenReady();
    await menu.buildMenu();

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

    ipc.on('yarn-start', (event, arg) => {
      console.log('yarn-start');

      // const dir = dialog.showOpenDialog({ properties: ['openFile', 'openDirectory'] });
      const dir = dialog.showOpenDialog({ properties: ['openDirectory'] });
      process.chdir(dir[0]);

      const { spawn } = require('child_process');
      yarn = spawn('yarn', ['start'], { env: { ...process.env, MORGAN_FORMAT: 'tiny' } });

      yarn.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
        event.sender.send('yarn-start-response', data.toString());
      });

      yarn.stderr.on('data', (data) => {
        console.log(`stderr: ${data}`);
        event.sender.send('yarn-start-response', data.toString());
      });

      yarn.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
        event.sender.send('yarn-start-response', code);
      });

      event.sender.send('yarn-start-response', `started (${yarn.pid})`);
    });

    ipc.on('yarn-stop', (event, arg) => {
      console.log('yarn-stop');
      const pid = yarn.pid;
      yarn.kill();
      // yarn.kill('SIGHUP');
      event.sender.send('yarn-stop-response', `stopped (${pid})`);
    });

    if (app.isPackaged) {
      mainWindow.loadFile('build/index.html');
    } else {
      mainWindow.loadURL(`http://localhost:${process.env.PORT || 3030}/`);
    }
    mainWindow.on('closed', () => mainWindow = null);
    mainWindow.once('ready-to-show', mainWindow.show);
  } catch (err) {
    console.error(err);
    app.quit();
  }
})();
