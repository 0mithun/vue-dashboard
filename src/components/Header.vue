<template>
  <div id="nav" :class="{ 'nav-light': !isDarkMode, 'nav-dark': isDarkMode }">
    <div class="nav-1">
      <img src="@/assets/light-logo-small.svg" alt="" v-show="!isDarkMode" />
      <img src="@/assets/dark-logo-small.svg" alt="" v-show="isDarkMode" />
      <router-link
        to="/"
        :class="{ 'light-nav': !isDarkMode, 'dark-nav': isDarkMode }"
        >Home</router-link
      >
      <router-link
        to="/team"
        :class="{ 'light-nav': !isDarkMode, 'dark-nav': isDarkMode }"
        >Team</router-link
      >
      <router-link
        to="/manage"
        :class="{ 'light-nav': !isDarkMode, 'dark-nav': isDarkMode }"
        >Manage Users</router-link
      >
    </div>

    <div class="nav-2">
      <router-link to="/signin">Sign In</router-link>
      <a href="#" @click.prevent="onClick"
        >Log Out <img src="@/assets/icon-close.svg" alt=""
      /></a>
    </div>
  </div>
</template>

<script>
import { auth } from "@/main";

export default {
  name: "header",
  data() {
    return {};
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    },
  },
  methods: {
    onClick() {
      const user = auth.currentUser();
      user
        .logout()
        .then(() => {
          this.$router.push({
            name: "signin",
            params: {
              userLoggedOut: true,
            },
          });
        })
        .then((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.nav-light {
  background-color: $white;
}
.nav-dark {
  background-color: $super-dark-blue;
}
#nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  box-sizing: border-box;
  padding: 15px;

  a {
    font-weight: bold;
    color: $dark-grey;

    &.router-link-exact-active.dark-nav {
      color: $white;
    }
    &.router-link-exact-active.light-nav {
      color: $middle-blue;
    }
  }
}

.nav-1 {
  display: flex;
  align-items: center;
  a {
    margin-right: 20px;
    margin-left: 20px;
  }
}
</style>
