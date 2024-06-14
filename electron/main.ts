// app 控制应用程序的事件生命周期
// BrowserWindow 创建并控制浏览器窗口
import { app, BrowserWindow } from "electron";
import path from "path";

// 定义全局变量，获取窗口实例
let win: BrowserWindow | null;

const createWindow = () => {
  win = new BrowserWindow({
    webPreferences: {
      devTools: true,
      contextIsolation: false,
      // 允许 html 页面上的 javascipt 代码访问 nodejs 环境 api 代码的能力（与 node 集成的意思）
      nodeIntegration: true,
    },
  });
  if (process.env.NODE_ENV === "development") {
    win.loadURL(process.env["VITE_DEV_SERVER_URL"]!);
  } else {
    win.loadFile(path.join(__dirname, "../dist/index.html"));
  }
};
//在Electron完成初始化时被触发
app.whenReady().then(createWindow);
