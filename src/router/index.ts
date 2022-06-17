import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/arco-crud",
      redirect: "crud_editor",
    },
    {
      path: "/crud_editor",
      name: "crud_editor",
      component: () => import("../demo/crud_editor/index.vue"),
      meta: {
        requiresAuth: false,
      },
    },
    {
      name: "crud_demo",
      path: "/crud_demo",
      component: () => import("../demo/crud_demo/index.vue"),
    },
    {
      name: "form_demo",
      path: "/form_demo",
      component: () => import("../demo/form_demo/index.vue"),
    },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
