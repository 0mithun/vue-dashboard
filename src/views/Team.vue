<template>
  <div class="container">
    <h2>Team</h2>
    <div class="cards">
      <transition
        appear
        appear-active-class="animate__animated animate__flipInX"
      >
        <a
          href="#"
          class="card card-1"
          :class="{
            'light-card': !isDarkMode,
            'dark-card': isDarkMode,
          }"
        >
          <img
            src="@/assets/icon-1.svg"
            alt=""
            class="card-header"
            :class="{ 'light-card': !isDarkMode, 'dark-header': isDarkMode }"
          />
          <h3>Slack</h3>
          <p>Messaging app for all team communication</p>
        </a>
      </transition>

      <transition
        appear
        appear-active-class="animate__animated animate__flipInX"
      >
        <a
          href="#"
          class="card card-2"
          :class="{
            'light-card': !isDarkMode,
            'dark-card': isDarkMode,
          }"
        >
          <img
            src="@/assets/icon-2.svg"
            alt=""
            class="card-header"
            :class="{ 'light-card': !isDarkMode, 'dark-header': isDarkMode }"
          />
          <h3>Slack</h3>
          <p>Messaging app for all team communication</p>
        </a>
      </transition>

      <transition
        appear
        appear-active-class="animate__animated animate__flipInX"
      >
        <a
          href="#"
          class="card card-3"
          :class="{
            'light-card': !isDarkMode,
            'dark-card': isDarkMode,
          }"
        >
          <img
            src="@/assets/icon-3.svg"
            alt=""
            class="card-header"
            :class="{ 'light-card': !isDarkMode, 'dark-header': isDarkMode }"
          />
          <h3>Slack</h3>
          <p>Messaging app for all team communication</p>
        </a>
      </transition>

      <transition
        appear
        appear-active-class="animate__animated animate__flipInX"
      >
        <a
          href="#"
          class="card card-4"
          :class="{
            'light-card': !isDarkMode,
            'dark-card': isDarkMode,
          }"
        >
          <img
            src="@/assets/icon-4.svg"
            alt=""
            class="card-header"
            :class="{ 'light-card': !isDarkMode, 'dark-header': isDarkMode }"
          />
          <h3>Slack</h3>
          <p>Messaging app for all team communication</p>
        </a>
      </transition>

      <transition
        appear
        appear-active-class="animate__animated animate__flipInX"
      >
        <a
          href="#"
          class="card card-5"
          :class="{
            'light-card': !isDarkMode,
            'dark-card': isDarkMode,
          }"
        >
          <img
            src="@/assets/icon-5.svg"
            alt=""
            class="card-header"
            :class="{ 'light-card': !isDarkMode, 'dark-header': isDarkMode }"
          />
          <h3>Slack</h3>
          <p>Messaging app for all team communication</p>
        </a>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "Team",
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    },
  },
};
</script>

<style lang="scss" scoped>
h2 {
  @include heading-2;
}
h3 {
  @include heading-3;
  margin-bottom: 16px;
}

p {
  font-size: 15px;
  line-height: 24px;
  text-align: left;
  margin-left: 16px;
  margin-top: 0;
}

.container {
  margin-left: 25px;
}
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: space-evenly;
}
.card {
  margin: 20px;
  width: 100%;
  max-width: 300px;
  height: 400px;
  border-radius: 10px;
}

.card-header {
  width: 50%;
  border-radius: 10px 10px 0 0;
}

.light-header {
  background: $light-grey;
}
.dark-header {
  background: #283049;
}

.card-1 {
  animation-delay: 0s;
}
.card-2 {
  animation-delay: 0.5s;
}
.card-3 {
  animation-delay: 1s;
}
.card-4 {
  animation-delay: 1.5s;
}
.card-5 {
  animation-delay: 2s;
}

.light-card {
  background: $white;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);

  &:hover {
    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.35);
  }
}

.dark-card {
  background: $super-dark-blue;
  box-shadow: 0px 20px 40px rgba(255, 255, 255, 0.15);

  &:hover {
    box-shadow: 0px 20px 40px rgba(255, 255, 255, 0.35);
  }
}
</style>
