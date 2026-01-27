import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Fish from "../views/Fish.vue";
const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/fish", name: "Fish", component: Fish },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
