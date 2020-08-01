<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import "@/global-styles/colors.scss";
@import "@/global-styles/typography.scss";
body {
  background-color: $dark-blue;
}
#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  font-family: $system-font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $white;
}

h1 {
  @include heading-1($purple);
}

p {
  @include large-text-bold;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: $white;
    }
  }
}
</style>
