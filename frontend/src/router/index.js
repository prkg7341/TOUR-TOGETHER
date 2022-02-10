import { createRouter, createWebHistory } from "vue-router";
// import Home from "../views/Home.vue";
import Map from "../views/Map.vue";
import Login from "../views/Login.vue";
import MyPage from "../views/MyPage.vue";
import KakaoLoginCallback from "../views/KakaoLoginCallback.vue";
import FavoritePage from "../views/FavoritePage.vue";
import Dashboard from "@/views/Dashboard.vue";
import Tables from "@/views/Tables.vue";
import Billing from "@/views/Billing.vue";
import VirtualReality from "@/views/VirtualReality.vue";
import Profile from "@/views/Profile.vue";
import Rtl from "@/views/Rtl.vue";
import SignIn from "@/views/SignIn.vue";
import SignUp from "@/views/SignUp.vue";
import Memo from "../views/Memo.vue";
import Memo2 from "../views/Memo2.vue";
import Memo3 from "../views/Memo3.vue";
import Schedule from "../views/Schedule.vue";
import Sch2 from "../views/Sch2.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    // component: Home,
    redirect: "/dashboard",
  },
  {
    path: "/map",
    name: "Map",
    component: Map,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/mypage",
    name: "MyPage",
    component: MyPage,
  },
  {
    path: "/favoritepage",
    name: "FavoritePage",
    component: FavoritePage,
  },
  {
    path: "/kakao-login-callback",
    name: "KakaoLoginCallback",
    component: KakaoLoginCallback,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/tables",
    name: "Tables",
    component: Tables,
  },
  {
    path: "/billing",
    name: "Billing",
    component: Billing,
  },
  {
    path: "/virtual-reality",
    name: "Virtual Reality",
    component: VirtualReality,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/rtl-page",
    name: "Rtl",
    component: Rtl,
  },
  {
    path: "/sign-in",
    name: "Sign In",
    component: SignIn,
  },
  {
    path: "/sign-up",
    name: "Sign Up",
    component: SignUp,
  },
    path: "/memo",
    name: "Memo",
    component: Memo,
  },
  {
    path: "/memo2",
    name: "Memo2",
    component: Memo2,
  },
  {
    path: "/memo3",
    name: "Memo3",
    component: Memo3,
  },
  {
    path: "/schedule",
    name: "Schedule",
    component: Schedule,
  },
  {
    path: "/sch2",
    name: "Sch2",
    component: Sch2,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
