<template>
  <div class="container">
    <div class="request">
      Don't have a mithun account?
      <router-link to="request">Request an account</router-link>
    </div>
    <div class="login">
      <img src="@/assets/default.png" alt="" />
      <h4>Sign into Mithun</h4>
      <input type="email" placeholder="Email" /><input
        type="password"
        placeholder="Password"
      />
      <button>Sign In</button>

      <router-link to="recover">Forgot your password?</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignIn",
};
</script>

<style lang="scss" scoped>
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
  color: rgba(255, 255, 255, 0.3);

  a {
    color: white;
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
}
a {
  line-height: 25px;
  font-size: 16px;
  text-align: center;
  color: rgba(255, 255, 255, 0.3);
  text-decoration: none;
}
</style>
