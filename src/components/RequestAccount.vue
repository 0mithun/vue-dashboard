<template>
  <transition
    name="slide-in-right"
    enter-active-class=" animate__animated animate__slideInRight"
  >
    <div
      v-show="show"
      class="request"
      :class="{ 'dark-request': !isDarkMode, 'light-request': isDarkMode }"
    >
      Don't have a mithun account?
      <router-link to="request">Request an account</router-link>
    </div>
  </transition>
</template>

<script>
export default {
  name: "RequestAccount",
  data() {
    return {
      show: false,
    };
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    },
  },
  mounted() {
    this.show = true;
  },
};
</script>

<style lang="scss" scoped>
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

a {
  line-height: 25px;
  font-size: 16px;
  text-align: center;
  text-decoration: none;
}
</style>
