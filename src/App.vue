<template>
  <div
    id="app"
    :class="{ 'light-background': !isDarkMode, 'dark-background': isDarkMode }"
  >
    <router-view />
  </div>
</template>

<script>
import "animate.css";
export default {
  mounted() {
    const isDarkMode = this.$store.getters.isDarkMode;

    document.body.style.background = isDarkMode ? "#212c4f" : "#f0f3f5";
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    },
  },
};
</script>

<style lang="scss">
body {
  background-color: $dark-blue;
  margin: 0;
}

* {
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
}

line,
text {
  opacity: 0.2;
}
#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  font-family: $system-font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $white;
}

h1 {
  @include heading-1($purple);
}

p {
  @include large-text-bold;
}

.light-background {
  background-color: $light-grey;
  line,
  text {
    stroke: $dark-grey;
  }
}
.dark-background {
  background-color: $dark-blue;
  line,
  text {
    stroke: $light-grey;
  }
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

.light-box {
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.dark-box {
  background-color: rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.1);
}
</style>
