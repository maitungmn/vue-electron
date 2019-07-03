const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
const windowStateKeeper = require('electron-window-state')

let win
let url
if (process.env.NODE_ENV === 'DEV') {
  url = 'http://localhost:8080/'
} else {
  url = `file://${process.cwd()}/dist/index.html`
}

app.on('ready', () => {
  // Load the previous state with fallback to defaults
  let mainWindowState = windowStateKeeper({
    defaultWidth: 1000,
    defaultHeight: 800
  });

  // Create the window using the state information
  win = new BrowserWindow({
    'x': mainWindowState.x,
    'y': mainWindowState.y,
    'width': mainWindowState.width,
    'height': mainWindowState.height
  });

  // Let us register listeners on the window, so we can update the state
  // automatically (the listeners will be removed when the window is closed)
  // and restore the maximized or full screen state
  mainWindowState.manage(win);

  let contents = win.webContents

  win.loadURL(url)
})