const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('node:path');

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit();
}

let mainWindow; // Make this accessible for IPC control

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 325,
    height: 425,
    frame: false,  // Remove the default window frame
    resizable: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      contextIsolation: false,
    },
    autoHideMenuBar: true,
    titleBarStyle: 'hidden',
  });

  mainWindow.loadFile(path.join(__dirname, './templates/index.html'));

  // Optionally: mainWindow.webContents.openDevTools();
};

// IPC: Handle toggle for always-on-top
ipcMain.handle('toggle-always-on-top', () => {
  if (!mainWindow) return false;
  const newState = !mainWindow.isAlwaysOnTop();
  mainWindow.setAlwaysOnTop(newState);
  return newState;
});

// IPC: Handle close request
ipcMain.on('close-window', () => {
  if (mainWindow) {
    mainWindow.close();
  }
});

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
