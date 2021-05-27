<template>
  <div
    class="ChooseDirectoryFolder classForBeforeDelete"
    :class="{ active: opened }"
  >
    <div :class="`${$options.name}__header`">
      <img
        :class="`${$options.name}__arrow`"
        :src="require('@/assets/img/arrow_icon.svg')"
        alt="Arrow"
        @click="openManager(someKey)"
      />
      <div
        :class="`${$options.name}__iconFolder`"
        @click="openManager(someKey)"
      >
        <i class="mdi mdi-folder" v-if="!opened"></i>
        <i class="mdi mdi-folder-open" v-if="opened"></i>
      </div>
      <input
        :class="`${$options.name}__checkbox`"
        type="checkbox"
        :id="someKey"
        name="select"
        :value="someKey"
        @change="selectManager(someKey)"
      />
      <label :class="`${$options.name}__title`" :for="someKey">{{
        name
      }}</label>
      <transition :name="`${$options.name}__opacityManager`">
        <div
          :class="`${$options.name}__iconRefresh`"
          v-if="opened"
          @click="refreshFolder(someKey)"
        >
          <i class="mdi mdi-refresh"></i>
        </div>
      </transition>
    </div>
    <transition
      :name="`${$options.name}__heightManager`"
      @enter="startTransition"
      @after-enter="endTransition"
      @before-leave="startTransition"
      @after-leave="endTransition"
    >
      <div v-if="opened">
        <choose-directory-folder
          v-for="f in Object.entries(folders)"
          :key="f[0]"
          :someKey="f[0]"
          :name="f[1].name"
          :folders="f[1].folders"
          :opened="openedFolders.indexOf(f[0]) != -1"
          :openedFolders="openedFolders"
          :selected="selectedFolders.indexOf(f[0]) != -1"
          :selectedFolders="selectedFolders"
          @open-folder="openFolder"
          @close-folder="closeFolder"
          @select-folder="selectFolder"
          @unselect-folder="unselectFolder"
          @refresh-folder="refreshFolder"
        />
      </div>
    </transition>
  </div>
</template>

<script>
import ChooseDirectoryFolder from "./ChooseDirectoryFolder";

export default {
  name: "ChooseDirectoryFolder",

  components: {
    ChooseDirectoryFolder,
  },

  props: {
    someKey: {
      type: String,
      required: true,
    },

    name: {
      type: String,
      require: true,
    },

    folders: {
      type: Object,
      require: false,
      default: function () {
        return {};
      },
    },

    opened: {
      type: Boolean,
      require: false,
      default: false,
    },

    openedFolders: {
      type: Object,
      require: true,
    },

    selected: {
      type: Boolean,
      require: false,
      default: false,
    },

    selectedFolders: {
      type: Object,
      require: true,
    },
  },

  emits: {
    "open-folder": (value) => typeof value === "string",
    "close-folder": (value) => typeof value === "string",
    "select-folder": (value) => typeof value === "string",
    "unselect-folder": (value) => typeof value === "string",
    "refresh-folder": (value) => typeof value === "string",
  },

  methods: {
    openManager(folderKey) {
      if (this.openedFolders.indexOf(folderKey) != -1) {
        this.closeFolder(folderKey);
      } else {
        this.openFolder(folderKey);
      }
    },

    openFolder(folderKey) {
      this.$emit("open-folder", folderKey);
    },

    closeFolder(folderKey) {
      this.$emit("close-folder", folderKey);
    },

    selectManager(folderKey) {
      if (this.selectedFolders.indexOf(folderKey) != -1) {
        this.unselectFolder(folderKey);
      } else {
        this.selectFolder(folderKey);
      }
    },

    selectFolder(folderKey) {
      this.$emit("select-folder", folderKey);
    },

    unselectFolder(folderKey) {
      this.$emit("unselect-folder", folderKey);
    },

    startTransition(el) {
      el.style.height = el.scrollHeight + "px";
    },

    endTransition(el) {
      el.style.height = "";
    },

    refreshFolder(folderKey) {
      this.$emit("refresh-folder", folderKey);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/components/checkbox.mixin";

.ChooseDirectoryFolder {
  &__checkbox {
    @include checkbox();
  }

  & {
    position: relative;
    margin-top: 11px;
    padding-left: 35px;
    overflow: hidden;
  }

  &.active {
    position: relative;
    margin-top: 11px;
    padding-left: 35px;
    overflow: hidden;
  }

  &.active > & {
    display: block;
  }

  &::before {
    content: "";
    position: absolute;
    height: 1px;
    width: 20px;
    left: 10px;
    top: 10px;
    background: $grey;
  }

  &::after {
    content: "";
    position: absolute;
    width: 1px;
    height: 100%;
    background: $grey;
    top: 33px;
    left: 44px;
  }

  &__header {
    display: flex;
    align-items: center;
    padding-bottom: 8px;
  }

  &__arrow {
    transform: rotate(-90deg);
    transition: transform 0.2s;
    cursor: pointer;
  }

  &.active > &__header &__arrow:nth-child(1) {
    transform: rotate(0);
  }

  &__title {
    color: $purple;
    line-height: 21px;
    cursor: pointer;
  }

  &__iconFolder {
    color: $grey-2;
    margin: 0 -3px -2px 5px;
    cursor: pointer;
  }

  &__iconRefresh {
    color: $grey-2;
    margin: 0 0 -4px 10px;
    font-size: 20px;
    cursor: pointer;
  }

  &__heightManager-enter-active,
  &__heightManager-leave-active {
    will-change: height;
    transition: height 0.1s linear;
  }

  &__heightManager-enter-from,
  &__heightManager-leave-to {
    height: 0 !important;
  }

  &__opacityManager-enter-active,
  &__opacityManager-leave-active {
    transition: opacity 0.1s;
  }
  &__opacityManager-enter-from,
  &__opacityManager-leave-to {
    opacity: 0;
  }
}
</style>
