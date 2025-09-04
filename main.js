const { app, BrowserWindow } = require("electron");
const path = require("path");

let win;

app.whenReady().then(() => {
  win = new BrowserWindow({
    width: 500,
    height: 400,           // a bit taller for chat
    frame: false,          // no title bar
    transparent: false,    // solid background
    alwaysOnTop: true,     // keep floating
    resizable: false,      // optional
    skipTaskbar: true,     // doesn't show in taskbar
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false // allow require() in renderer
    }
  });

  win.loadFile(path.join(__dirname, "index.html"));
});
