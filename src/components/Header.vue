<template>
  <div id="nav">
    <router-link to="/">Home</router-link>|
    <router-link to="/team">Team</router-link>|
    <router-link to="/signin">Sign In</router-link> |

    <a href="#" @click.prevent="onClick">Log Out</a>
  </div>
</template>

<script>
import { auth } from "@/main";

export default {
  name: "header",
  data() {
    return {};
  },
  methods: {
    onClick() {
      const user = auth.currentUser();
      user
        .logout()
        .then(() => {
          this.$router.push({
            name: "signin",
            params: {
              userLoggedOut: true,
            },
          });
        })
        .then((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
