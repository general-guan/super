<template>
  <main class="text-54px color-#cfae11">init</main>
  <button @click="translateBtn">翻译</button>
</template>

<script setup lang="ts">
import { ipcRenderer } from "electron";

const translateBtn = () => {
  ipcRenderer.send("openTranslate");
};
</script>
