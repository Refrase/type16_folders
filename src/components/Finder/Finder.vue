<template>
  <div class="finder">
    <div class="finder_header">
      <router-link to="/"><div class="finder_close"></div></router-Link>
      <p class="padding-1-4">{{ loading ? 'Loading...' : headerTitle }}</p>
    </div>
    <ul class="finder_items">
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
      loading: { type: Boolean, default: false },
      headerTitle: { type: String, default: 'Project' },
      projectFolders: { type: Array }
    }
  }
</script>

<style lang="scss" scoped>

  @import '~styles/vars';

  .finder {
    position: relative;
    z-index: 1;
    top: 2%;
    left: 2%;
    width: 50%;
    min-height: 300px;
    background: $color-brandLight;
    border-radius: $borderRadius;
    animation: fadeIn 200ms ease-out, pop 400ms $animationBezier;

    &_header {
      border-top-left-radius: $borderRadius;
      border-top-right-radius: $borderRadius;
      width: 100%;
      background: $color-brandLight-darker-1;
      text-align: center;
    }

    &_close {
      position: absolute;
      left: 8px;
      top: 7px;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: #FD605C;
      border: 1px solid darken(#FD605C, 10%);
      cursor: default;

      &:hover {
        background: darken(#FD605C, 10%);
      }
    }
  }

</style>
