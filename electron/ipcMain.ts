import { ipcMain } from "electron";
import { createBrowserWindowFn } from "./utils";

export const ipcMainInit = () => {
  ipcMain.on("createBrowserWindow", (_, config) => {
    createBrowserWindowFn(config);
  });
};
