<template>
  <!-- <main class="text-54px color-#cfae11">init</main> -->
  <div>
    <el-button @click="translateBtn">翻译</el-button>
  </div>
  <el-autocomplete
    v-model="inputVal"
    class="w-500px!"
    :fetch-suggestions="querySearch"
    :trigger-on-focus="false"
    clearable
    placeholder=""
    @select="handleSelect"
    highlight-first-item
    fit-input-width
  >
    <template #default="{ item }">
      <div class="flex justify-between items-center">
        <span>{{ item.value }}</span>
        <span class="text-12px">{{ item.link }}</span>
      </div>
    </template>
  </el-autocomplete>
</template>

<script setup lang="ts">
import { ipcRenderer } from "electron";
import { ref } from "vue";
import linkJson from "@/data/link.ts";

const translateBtn = () => {
  ipcRenderer.send("createBrowserWindow", {
    hash: "/translate",
    webviewTag: true,
  });
};

const inputVal = ref("");
const options = linkJson;

const querySearch = (queryString: string, cb: any) => {
  const result = options.filter((f) => {
    return f.keyword.toLowerCase().includes(queryString.toLowerCase());
  });
  console.log(result);

  cb(result);
};

const handleSelect = (item: Record<string, any>) => {
  inputVal.value = "";
  if (item.link) {
    ipcRenderer.send("openUrl", { url: item.link });
  }
};
</script>
