<template>
  <div :class="$options.name">
    <main :class="`${$options.name}__main`">
      <h1 :class="`${$options.name}__mainTitle`">
        Bitte wählen Sie, welche Sites und Bibliotheken durchgesucht werden
        sollen
      </h1>
      <div :class="`${$options.name}__explorer`">
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
    </main>
    <choose-directory-buttons />
  </div>
</template>

<script>
import ChooseDirectoryButtons from "./ChooseDirectoryButtons.vue";
import ChooseDirectoryFolder from "./ChooseDirectoryFolder.vue";
import { getDirectory, refreshFolder } from "./api-get-directory";

export default {
  name: "ChooseDirectory",

  components: {
    ChooseDirectoryButtons,
    ChooseDirectoryFolder,
  },

  data() {
    return {
      folders: {},
      selectedFolders: [],
      openedFolders: [],
    };
  },

  created() {
    const folders = getDirectory();
    this.folders = folders;
  },

  methods: {
    openFolder(folderKey) {
      this.openedFolders.push(folderKey);
    },

    closeFolder(folderKey) {
      this.openedFolders = this.openedFolders.filter((k) => k !== folderKey);
    },

    selectFolder(folderKey) {
      this.selectedFolders.push(folderKey);
    },

    unselectFolder(folderKey) {
      this.selectedFolders = this.selectedFolders.filter(
        (k) => k !== folderKey
      );
    },

    refreshFolder(folderKey) {
      const folders = refreshFolder(folderKey);
      this.folders = folders;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/components/main.mixin";

.ChooseDirectory {
  flex-grow: 3;
  min-height: 0;
  display: flex;
  flex-direction: column;

  &__main {
    @include main();
  }

  &__mainTitle {
    @include mainTitle();
  }

  &__explorer {
    border-radius: 7px 7px 0 0;
    background: $max-white;
    padding: 29px 40px 29px 5px;
    flex-grow: 3;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.05);
  }

  &__explorer > .classForBeforeDelete::before {
    display: none;
  }

  &__main::-webkit-scrollbar {
    width: 30px;
    background: $white;
    position: absolute;
    border: 10px solid $white;
  }

  &__main::-webkit-scrollbar-thumb {
    width: 10px;
    border-radius: 15px;
    background: $grey-2;
    border: 10px solid $white;
  }
}
</style>
