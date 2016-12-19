<template>
  <div class="itemViewer">
    <div class="itemViewer_header">
      <div class="itemViewer_close" @click="goBack"></div>
      <p class="padding-1-4">{{ headerTitle }}</p>
    </div>
    <div class="itemViewer_content">
      <img :src="item" width="100%" />
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      projectFolders: { type: Array }
    },
    data() {
      return {
        headerTitle: this.$route.params.itemId,
        item: null
      }
    },
    created () {
      this.setItem()
    },
    methods: {
      setItem() {
        const activeFolderId = this.$route.params.folderId
        const folders = this.projectFolders
        let folderItems = []
        const activeItemId = this.$route.params.itemId
        // Loop through folders and find the one matching the active folder (fetched through the url param)
        for ( var i = 0; i < folders.length; i++ ) {
          if ( folders[i].id === activeFolderId ) {
            folderItems = folders[i].items
            // Loop through items in the active folder and find the one matching the active item (fetched through the url param)
            for ( var i = 0; i < folderItems.length; i++ ) {
              if ( folderItems[i].id === activeItemId ) {
                this.item = folderItems[i].url
                this.headerTitle = folderItems[i].name
              }
            }
          }
        }
      },
      goBack() {
        this.$router.go(-1)
      }
    }
  }
</script>

<style lang="scss" scoped>

  @import '~styles/vars';

  .itemViewer {
    position: relative;
    z-index: 1;
    width: 80%;
    height: 80%;
    align-self: flex-start;
    background: $color-brandLight;
    border-radius: $borderRadius;
    margin-top: $scale-2-1;
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

    &_content {
      position: relative;
      width: 100%;
      max-height: 100%;
      overflow-x: hidden;
      overflow-y: scroll;
    }
  }

</style>
