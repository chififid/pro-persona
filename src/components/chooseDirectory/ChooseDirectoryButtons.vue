<template>
  <div :class="$options.name">
    <button :class="`${$options.name}__button`">Abbrechen</button>
    <div :class="`${$options.name}__buttonsGroup`">
      <button :class="`${$options.name}__button ${$options.name}__buttonBack`">
        Zurück
      </button>
      <button :class="`${$options.name}__button ${$options.name}__buttonBlue`">
        Scanvorgang starten
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChooseDirectoryButtons",
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/components/nav-buttons.mixin";

.ChooseDirectoryButtons {
  @include navButtons();

  &__buttonsGroup {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 370px;
    width: 100%;
    margin-left: 30px;
  }

  &__button {
    @include button();
  }

  &__buttonBlue {
    @include buttonBlue(13px, 48px);
  }

  &__buttonBack {
    position: relative;
    padding-left: 6px;

    &::before {
      content: "";
      position: absolute;
      width: 8px;
      height: 13px;
      background: url("~@/assets/img/arrow_blue_icon.svg");
      top: 6px;
      left: -8px;
      transition: 0.1s;
    }

    &:hover::before {
      left: -10px;
      opacity: 0.8;
    }
  }
}
</style>
