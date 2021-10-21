<template>
  <section>
    <!-- <h2>{{ $page.aboutMe.title }}</h2> -->
    <!-- <div v-html="$page.aboutMe.content"></div> -->
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
  components: { AppContentInjector },
  metaInfo: {
    //title: this.$page.aboutMe.title,
  },
  mounted() {
    console.log('Page', this.$page);
  },
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
    padding: 3rem 0.5rem;
  }
}
</style>
