// Main Window
const { app, BrowserWindow } = require('electron');

const createWindow = () => {
    // Browser Window <- Renderer Process
    const win = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            nodeIntegration: false,
            // will sanitize JS code
            // TODO: explain when React application is initialize
            worldSafeExecuteJavaScript: true,
            // is a feature that ensures that both, your preload scripts and Electron
            // internal logic run in separate context
            contextIsolation: true
        }
    })

    win.loadFile('index.html');

    // Open the DevTools initially (optional)
    win.webContents.openDevTools();
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
})

// Chromium -> web engine for rendering UI, full Chrome-like web browser
// V8 -> engine that provides capabilities to execute, run, JS code in the browser
// Node JS(V8) -> we are able to run JS code + provides more features

// Webpack -> is a module builder, main purpose is to bundle JS files for usage in the browser
// Babel -> js a JS compiler