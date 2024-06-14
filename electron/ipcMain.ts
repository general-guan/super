import { ipcMain } from "electron";
import { openTranslate } from "./openTranslate";
export const ipcMainInit = () => {
  ipcMain.on("openTranslate", () => {
    openTranslate();
  });
};
