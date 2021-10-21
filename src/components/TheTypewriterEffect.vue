<template>
  <span>
    <span class="typed-text">{{ typeValue }}</span>
    <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
  </span>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
export default Vue.extend({
  props: {
    typeArray: {
      type: Array as PropType<string[]>,
      required: true,
    },
    typingSpeed: {
      type: Number,
      default: 200,
    },
    erasingSpeed: {
      type: Number,
      default: 100,
    },
    newTextDelay: {
      type: Number,
      default: 2000,
    },
  },
  data() {
    return {
      typeValue: '',
      typeStatus: false,
      typeArrayIndex: 0,
      charIndex: 0,
    };
  },
  methods: {
    typeText(): void {
      if (this.charIndex < this.typeArray[this.typeArrayIndex].length) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue += this.typeArray[this.typeArrayIndex].charAt(
          this.charIndex
        );
        this.charIndex += 1;

        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    eraseText(): void {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue = this.typeArray[this.typeArrayIndex].substring(
          0,
          this.charIndex - 1
        );
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.typeStatus = false;
        this.typeArrayIndex += 1;
        if (this.typeArrayIndex >= this.typeArray.length)
          this.typeArrayIndex = 0;
        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    },
  },
  created(): void {
    setTimeout(this.typeText, this.newTextDelay + 200);
  },
});
</script>

<style lang="scss" scoped>
.typed-text {
  color: var(--color-primary);
}

.cursor {
  display: inline-block;
  margin-left: 0.3rem;
  width: 0.1rem;
  background-color: var(--color-text);
  animation: cursorBlink 1s infinite;

  &.typing {
    animation: none;
  }
}

@keyframes cursorBlink {
  49% {
    background-color: var(--color-text);
  }
  50% {
    background-color: transparent;
  }
  99% {
    background-color: transparent;
  }
}
</style>
