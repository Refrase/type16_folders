<template>
  <div class="finder_window">
    <ul>
      <finder-folder v-for="folder in documents.folders" :folder="folder" />
      <finder-item v-if="documents.items.length" v-for="item in documents.items" :item="item" />
    </ul>
    <router-view></router-view> <!-- ItemViewer -->
  </div>
</template>

<script>
  import FinderFolder from 'components/Finder/Folder'
  import FinderItem from 'components/Finder/Item'
  export default {
    name: "finder-window",
    components: {
      'finder-folder': FinderFolder,
      'finder-item': FinderItem
    },
    props: {
      documents: { type: Object }
    }
  }
</script>

<style lang="scss" scoped>

  .finder_window {
    position: absolute;
    width: 100%;
    height: 100%;
  }

</style>
