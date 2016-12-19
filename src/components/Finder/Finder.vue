<template>
  <div class="finder">
    <div class="finder_header">
      <router-link :to="{ name: 'home' }">
        <div class="finder_close"></div>
      </router-Link>
      <p class="padding-1-4">{{ loading ? 'Loading...' : headerTitle }}</p>
    </div>
    <transition name="slideFinderWindow">
      <router-view :projectFolders="projectFolders"></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
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
    width: 50%;
    height: 300px;
    background: $color-brandLight;
    border-radius: $borderRadius;
    animation: fadeIn 200ms ease-out, pop 400ms $animationBezier;
    overflow: hidden;

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

  .slideFinderWindow-enter {}
  .slideFinderWindow-enter-active { animation: slideIn 250ms $animationBezier forwards; }
  .slideFinderWindow-leave {}
  .slideFinderWindow-leave-active { animation: fadeOut 150ms $animationBezier forwards; }

  @keyframes slideIn {
  	0% 		{ transform: translateX(200px); opacity: 0; }
  	100% 	{ transform: translateX(0px); opacity: 1; }
  }

  @keyframes fadeOut {
  	0% 		{ opacity: 1; }
  	100% 	{ opacity: 0; }
  }

</style>
