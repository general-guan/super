import { BrowserWindow } from "electron";
import { menuInit } from "./menu";
import path from "path";
const browserWindowMap = new Map();
export let mainWindow;
export const createBrowserWindowFn = ({
  width = 1440,
  height = 800,
  hash = "/",
  webviewTag = false,
} = {}) => {
  if (browserWindowMap.has(hash)) {
    browserWindowMap.get(hash).show();
  } else {
    const browserWindow = new BrowserWindow({
      width,
      height,
      webPreferences: {
        contextIsolation: false,
        nodeIntegration: true,
        webviewTag,
      },
      show: false,
    });
    browserWindow.on("ready-to-show", () => {
      browserWindow.show();
    });
    menuInit(browserWindow);
    if (process.env.NODE_ENV === "development") {
      browserWindow.loadURL(process.env["VITE_DEV_SERVER_URL"]! + "#" + hash);
    } else {
      browserWindow.loadFile(path.join(__dirname, "../dist/index.html"), {
        hash,
      });
    }
    browserWindowMap.set(hash, browserWindow);
    if (hash === "/") {
      mainWindow = browserWindow;
    }
    browserWindow.on("close", (e) => {
      e.preventDefault();
      browserWindow.hide();
    });
  }
};
