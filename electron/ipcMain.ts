import { ipcMain, shell } from "electron";
import { createBrowserWindowFn } from "./utils";

export const ipcMainInit = () => {
  ipcMain.on("createBrowserWindow", (_, config) => {
    createBrowserWindowFn(config);
  });
  ipcMain.on("openUrl", (_, { url }) => {
    shell.openExternal(url);
  });
};
