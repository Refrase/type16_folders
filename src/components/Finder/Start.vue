<template>
  <div class="finderStart">
    <ul>
      <finder-folder
        v-for="(folder, index) in projectFolders"
        :folderName="folder" />
    </ul>
  </div>
</template>

<script>
  import FinderFolder from 'components/Finder/Folder'
  export default {
    components: { 'finder-folder': FinderFolder },
    props: {
      projectFolders: { type: Array }
    }
  }
</script>

<style lang="scss" scoped>
  .finderStart {
    width: 100%;
    height: 100%;
    position: absolute;
  }
</style>
