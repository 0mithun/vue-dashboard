<template>
  <div
    class="container"
    :class="{ 'light-background': !isDarkMode, 'dark-backgrond': isDarkMode }"
  >
    <RequestAccount />
    <Notification v-if="hasText" :text="text" />
    <div class="login">
      <img src="@/assets/light-logo.png" alt="" v-show="!isDarkMode" />
      <img src="@/assets/dark-logo.png" alt="" v-show="isDarkMode" />
      <h4 :class="{ 'dark-text': !isDarkMode, 'light-text': isDarkMode }">
        Sign into Mithun
      </h4>

      <form @submit.prevent="onSubmit">
        <input
          type="email"
          placeholder="Email"
          v-model="email"
          :class="{ 'dark-field': !isDarkMode, 'light-field': isDarkMode }"
        /><input
          type="password"
          placeholder="Password"
          v-model="password"
          :class="{ 'dark-field': !isDarkMode, 'light-field': isDarkMode }"
        />
        <button type="submit">Sign In</button>
      </form>

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
import Notification from "@/components/Notification";
import { auth } from "@/main";

export default {
  name: "SignIn",
  data() {
    return {
      email: "",
      password: "",
      hasText: false,
      text: "",
    };
  },
  mounted() {
    const params = this.$route.params;
    if (params.userLoggedOut) {
      this.hasText = true;
      this.text = "You have logged out!";
    } else if (params.userRecoverAccount) {
      this.hasText = true;
      this.text = `A recovery email has been sent to ${params.email}`;
    } else if (params.userRequestedAccount) {
      this.hasText = true;
      this.text = `Your request has been sent to administrator for ${params.email}`;
    }
  },
  components: {
    RequestAccount,
    ThemeSwitch,
    Notification,
  },

  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    },
  },
  methods: {
    onSubmit() {
      auth
        .login(this.email, this.password, true)
        .then(() => {
          this.$router.replace("/");
        })
        .catch((err) => console.log(err));
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
