const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
    // Создание окна браузера
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: false, // Не требуется для этого простого случая
            contextIsolation: true
        }
    });

    // Загрузка URL YouTube
    mainWindow.loadURL('https://www.youtube.com');
}

// Запуск приложения
app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

// Завершение работы приложения
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
