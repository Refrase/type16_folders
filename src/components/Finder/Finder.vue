<template>
  <div class="finder">
    <div class="finder_header">
      <div class="finder_header_actions">
        <router-link :to="{ name: 'home' }">
          <div class="finder_header_actions_close"></div>
        </router-Link>
        <div class="finder_header_actions_back" v-if="backActive" @click="goBack">
          <div class="finder_header_actions_back_arrow"></div>
          <div class="finder_header_actions_back_arrowCover"></div>
        </div>
      </div>
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
    },
    data() {
      return {
        backActive: false
      }
    },
    created() {
      this.checkForRouteParamsToActivateFinderBackButton()
    },
    watch: {
      '$route': 'checkForRouteParamsToActivateFinderBackButton'
    },
    methods: {
      goBack() {
        this.$router.go(-1)
      },
      checkForRouteParamsToActivateFinderBackButton() {
        if ( this.$route.params.folderId || this.$route.params.itemId ) {
          this.backActive = true
        } else {
          this.backActive = false
        }
        console.log(this.backActive);
      }
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
      position: relative;
      height: 28px;
      width: 100%;
      border-top-left-radius: $borderRadius;
      border-top-right-radius: $borderRadius;
      background: $color-brandLight-darker-1;
      text-align: center;

      &_actions {
        position: absolute;
        height: 100%;
        left: $scale-1-2;
        top: 0px;
        display: flex;
        justify-content: center;
        align-items: center;

        &_close {
          margin-right: $scale-1-2;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #FD605C;
          border: 1px solid darken(#FD605C, 10%);
          cursor: default;

          &:hover { background: darken(#FD605C, 10%); }
        }

        &_back {
          width: 22px;
          height: 18px;
          border-radius: $borderRadius;
          background: $color-brandLight;
          border: 1px solid $color-brandLight-darker-1;
          cursor: default;
          display: flex;
          justify-content: center;
          align-items: center;

          &:active {
            background: $color-brandLight-darker-2;
            & .finder_header_actions_back_arrow { background: $color-brandLight; }
            & .finder_header_actions_back_arrowCover { background: $color-brandLight-darker-2; }
          }

          &_arrow,
          &_arrowCover {
            position: absolute;
            width: 6px;
            height: 6px;
            transform: rotate(45deg);
          }

          &_arrow { background: $color-brandLight-darker-2; margin-left: 1px; }
          &_arrowCover { background: $color-brandLight; margin-left: 3px; }
        }
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
