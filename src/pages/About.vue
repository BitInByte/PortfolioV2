<template>
  <section>
    <app-content-injector
      :content="$page.aboutMe.content"
    ></app-content-injector>
  </section>
</template>

<page-query>
query {
  aboutMe: content(path: "/git-source/about-me/about-me/") {
    title
    content
  }
}
</page-query>

<script>
import AppContentInjector from '~/components/AppContentInjector.vue';
export default {
  metaInfo: {
    title: 'About Me',
  },
  components: { AppContentInjector },
};
</script>

<style lang="scss" scoped>
strong {
  color: var(--color-primary);
}

section {
  //font-family: 'Montserrat', sans-serif;
  font-size: 1.8rem;
  text-align: center;
  padding: 3rem 3rem;

  @include respond(mid) {
    padding: 3rem 1.5rem;
  }
}
</style>
