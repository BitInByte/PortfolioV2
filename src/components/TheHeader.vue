<template>
  <header :class="{ show: isShow }" id="header-content" ref="header">
    <div class="author" ref="author">
      <g-image src="~/assets/images/me.jpeg"></g-image>
      <p class="signature">João Pedro</p>
      <a
        class="btn btn-filled"
        style="width: 80%;"
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Resume
      </a>
      <div class="social">
        <a :href="$static.social.linkedin" target="_blank">
          <font-awesome :icon="['fab', 'linkedin']"></font-awesome>
        </a>

        <a :href="$static.social.github" target="_blank">
          <font-awesome :icon="['fab', 'github']"></font-awesome>
        </a>

        <a :href="$static.social.twitter" target="_blank">
          <font-awesome :icon="['fab', 'twitter']"></font-awesome>
        </a>

        <a :href="$static.social.instagram" target="_blank">
          <font-awesome :icon="['fab', 'instagram']"></font-awesome>
        </a>

        <a :href="$static.social.youtube" target="_blank">
          <font-awesome :icon="['fab', 'youtube']"></font-awesome>
        </a>

        <a :href="`mailto:${$static.social.email}`" target="_blank">
          <font-awesome :icon="['fas', 'envelope']"></font-awesome>
        </a>
      </div>
    </div>
    <div class="bio-content" ref="bio">
      <app-content-injector
        :content="$static.stack.content"
      ></app-content-injector>
    </div>
  </header>
</template>

<static-query>
query {
  stack: content(path: "/git-source/stack/stack") {
    title
    content
  }
  social: content(path: "/git-source/about-me/about-me/") {
    twitter
    github
    linkedin
    instagram
    youtube
    email
  }
}
</static-query>

<script lang="ts">
import Vue from 'vue';
import AppContentInjector from '~/components/AppContentInjector.vue';
export default Vue.extend({
  components: { AppContentInjector },
  props: {
    isShow: {
      type: Boolean,
      required: true,
    },
  },
  mounted(): void {
    const totalHeaderHeight = (this.$refs.header as HTMLDivElement)
      .clientHeight;
    const authorHeight = (this.$refs.author as HTMLDivElement).clientHeight;
    const bio = this.$refs.bio as HTMLDivElement;
    if (totalHeaderHeight && authorHeight && bio) {
      const remainingHeight = totalHeaderHeight - authorHeight;
      bio.style.height = remainingHeight + 'px';
    }
  },
});
</script>

<style lang="scss" scoped>
header {
  display: flex;
  width: 30rem;
  height: 100%;
  animation: fade 0.5s forwards;
  flex-direction: column;

  @include respond(mid) {
    width: 25rem;
  }

  &.hide {
    display: none;
  }

  &.show {
    display: block;
  }

  @include respond(mid) {
    display: none;
    z-index: 20;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
  }

  & .author {
    height: 25rem;
    background-color: var(--bg-menu-sec);
    display: flex;
    flex-direction: column;
    //justify-content: center;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;

    & img {
      width: 13rem;
      border-radius: 50%;
      box-shadow: 0px 0px 6px 3px var(--color-primary);
      animation: pulse 1.5s infinite;
    }

    & .signature {
      font-family: 'Rouge Script', cursive;
      //margin-top: 1rem;
      font-size: 3rem;
    }

    & .social {
      display: flex;
      //justify-content: space-around;
      justify-content: center;
      font-size: 2rem;
      margin-top: 0.5rem;

      & a {
        & svg {
          color: var(--color-text);
          transition: all 0.3s ease-in;
        }
        &:not(:last-child) {
          margin-right: 1rem;
        }
        &:hover {
          & svg {
            color: var(--color-primary);
          }
        }
      }
    }
  }

  & .bio-content {
    background-color: var(--bg-menu);
    height: 100%;
    padding: 2rem;
    text-align: center;
    overflow-y: scroll;
    position: relative;
    //display: flex;
    //flex-direction: 1;
    flex: 1;
  }
}

@keyframes pulse {
  0% {
    box-shadow: 0px 0px 0px 0px var(--color-primary);
  }
  70% {
    box-shadow: 0px 0px 6px 3px var(--color-primary);
  }
  100% {
    box-shadow: 0px 0px 0px 0px var(--color-primary);
  }
}
</style>
