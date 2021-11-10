<template>
  <section>
    <h1>🙄 OOPSSSS Seems that there's nothing to visit here...</h1>
  </section>
</template>

<script lang="ts">
import TheTypewriterEffect from '~/components/TheTypewriterEffect.vue';
export default {
  metaInfo: {
    title: '404 - Not Found',
  },
  components: {
    TheTypewriterEffect,
  },
};
</script>

<style lang="scss" scoped>
section {
  display: flex;
  height: 100%;
  align-items: center;
  padding: 0 3rem;
}
</style>
