<template>
  <div id="nav">
    <router-link to="/">Home</router-link>|
    <router-link to="/about">About</router-link>
    <router-link to="/sign-in">Sign In</router-link>
  </div>
</template>

<script>
export default {
  name: "header",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
