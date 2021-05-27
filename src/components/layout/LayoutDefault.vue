<template>
  <div :class="$options.name">
    <app-header />
    <router-view />
  </div>
</template>

<script>
import AppHeader from "../app/AppHeader.vue";

export default {
  name: "LayoutDefaut",
  components: {
    AppHeader,
  },
};
</script>

<style lang="scss" scoped>
.LayoutDefaut {
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  font-family: "Segoe UI", sans-serif;
  font-weight: 400;
}
</style>
