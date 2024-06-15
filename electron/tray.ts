import { app, Tray, Menu, nativeImage } from "electron";
import path from "path";
import { mainWindow } from "./utils";
export const trayInit = () => {
  let iconLocation;

  if (process.env.NODE_ENV === "development") {
    iconLocation = path.join(__dirname, "../public/icon.png");
  } else {
    iconLocation = path.join(__dirname, "../dist/icon.png");
  }
  const icon = nativeImage.createFromPath(iconLocation);
  const tray = new Tray(icon);

  const contextMenu = Menu.buildFromTemplate([
    {
      label: "关闭",
      click: () => {
        app.exit();
      },
    },
  ]);
  tray.on("click", () => {
    mainWindow.show();
  });
  tray.setContextMenu(contextMenu);
};
