import { createRouter, createWebHashHistory } from "vue-router";

import Home from "@/pages/home/index.vue";

const routes = [
  {
    path: "/",
    component: Home,
    meta: { title: "首页" },
  },
  {
    path: "/translate",
    component: () => import("@/pages/translate/index.vue"),
    meta: { title: "翻译" },
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, _, next) => {
  document.title = to.meta.title as string;
  next();
});
