<template>
  <main class="text-54px color-#cfae11">init</main>
  <button @click="translateBtn">翻译</button>
  <button @click="linkBtn">链接</button>
</template>

<script setup lang="ts">
import { ipcRenderer } from "electron";

const translateBtn = () => {
  ipcRenderer.send("createBrowserWindow", {
    hash: "/translate",
    webviewTag: true,
  });
};

const linkBtn = () => {
  ipcRenderer.send("openUrl", { url: "https://www.baidu.com/" });
};
</script>
