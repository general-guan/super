import { BaseWindow, WebContentsView } from "electron";
import { menuInit } from "./menu";

let win, view;

const url = "https://fanyi.baidu.com/"; // "https://fanyi.youdao.com/" "https://translate.google.com/"

export const openTranslate = () => {
  if (win) {
    win.show();
  } else {
    win = new BaseWindow({ width: 1240, height: 800 });
    menuInit(win);
    win.on("close", (e) => {
      e.preventDefault();
      win.hide();
    });

    view = new WebContentsView();
    view.webContents.loadURL(url);
    win.contentView.addChildView(view);
    view.setBounds({ x: 0, y: 0, width: 1240, height: 800 });
  }
};
