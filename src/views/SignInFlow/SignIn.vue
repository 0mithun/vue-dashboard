<template>
  <div
    class="container"
    :class="{ 'light-background': !isDarkMode, 'dark-backgrond': isDarkMode }"
  >
    <RequestAccount />
    <div class="login">
      <img src="@/assets/light-logo.png" alt="" v-show="!isDarkMode" />
      <img src="@/assets/dark-logo.png" alt="" v-show="isDarkMode" />
      <h4 :class="{ 'dark-text': !isDarkMode, 'light-text': isDarkMode }">
        Sign into Mithun
      </h4>
      <input
        type="email"
        placeholder="Email"
        :class="{ 'dark-field': !isDarkMode, 'light-field': isDarkMode }"
      /><input
        type="password"
        placeholder="Password"
        :class="{ 'dark-field': !isDarkMode, 'light-field': isDarkMode }"
      />
      <button>Sign In</button>

      <router-link
        to="recover"
        :class="{ 'dark-link': !isDarkMode, 'light-link': isDarkMode }"
        >Forgot your password?</router-link
      >
      <ThemeSwitch />
    </div>
  </div>
</template>

<script>
import RequestAccount from "@/components/RequestAccount.vue";
import ThemeSwitch from "@/components/ThemeSwitch.vue";
export default {
  name: "SignIn",
  components: {
    RequestAccount,
    ThemeSwitch,
  },

  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;

  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

.login {
  width: 400px;
  text-align: center;
}
</style>
