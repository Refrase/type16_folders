<template>
  <div class="itemViewer">

    <finder-header
      :title="item.label"
      linkName="finderWindow"
      :linkParams="{ folderId: item.idParentFolder }" />

    <div class="itemViewer_content">
      <img v-for="(url, index) in item.urls" :src="url" width="100%" />
    </div>

  </div>
</template>

<script>
  import FinderHeader from 'components/Finder/Header'
  export default {
    name: "item-viewer",
    components: {
      'finder-header': FinderHeader
    },
    computed: {
      item() { return this.$store.getters.itemActive }
    },
    created() {
      this.setDocumentsSubset()
      this.setItemActive()
    },
    methods: {
      setDocumentsSubset() { this.$store.commit('SET_DOCUMENTS_SUBSET', this.$route.params.folderId) },
      setItemActive() { this.$store.commit('SET_ITEM_ACTIVE', this.$route.params.itemId) },
      goBack() { this.$router.go(-1) }
    }
  }
</script>

<style lang="scss" scoped>

  @import '~styles/vars';
  @import '~styles/breakpoints';

  .itemViewer {
    position: absolute;
    z-index: 1;
    width: 140%;
    height: 160%;
    top: -40%;
    left: -20%;
    background: $color-brandLight;
    border-radius: $borderRadius;
    animation: fadeIn 200ms ease-out, pop 400ms $animationBezier;

    @include breakpoint('desktop') {
      top: -20%;
      height: 120%;
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
