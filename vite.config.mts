import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import electron from "vite-plugin-electron";
import electronRender from "vite-plugin-electron-renderer";
import UnoCSS from "unocss/vite";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    electron({ entry: "electron/main.ts" }),
    electronRender(),
    UnoCSS(),
  ],
});
