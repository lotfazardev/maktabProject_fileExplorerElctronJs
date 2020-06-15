const { app, BrowserWindow , Menu } = require('electron');
const path = require('path');

// sakhte window ba electron
let newWindow;

function createWindow() {
  // constract kardane window
  newWindow = new BrowserWindow({ width: 1000, height: 1000 });

  // load kardane html baraye electron
  newWindow.loadFile(path.join(__dirname, '../index.html'));
  // lisener baraye baste shodan window
  newWindow.on('closed', () => {
    // windowie ke collaps beshe ro mibande
    newWindow = null;
  });
  // pak kardane menu deafult
  Menu.setApplicationMenu(null)
}

// run app
app.on('ready', createWindow);

// kharj shodan az barname vaghti hame window ha close shodan
app.on('window-all-closed', () => {
  // estesnaye khoroj baraye darwin ke hamon mac os mishe win32 mishe windows
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // ye estesnaye dg to baz shodan baraye mac
  if (newWindow === null) {
    createWindow();
  }
});