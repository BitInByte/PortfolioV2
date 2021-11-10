<template>
  <section>
    <h1>Hello, 👋🏽</h1>
    <h2>My name is João Pedro</h2>
    <p>
      And I am a
      <the-typewriter-effect
        :typeArray="[
          'software engineer student',
          'front-end self-taught',
          'electronic enthusiastic',
          'eSports lover',
        ]"
        :typingSpeed="40"
      ></the-typewriter-effect>
    </p>
  </section>
</template>

<script lang="ts">
import TheTypewriterEffect from '~/components/TheTypewriterEffect.vue';
export default {
  metaInfo: {
    title: 'Home',
  },
  components: {
    TheTypewriterEffect,
  },
};
</script>

<style lang="scss" scoped>
section {
  font-family: 'Montserrat', sans-serif;
  //width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & h1,
  h2,
  p {
    opacity: 0;
    transform: translateY(-20px);
  }

  & h1 {
    animation: slide 0.5s forwards;
  }

  & h2 {
    animation: slide 0.5s 0.5s forwards;
  }

  & p {
    animation: slide 0.5s 1s forwards;
  }
}

@keyframes slide {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
