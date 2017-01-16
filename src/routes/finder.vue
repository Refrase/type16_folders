<template>
  <div class="finderRoute">

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
        <p class="padding-1-4">{{ documentsSubset.label }}</p>
      </div>

      <transition name="slideFinderWindow">
        <router-view
          :documents="documentsSubset"
          :key="this.$route.params.folderId"> <!-- To differentiate components from each other, so that <transition> can animate between them -->
        </router-view>
      </transition>

    </div>

  </div>
</template>

<script>
  export default {
    name: "finder-route",
    data() {
      return {
        backActive: false
      }
    },
    computed: {
      documentsSubset() { return this.$store.getters.documentsSubset }
    },
    created() {
      this.routeInitAndWatchCalls()
    },
    watch: {
      '$route': 'routeInitAndWatchCalls'
    },
    methods: {
      routeInitAndWatchCalls() {
        this.setDocumentsSubset()
        this.checkForRouteParamsToActivateFinderBackButton()
      },
      setDocumentsSubset() { this.$store.commit('SET_DOCUMENTS_SUBSET', this.$route.params.folderId) },
      goBack() { this.$router.go(-1) },
      checkForRouteParamsToActivateFinderBackButton() { // TODO: When you go directly to a route with eg. folderId the back button becomes visible (it shouldn't)
        if ( this.$route.params.folderId || this.$route.params.itemId ) { this.backActive = true } else { this.backActive = false }
      }
    }
  }
</script>

<style lang="scss" scoped>

  @import '~styles/vars';

  .finderRoute {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .finder {
    position: relative;
    z-index: 1;
    width: 50%;
    height: 300px;
    background: $color-brandLight;
    border-radius: $borderRadius;
    animation: fadeIn 200ms ease-out, pop 400ms $animationBezier;

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

  .slideFinderWindow-enter {
    opacity: 0;
    transform: translateX(20px);
  }
  .slideFinderWindow-enter-active { transition: all 300ms 200ms ease-out; }
  .slideFinderWindow-leave {}
  .slideFinderWindow-leave-active {
    transition: all 150ms ease-out;
    opacity: 0;
    transform: translateX(-20px);
  }

</style>
