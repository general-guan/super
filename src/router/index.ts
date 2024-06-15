import { createRouter, createWebHashHistory } from "vue-router";

import Home from "@/pages/home/index.vue";
import Translate from "@/pages/translate/index.vue";

const routes = [
  { path: "/", component: Home, meta: { title: "首页" } },
  {
    path: "/translate",
    component: Translate,
    meta: { title: "翻译" },
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title as string;
  next();
});
