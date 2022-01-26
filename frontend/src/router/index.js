import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import KakaoLoginCallback from "../views/KakaoLoginCallback.vue";
// import WebRTC from "@/views/webRTC.vue";
import Map from "../views/map.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },

  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/kakao-login-callback",
    name: "KakaoLoginCallback",
    component: KakaoLoginCallback,
  },
  {
    path: "/map",
    name: "Map",
    component: Map,
    // children: [
    //   {
    //     path: "webRTC",
    //     name: "WebRTC",
    //     component: WebRTC,
    //   },
    // ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
