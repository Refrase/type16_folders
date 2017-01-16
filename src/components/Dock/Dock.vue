<template>
  <div class="dock">
    <router-link :to="{ name: 'finderWindow', params: { folderId: 'all' } }">
      <img src="~assets/finder.svg" alt="Icon: Finder" class="dock_icon dock_icon-finder" width="30">
    </router-link>
    <img src="~assets/mail.png" alt="Icon: Mail" class="dock_icon dock_icon-mail" width="30">
    <img src="~assets/notes.svg" alt="Icon: Notes" class="dock_icon dock_icon-notes" width="30">
  </div>
</template>

<script>
  export default { name: "dock" }
</script>

<style lang="scss" scoped>

  @import '~styles/vars';

  .dock {
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translate(-50%);
    padding: $scale;
    background: $color-brandLight;
    border-top-left-radius: $borderRadius;
    border-top-right-radius: $borderRadius;

    &_icon {
      cursor: pointer;
      transition: transform 150ms ease-out;

      &:not(:last-child) {
        margin-right: $scale-1-2;
      }

      &:hover { transform: scale(1.2); }

      &-finder { margin: $scale-1-4; }
      &-mail { width: 34px; }
    }
  }

</style>
