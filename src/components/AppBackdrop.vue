<template>
  <div @click="onClick"></div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'backdrop',
  methods: {
    onClick() {
      this.$emit('on-toggle');
    },
  },
});
</script>

<style lang="scss" scoped>
div {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba($color: #000000, $alpha: 0.75);
  z-index: 10;
}
</style>
