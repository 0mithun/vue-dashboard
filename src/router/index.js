import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

// import SignIn from "../views/SignInFlow/SignIn.vue";
// import Request from "../views/SignInFlow/Request.vue";
// import Recover from "../views/SignInFlow/Recover.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/team",
    name: "Team",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "team" */ "../views/Team"),
  },
  {
    path: "/sign-in",
    name: "SignIn",
    component: () =>
      import(/* webpackChunkName: "signin" */ "../views/SignInFlow/SignIn.vue"),
  },
  {
    path: "/request",
    name: "Request",
    component: () =>
      import(
        /* webpackChunkName: "request" */ "../views/SignInFlow/Request.vue"
      ),
  },
  {
    path: "/recover",
    name: "Recover",
    component: () =>
      import(
        /* webpackChunkName: "recover" */ "../views/SignInFlow/Recover.vue"
      ),
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
