import Home from "@/view/home.vue";

export const routes = [
  {
    path: "/",
    name: "index",
    component: Home,
    redirect: '/login',
    children: [
      {
        path: "/login",
        name: "login",
        component: () => import("@/components/login.vue"),
        meta: {
          s: 1,
        },
      },
      {
        path: "/hello",
        name: "hello",
        component: () => import("@/components/HelloWorld.vue"),
        meta: {
          s: 2,
        },
      },
    ],
  },
];
