const {app, BrowserWindow, Menu} = require('electron')
const path = require('path')
const url = require('url')
const menuManager = require('./menu-manager')

let win

app.on('ready', appReady)

function appReady() {
    menuManager.onAbout = () => {console.log('You REALLY clicked About...')}
    const menu = menuManager.build()
    Menu.setApplicationMenu(menu)

    // Only MacOS will have a dock property
    if (app.dock) {
        app.dock.setIcon(iconPath)
    }

    createWindow()
}

function createWindow () {
    // Create the browser window
    win = new BrowserWindow({width: 1200, height: 800, title: 'Dispatcher'})
    
    // and load the index.html of the app.
    win.loadURL(url.format({
        pathname: path.join(__dirname, '../www/index.html'),
        protocol: 'file:',
        slashes: true
    }))

    // Open the DevTools
    // win.webContents.openDevTools()

    // Emitted when the window is closed.
    win.on('closed', () => {
        win = null
    })

    // Quit when all windows are closed.
    app.on('window-all-closed', () => {
        // On macOs it is common for applications and their menu bar
        // to stay active until the user quits explicitly with Cmd + Q
        if (process.platform !== 'darwin') {
            app.quit()
        }
    })

    app.on('activate', () => {
        if (win === null) {
            createWindow()
        }
    })
}