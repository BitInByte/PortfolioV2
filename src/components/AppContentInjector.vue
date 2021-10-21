<template>
  <div v-html="content"></div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    content: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
div {
  opacity: 0;
  animation: fade 0.5s 0.5s forwards;

  & ::v-deep ul {
    margin: 1rem 0;
    padding: 0 1.5rem;
    & li {
      text-align: left;

      &:before {
        content: '\279C';
        color: var(--color-primary);
        font-weight: bold;
        display: inline-block;
        width: 1em;
        //margin-right: -0.6rem;
        margin-left: -1em;
      }
    }
  }

  & ::v-deep hr {
    width: 90%;
    //border: 1px solid var(--color-text);
    display: block;
    border: 0;
    height: 0.02rem;
    //background-color: var(--color-primary);
    background-color: var(--color-text);
    margin: 1rem auto;
    position: relative;

    &:before {
      display: block;
      content: '';
      width: 75%;
      position: absolute;
      border: 0.02rem solid var(--color-primary);
      height: 0.04rem;
      background-color: var(--color-primary);
      box-shadow: 0 0 10px 5px var(--color-primary);
      left: 50%;
      top: 0;
      transform: translateX(-50%) scaleY(1.1);
    }
  }

  & ::v-deep h2 {
    opacity: 0;
    color: var(--color-primary);
    animation: fade 0.5s forwards;
  }
  & ::v-deep p {
    padding: 0.4rem 0;
    animation: fade 0.5s 0.5s forwards;
    & strong {
      color: var(--color-primary);
    }
    & em {
      color: var(--color-text);
    }
  }
}
</style>
