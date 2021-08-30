import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "todo-list",
    component: () =>
      import(/* webpackChunkName: "todos" */ "@/pages/todo-list"),
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
