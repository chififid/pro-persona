<template>
  <header :class="$options.name">
    <div class="logo">
      <img
        class="logo__img"
        :src="require('@/assets/img/logo.svg')"
        alt="Logo"
      />
    </div>
    <div :class="`${$options.name}__nav`">
      <div :class="`${$options.name}__navItem`" @click="hide">
        <img
          :class="`${$options.name}__navImg`"
          :src="require('@/assets/img/hide_icon.svg')"
          alt="Hide"
        />
      </div>
      <div :class="`${$options.name}__navItem`" @click="full">
        <img
          :class="`${$options.name}__navImg`"
          :src="require('@/assets/img/full_window_icon.svg')"
          alt="Full window"
        />
      </div>
      <div :class="`${$options.name}__navItem`" @click="close">
        <img
          :class="`${$options.name}__navImg`"
          :src="require('@/assets/img/close_icon.svg')"
          alt="Close"
        />
      </div>
    </div>
  </header>
</template>

<script>
import { hideWindow, fullWindow, closeWindow } from "./api-header";

export default {
  name: "AppHeader",

  methods: {
    hide() {
      hideWindow();
    },
    full() {
      fullWindow();
    },
    close() {
      closeWindow();
    },
  },
};
</script>

<style lang="scss" scoped>
.AppHeader {
  display: flex;
  justify-content: space-between;
  padding: 12px 24px 12px;
  background: $purple;
  border-radius: 10px 10px 0 0;

  &__nav {
    display: flex;
    align-items: center;
    max-width: 100px;
    width: 100%;
  }

  &__navItem {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0);
    transition: background 0.3s;
  }

  &__navHide {
    align-items: flex-end;
    padding-bottom: 12px;
  }

  &__navItem:hover {
    background: rgba(0, 0, 0, 0.05);
  }

  &__navImg {
    transition: filter 0.3s;
  }

  &__navItem:hover &__navImg {
    filter: brightness(200%);
  }
}
</style>
