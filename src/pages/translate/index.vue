<template>
  <div class="h-40px bg-#ccc flex items-center gap-10px">
    <template v-for="item in webviewList">
      <button @click="currentWebViewId = item.id">{{ item.label }}</button>
    </template>
  </div>

  <template v-for="item in webviewList">
    <webview
      :src="item.src"
      class="w-full absolute bottom-0 top-40px"
      :class="currentWebViewId === item.id && 'z-1'"
    ></webview>
  </template>
</template>

<script setup lang="ts">
import { ref } from "vue";

const webviewList = [
  {
    id: 1,
    src: "https://fanyi.youdao.com/",
    label: "有道翻译",
  },
  {
    id: 2,
    src: "https://fanyi.baidu.com/",
    label: "百度翻译",
  },
  // {
  //   id: 3,
  //   src: "https://translate.google.com/",
  //   label: "谷歌翻译",
  // },
];
const currentWebViewId = ref(webviewList[0].id);
</script>
