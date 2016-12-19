<template>
  <div class="finderWindow">
    <ul>
      <finder-item
        v-for="item in folderItems"
        :itemId="item.id"
        :itemName="item.name" />
    </ul>
  </div>
</template>

<script>
  import FinderItem from 'components/Finder/Item'
  export default {
    components: { 'finder-item': FinderItem },
    props: {
      projectFolders: { type: Array }
    },
    data() {
      return {
        folderItems: []
      }
    },
    created() {
      this.setFolderItems()
    },
    methods: {
      setFolderItems() {
        const activeFolderId = this.$route.params.folderId
        const folders = this.projectFolders
        for ( var i = 0; i < folders.length; i++ ) {
          if ( folders[i].id === activeFolderId ) {
            this.folderItems = folders[i].items
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

  @import '~styles/vars';

  .finderWindow {
    width: 100%;
    height: 100%;
    border-left: 1px solid $color-brandLight-darker-1;
  }

</style>
