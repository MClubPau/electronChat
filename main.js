// Main Window
const { app, BrowserWindow ,Notification} = require('electron');
const path = require('node:path');

const createWindow = () => {
    // Browser Window <- Renderer Process
    const win = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            nodeIntegration: true
        }
    })

    win.loadFile('index.html');

    // Open the DevTools initially (optional)
    win.webContents.openDevTools();
}

app.whenReady().then(() => {
    createWindow();

    const notification = new Notification({title: 'Hello World', body: 'My test message'});
    notification.show();

    const parsed = path.parse('/home/user/dir/file.txt');
    console.log(parsed.base);
    console.log(parsed.ext);

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
})

// Chromium -> web engine for rendering UI, full Chrome-like web browser
// V8 -> engine that provides capabilities to execute, run, JS code in the browser
// Node JS(V8) -> we are able to run JS code + provides more features