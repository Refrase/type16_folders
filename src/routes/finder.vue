<template>
  <div class="finderRoute">

    <div class="finder">

      <finder-header
        :title="documentsSubset.label"
        :backActive="backActive" />

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
  import FinderHeader from 'components/Finder/Header'
  export default {
    name: 'finder-route',
    components: {
      'finder-header': FinderHeader
    },
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
