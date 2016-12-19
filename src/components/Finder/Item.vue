<template>
  <router-link
    tag="li"
    :to="{ name: 'itemViewer', params: { itemId: itemId }}"
    class="finder_item">
    <div class="finder_item_icon"></div>
    <p>{{ itemName }}</p>
  </router-link>
</template>

<script>
  export default {
    props: {
      itemId: { type: String, required: true },
      itemName: { type: String, required: true }
    }
  }
</script>

<style lang="scss" scoped>

  @import '~styles/vars';
  $iconWidth: 18px;

  $borderRadius-finderFolder: 1px;

  .finder {
    &_item {
      padding: $scale 0 0 $scale;
      display: flex;
      align-items: center;
      cursor: pointer;

      &:last-child { padding-bottom: $scale; }

      &_icon {
        margin-right: $scale-1-2;
        width: 18px;
        height: 14px;
        background: $color-brandDark-lighter-2;
        border-radius: $borderRadius-finderFolder;
        border-top-left-radius: 0; 
      }
    }
  }

</style>
