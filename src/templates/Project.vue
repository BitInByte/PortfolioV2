<template>
  <section>
    <div class="top">
      <g-link to="/projects">
        <div class="action ">
          <font-awesome :icon="['fas', 'arrow-left']"></font-awesome>
        </div>
      </g-link>
      <h2>{{ $page.project.title }}</h2>
      <a :href="$page.project.sourceLink" target="_blank">
        <div class="action">
          <font-awesome :icon="['fab', 'github']"></font-awesome>
        </div>
      </a>
    </div>
    <div class="image">
      <a :href="$page.project.liveLink" target="_blank">
        <g-image :src="$page.project.image"></g-image>
      </a>
    </div>
    <!-- <h3>Stack</h3> -->
    <ul>
      <li v-for="stack in $page.project.stack" :key="stack">{{ stack }}</li>
    </ul>
    <!-- <h3>Description</h3> -->
    <app-content-injector
      :content="$page.project.content"
      class="content"
    ></app-content-injector>
  </section>
</template>

<page-query>
query ($path: String!) {
    project: project(path: $path) {
        remoteImage
        title
        content
        stack
        sourceLink
        liveLink
  }
}
</page-query>

<script>
// Path in page query is injected automatically
// by gridsome
import AppContentInjector from '~/components/AppContentInjector.vue';
export default {
  components: { AppContentInjector },
  mounted() {
    console.log('Project: ', this.$page.project);
  },
};
</script>

<style lang="scss" scoped>
section {
  //display: flex;
  //flex-direction: column;
  //position: relative;

  & .top {
    display: flex;
    justify-content: space-between;

    & .action {
      font-size: 3rem;
      //position: absolute;
      //top: 0rem;
      //left: 0rem;

      &:hover {
        & svg {
          color: var(--color-primary);
        }
      }

      & svg {
        color: var(--color-text);
        transition: all 0.3s ease-in;
      }
    }
  }

  & .image {
    margin: 0 auto;
    width: 80%;
    height: auto;
    border-radius: 1.5rem;
    overflow: hidden;
    box-shadow: 0px 0px 0px 0px var(--color-primary);
    animation: pulse 5s linear infinite;

    @include respond(mid) {
      width: 100%;
    }

    & img {
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  }

  & .content {
    padding: 2rem;
    padding-top: 0;
    animation: fade 0.5s 1s forwards;
  }

  & ul {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 1rem 0;
    opacity: 0;
    animation: fade 0.5s 0.5s forwards;

    & li {
      &:not(:first-child) {
        margin-left: 4rem;
      }
      list-style: circle;
    }
  }

  & h2 {
    color: var(--color-primary);
    line-height: 1.3;
    text-align: center;
    margin-bottom: 2rem;
  }
}

@keyframes pulse {
  0%,
  100% {
    box-shadow: 0px 0px 0px 0px var(--color-primary);
  }
  10% {
    box-shadow: 0px 0px 6px 3px var(--color-primary);
  }
  20% {
    box-shadow: 0px 0px 0px 0px var(--color-primary);
  }
  30% {
    box-shadow: 0px 0px 6px 3px var(--color-primary);
  }
  40% {
    box-shadow: 0px 0px 0px 0px var(--color-primary);
  }
}
</style>
