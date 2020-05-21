const electron = require("electron");
import {
  createProtocol,
  installVueDevtools,
} from "vue-cli-plugin-electron-builder/lib";

const { app, BrowserWindow, ipcMain, protocol } = electron;

let mainWindow;

// protocol.registerStandardSchemes(["app"], { secure: true });

protocol.registerSchemesAsPrivileged([
  {
    scheme: "app",
    privileges: { standard: true, secure: true, supportFetchAPI: true },
  },
]);

app.on("ready", () => {
  mainWindow = new BrowserWindow({});

  createProtocol("app");

  //   mainWindow.loadURL(`file://${__dirname}/dist/index.html`);
  mainWindow.loadURL(`file://${__dirname}/index.html`);
});
