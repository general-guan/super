// app 控制应用程序的事件生命周期
// BrowserWindow 创建并控制浏览器窗口
import { app } from "electron";
import { ipcMainInit } from "./ipcMain";
import { createBrowserWindowFn } from "./utils";
import { trayInit } from "./tray";

const init = () => {
  createBrowserWindowFn();
  trayInit();
};

//在Electron完成初始化时被触发
app.whenReady().then(init).then(ipcMainInit);
