<template>
  <div class="dock">
    <router-link :to="{ name: 'finderWindow', params: { folderId: 'all' } }">
      <img src="~assets/finder.svg" alt="Icon: Finder" class="dock_icon dock_icon-finder" width="18">
    </router-link>
    <router-link :to="{ name: 'mail' }">
      <img src="~assets/mail.png" alt="Icon: Mail" class="dock_icon dock_icon-mail" width="20">
    </router-link>
    <img src="~assets/notes.svg" alt="Icon: Notes" class="dock_icon dock_icon-notes" width="20">
  </div>
</template>

<script>
  export default { name: 'dock' }
</script>

<style lang="scss" scoped>

  @import '~styles/vars';

  .dock {
    position: fixed;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    padding: $scale-1-2;
    background: $color-brandLight;
    border-bottom-right-radius: $borderRadius;
    border-top-right-radius: $borderRadius;
    display: flex;
    flex-direction: column;
    align-items: center;

    &_icon {
      cursor: pointer;
      transition: transform 150ms ease-out;

      &:not(:last-child) {
        margin-bottom: $scale-1-2;
      }

      &:hover { transform: scale(1.2); }

      &-finder { margin: $scale-1-4; }
      &-mail { width: 23px; }
    }
  }

</style>
