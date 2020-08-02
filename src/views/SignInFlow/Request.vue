<template>
  <div
    class="container"
    :class="{ 'light-background': !isDarkMode, 'dark-backgrond': isDarkMode }"
  >
    <div class="login">
      <img src="@/assets/light-logo.png" alt="" v-show="!isDarkMode" />
      <img src="@/assets/dark-logo.png" alt="" v-show="isDarkMode" />
      <h4 :class="{ 'dark-text': !isDarkMode, 'light-text': isDarkMode }">
        Request Account
      </h4>

      <form @submit.prevent="onSubmit">
        <input
          type="email"
          placeholder="Email"
          v-model="email"
          :class="{ 'dark-field': !isDarkMode, 'light-field': isDarkMode }"
        />
        <button type="submit">Request Account</button>
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
import ThemeSwitch from "@/components/ThemeSwitch.vue";

export default {
  name: "Recover",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  components: {
    ThemeSwitch,
  },

  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    },
  },
  methods: {
    onSubmit() {
      //Slack Api Logic
      let slackURL = new URL("https://slack.com/api/chat.postMessage");
      const data = {
        token:
          "xoxp-1275352366661-1289349734929-1289353373873-3b417a7f8ed7d84fdbe40ba6828060ce",
        channel: "administrator",
        text: `${this.email} requested admin access to vue-dashboard please go to netlify then invite them`,
      };

      slackURL.search = new URLSearchParams(data);

      fetch(slackURL)
        .then(() => {
          // console.log(res);
          this.$router.push({
            name: "signin",
            params: {
              userRequestedAccount: true,
              email: this.email,
            },
          });
        })
        .catch((err) => {
          console.log(err);
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
