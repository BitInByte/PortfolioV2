<template>
  <!-- <g-link to="/">{{ $static.metadata.siteName }}</g-link> -->
  <div>
    <div class="user-action" @click="toggleHeader">
      <font-awesome :icon="['fas', 'user']"></font-awesome>
    </div>
    <app-backdrop
      v-if="isHeaderOpen"
      class="hide-backdrop"
      @on-toggle="toggleHeader"
    ></app-backdrop>
    <transition name="open-status">
      <the-header
        v-if="isHeaderOpen"
        class="hide-backdrop"
        :isShow="isHeaderOpen"
      ></the-header>
    </transition>
    <the-header :isShow="false"></the-header>
    <!-- <header :class="{ show: isHeaderOpen }"> -->
    <!-- <div class="author"></div> -->
    <!-- <div class="bio-content"></div> -->
    <!-- </header> -->
    <main>
      <slot></slot>
    </main>
    <footer>
      <nav>
        <ul>
          <li>
            <g-link to="/">
              Home
            </g-link>
          </li>
          <li>
            <g-link to="/about">
              About Me
            </g-link>
          </li>
          <li>
            <g-link to="/projects">
              Projects
            </g-link>
          </li>
        </ul>
      </nav>
      <div class="dark-action">
        <dark-mode-switch></dark-mode-switch>
      </div>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script lang="ts">
import Vue from 'vue';
import DarkModeSwitch from '~/components/DarkModeSwitch.vue';
import AppBackdrop from '~/components/AppBackdrop.vue';
import TheHeader from '~/components/TheHeader.vue';
export default Vue.extend({
  data() {
    return {
      isHeaderOpen: false,
    };
  },
  components: {
    DarkModeSwitch,
    AppBackdrop,
    TheHeader,
  },
  mounted() {},
  methods: {
    toggleHeader(): void {
      console.log('toggled');
      this.isHeaderOpen = !this.isHeaderOpen;
    },
  },
});
</script>

<style lang="scss" scoped>
#app {
  display: flex;
  width: 98vw;
  height: 98vh;
  background-color: var(--bg-card);
  margin: auto;
  border-radius: 1rem;
  box-shadow: 0 0 0.5rem 0.1rem var(--bg-card);
  overflow: hidden;
  position: relative;

  @include respond(large) {
    width: 190rem;
  }
}

.open-status {
  &-enter-active,
  &-leave-active {
    transition: all 0.5s;
  }

  &-enter,
  &-leave-to {
    opacity: 0;
    width: 0;
  }
}

.hide-backdrop {
  @media only screen and (min-width: 53.125em) {
    display: none !important;
  }
}

.user-action {
  display: none;
  position: absolute;
  top: 1rem;
  left: 1rem;
  font-size: 2.5rem;
  cursor: pointer;

  &:hover svg path {
    color: var(--color-primary);
  }

  @include respond(mid) {
    display: block;
  }
  & svg {
    & path {
      color: var(--color-text);
      transition: all 0.3s ease-in;
    }
  }
}

main {
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  @include respond(mid) {
    padding-top: 2rem;
  }
}

footer {
  padding: 1rem 0.5rem;
  background-color: var(--bg-menu);
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  & nav {
    margin-top: 2rem;
    writing-mode: vertical-rl;
    text-orientation: mixed;

    & ul {
      display: flex;
      & li {
        color: var(--color-text);
        transition: 0.5s all ease-in;
        cursor: pointer;
        &:not(:first-child) {
          margin-top: 0.5rem;
        }

        &:not(:last-child) {
          &::after {
            content: '';
            margin-top: 0.5rem;
            border-bottom: 0.01rem solid var(--color-text);
          }
        }

        &:hover > a {
          color: var(--color-primary);
        }

        & a {
          color: var(--color-text);
          transition: color 0.3s ease-in;
        }
      }
    }
  }
}
</style>
