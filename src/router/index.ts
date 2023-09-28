import { createRouter, createWebHistory } from "vue-router";
import { routes } from "@/router/route";

export const router = createRouter({
  history: createWebHistory("/"),
  routes,
});
