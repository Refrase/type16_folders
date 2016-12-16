<template>
  <router-link
    tag="li"
    :to="{ name: 'finderWindow', params: { folder: folderName.toLowerCase() }}"
    class="finder_folder">
    <div class="finder_folder_icon finder_folder_icon-folder">
      <div class="finder_folder_icon-folder_top"></div>
      <div class="finder_folder_icon-folder_bottom"></div>
    </div>
    <p>{{ folderName }}</p>
  </router-link>
</template>

<script>
  export default {
    props: {
      folderName: { type: String, required: true }
    }
  }
</script>

<style lang="scss" scoped>

  @import '~styles/vars';
  $iconWidth: 18px;

  $borderRadius-finderFolder: 1px;

  .finder {
    &_folder {
      padding: $scale 0 0 $scale;
      display: flex;
      align-items: center;
      cursor: pointer;

      &:last-child { padding-bottom: $scale; }

      &_icon { margin-right: $scale-1-2;
        &-folder { margin-bottom: 0px;
          &_top { width: 8px; height: 2px; background: black; border-top-left-radius: $borderRadius-finderFolder; border-top-right-radius: $borderRadius-finderFolder; }
          &_bottom { width: 18px; height: 12px; background: $color-brandDark-lighter-2; border-radius: $borderRadius-finderFolder; border-top-left-radius: 0; }
        }
      }
    }
  }

</style>
