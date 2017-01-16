<template>
  <div class="itemViewer">
    <div class="itemViewer_header">
      <router-link
        tag="div"
        :to="{
          name: 'finderWindow',
          params: { folderId: item.idParentFolder }
        }"
        class="itemViewer_close"></router-link>
      <p class="padding-1-4">{{ item.label }}</p>
    </div>
    <div class="itemViewer_content">
      <img v-for="(url, index) in item.urls" :src="url" width="100%" />
    </div>
  </div>
</template>

<script>
  export default {
    name: "item-viewer",
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
