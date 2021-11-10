<template>
  <div @click="onSelect($event)">
    <input type="checkbox" name="switch" v-model="isChecked" />
    <label for="switch"></label>
  </div>
  <!-- <label class="switch-container"> -->
  <!-- <div class="icon icon-sun"> -->
  <!-- <font-awesome :icon="['far', 'sun']"></font-awesome> -->
  <!-- </div> -->
  <!-- <input type="checkbox" @change="onSelect($event)" v-model="isChecked" /> -->
  <!-- <span class="slider "></span> -->
  <!-- <div class="icon icon-moon"> -->
  <!-- <font-awesome :icon="['far', 'moon']"></font-awesome> -->
  <!-- </div> -->
  <!-- </label> -->
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'dark-mode-switch',
  data() {
    return {
      isChecked: false,
    };
  },
  beforeMount: function() {
    const isDark: string | null = localStorage.getItem('theme');
    if (isDark !== null && isDark === 'dark') {
      this.isChecked = true;
      this.doDark();
    }
  },
  methods: {
    onSelect: function(event: Event) {
      if (this.isChecked) {
        this.isChecked = false;
        this.doLight();
        localStorage.setItem('theme', 'light');
      } else {
        this.isChecked = true;
        this.doDark();
        localStorage.setItem('theme', 'dark');
      }
    },
    doTransition: () => {
      document.documentElement.classList.add('transition');
      window.setTimeout(() => {
        document.documentElement.classList.remove('transition');
      }, 1000);
    },
    doDark: () => {
      document.documentElement.setAttribute('data-theme', 'dark');
    },
    doLight: () => {
      document.documentElement.setAttribute('data-theme', 'light');
    },
  },
});
</script>

<style lang="scss" scoped>
div {
  --switch-width: 6rem;
  --switch-height: 3.4rem;
  --slider-size: 3rem;
  --slider-gap: 4px;
  @include respond(small) {
    --switch-width: 4.5rem;
    --switch-height: 3.2rem;
    --slider-size: 2.8rem;
    --slider-gap: 2px;
  }
  & input {
    width: 0;
    height: 0;
    visibility: hidden;

    &:checked + label:after {
      left: calc(100% - var(--slider-gap));
      transform: translateX(-100%) translateY(-50%);
    }
  }

  & label {
    width: var(--switch-width);
    height: var(--switch-height);
    display: block;
    background-color: var(--color-primary);
    border-radius: 400rem;
    position: relative;
    cursor: pointer;
    transition: 0.5s;

    &:after {
      content: '';
      width: var(--slider-size);
      height: var(--slider-size);
      position: absolute;
      border-radius: 400rem;
      top: 50%;
      left: var(--slider-gap);
      background-color: #ffffff;
      transform: translateY(-50%);
      transition: 0.5s;
      z-index: 100;
    }
  }
}
/*.switch-container {
  --switch-width: 6rem;
  --switch-height: 3.4rem;
  --switch-slider: 2.6rem;
  --switch-move-x: 0.4rem;
  --switch-move-y: 0.4rem;
  @include respond(small) {
    --switch-width: 4rem;
    --switch-height: 2.9rem;
    --switch-slider: 2.1rem;
    --switch-move-x: -0.4rem;
    --switch-move-y: 0.4rem;
  }
  position: relative;
  display: inline-block;
  //width: 60px;
  width: var(--switch-width);
  //height: 34px;
  height: var(--switch-height);

  & input {
    opacity: 0;
    width: 0;
    height: 0;

    &:checked + .slider {
      //  background-color: #2196f3;
      background-color: var(--color-primary);
    }

    &:focus + .slider {
      //box-shadow: 0 0 1px #2196f3;
      box-shadow: 0 0 1px var(--color-primary);
    }
    &:checked + .slider:before {
      -webkit-transform: translateX(var(--switch-slider));
      -ms-transform: translateX(var(--switch-slider));
      transform: translateX(var(--switch-slider));
    }
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--color-primary);
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: var(--switch-height);

    &:before {
      position: absolute;
      content: '';
      height: var(--switch-slider);
      width: var(--switch-slider);
      left: var(--switch-move-x);
      bottom: var(--switch-move-y);
      background-color: white;
      -webkit-transition: 0.4s;
      transition: 0.4s;
      border-radius: 50%;
      z-index: 3;
    }
  }

  & .icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;

    &-sun {
      left: 0.4rem;
    }

    &-moon {
      right: 0.4rem;
    }

    & svg {
      & path {
        color: var(--bg-menu);
      }
    }
  }
}*/
</style>
