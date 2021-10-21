<template>
  <label class="switch-container">
    <div class="icon icon-sun">
      <font-awesome :icon="['far', 'sun']"></font-awesome>
    </div>
    <input type="checkbox" @change="onSelect($event)" v-model="isChecked" />
    <span class="slider "></span>
    <div class="icon icon-moon">
      <font-awesome :icon="['far', 'moon']"></font-awesome>
    </div>
  </label>
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
  created: function() {
    const isDark: string | null = localStorage.getItem('theme');
    console.log('firing it', isDark);
    if (isDark && isDark === 'dark') {
      console.log('isDark');
      this.isChecked = true;
      this.doDark();
      //     <HTMLInputElement>(
      //     document.getElementsByClassName('dark-switch-checkbox')[0]
      // );
    }
  },
  methods: {
    onSelect: function(event: Event) {
      const isChecked = (<HTMLInputElement>event.target).checked;
      console.log(event);
      if (isChecked) {
        this.doTransition();
        //document.documentElement.setAttribute('data-theme', 'dark');
        this.doDark();
        localStorage.setItem('theme', 'dark');
      } else {
        this.doTransition();
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
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
  },
});
</script>

<style lang="scss" scoped>
.switch-container {
  --switch-width: 6rem;
  --switch-height: 3.4rem;
  --switch-slider: 2.6rem;
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
      /*-webkit-transform: translateX(26px);
      -ms-transform: translateX(26px);
      transform: translateX(26px);*/
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
      left: 4px;
      bottom: 4px;
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
}
</style>
