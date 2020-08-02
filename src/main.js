import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import * as netlifyIdentityWidget from "netlify-identity-widget";
import GoTrue from "gotrue-js";

Vue.config.productionTip = false;

//Initialze netlify identity

netlifyIdentityWidget.init();

//nitialize go-true.js
export const auth = new GoTrue({
  APIUrl: "https://mit-vue-dashboard.netlify.app/.netlify/identity",
  setCookie: true,
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
