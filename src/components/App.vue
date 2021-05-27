<template>
  <div :class="$options.name">
    <layout-default />
  </div>
</template>

<script>
import LayoutDefault from "./layout/LayoutDefault";

export default {
  name: "App",
  components: {
    LayoutDefault,
  },
};
</script>
