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
        Recover your account
      </h4>

      <form @submit.prevent="onSubmit">
        <input
          type="email"
          placeholder="Email"
          v-model="email"
          :class="{ 'dark-field': !isDarkMode, 'light-field': isDarkMode }"
        />
        <button type="submit">Send Email</button>
      </form>

      <router-link
        to="signin"
        :class="{ 'dark-link': !isDarkMode, 'light-link': isDarkMode }"
        >Already have an accoun? Sign In now</router-link
      >
      <ThemeSwitch />
    </div>
  </div>
</template>

<script>
import RequestAccount from "@/components/RequestAccount.vue";
import ThemeSwitch from "@/components/ThemeSwitch.vue";
import { auth } from "@/main";

export default {
  name: "Recover",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  components: {
    RequestAccount,
    ThemeSwitch,
  },

  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    },
  },
  methods: {
    onSubmit() {
      auth.requestPasswordRecovery(this.email).then(() => {
        this.$router.push({
          name: "signin",
          params: {
            userRecoverAccount: true,
            email: this.email,
          },
        });
      });
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
