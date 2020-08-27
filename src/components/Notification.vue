<template>
  <div class="bubble">
    <div class="message">
      <h3>This is a test</h3>
      {{ text }}
    </div>
  </div>
</template>

<script>
export default {
  props: ["text"],
  name: "Notification",
};
</script>

<style lang="scss" scoped>
.bubble {
  border-radius: 6px;
  position: absolute;
  top: 10%;
  padding: 5px 10px 5px 10px;
}

.message {
  @include medium-text;
  color: $white;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
