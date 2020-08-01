<template>
  <div
    class="container"
    :class="{ 'light-background': !isDarkMode, 'dark-backgrond': isDarkMode }"
  >
    <div
      class="request"
      :class="{ 'dark-request': !isDarkMode, 'light-request': isDarkMode }"
    >
      Don't have a mithun account?
      <router-link to="request">Request an account</router-link>
    </div>
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
      <button @click="toggleDarkMode" type="button">Toggle</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignIn",
  data() {
    return {
      //   isDarkMode: true,
    };
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    },
  },
  methods: {
    toggleDarkMode() {
      this.$store.dispatch("triggerDarkMode");
    },
  },
};
</script>

<style lang="scss" scoped>
.light-background {
  background-color: $light-grey;
}
.dark-background {
  background-color: $dark-blue;
}

.light-text {
  color: $white;
}
.dark-text {
  color: $black;
}

.light-field {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);

  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
}

.dark-field {
  background: rgba(198, 208, 235, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.2);

  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
}

.container {
  display: flex;

  align-items: center;
  justify-content: center;
  min-height: 100vh;
}
.request {
  position: absolute;
  top: 40px;
  right: 40px;
}

.light-request {
  color: rgba(255, 255, 255, 0.3);

  a {
    color: $white;
  }
}
.dark-request {
  color: rgba(0, 0, 0, 0.3);
  a {
    color: $black;
  }
}

.login {
  width: 400px;
}

h4 {
  line-height: 34px;
  font-size: 24px;
  text-align: center;
  color: #fff;
  margin: 0;
}

input {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-sizing: border-box;
  border-radius: 4px;
  width: 100%;
  height: 65px;
  font-size: 20px;
  color: white;
  padding-left: 20px;
  margin-top: 20px;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
}
button {
  background: #56ccf2;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  width: 100%;
  height: 60px;
  font-size: 20px;
  color: white;
  border: none;
  margin-top: 20px;
  margin-bottom: 40px;
  &:focus {
    border: none;
    outline: none;
  }
}
a {
  line-height: 25px;
  font-size: 16px;
  text-align: center;
  text-decoration: none;
}

.light-link {
  color: rgba(255, 255, 255, 0.3);
}

.dark-link {
  color: rgba(0, 0, 0, 0.3);
}
</style>
