import { BrowserWindow } from "electron";
import { menuInit } from "./menu";
import path from "path";
const mainWindowMap = new Map();

export const createBrowserWindowFn = ({
  width = 1440,
  height = 800,
  hash = "/",
  webviewTag = false,
} = {}) => {
  if (mainWindowMap.has(hash)) {
    mainWindowMap.get(hash).show();
  } else {
    const mainWindow = new BrowserWindow({
      width,
      height,
      webPreferences: {
        contextIsolation: false,
        nodeIntegration: true,
        webviewTag,
      },
      show: false,
    });
    mainWindow.on("ready-to-show", () => {
      mainWindow.show();
    });
    menuInit(mainWindow);
    if (process.env.NODE_ENV === "development") {
      mainWindow.loadURL(process.env["VITE_DEV_SERVER_URL"]! + "#" + hash);
    } else {
      mainWindow.loadFile(path.join(__dirname, "../dist/index.html"), {
        hash,
      });
    }
    mainWindowMap.set(hash, mainWindow);
    mainWindow.on("close", (e) => {
      e.preventDefault();
      mainWindow.hide();
    });
  }
};
