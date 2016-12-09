<template>
  <div class="app">
    <home />
    <router-view />
  </div>
</template>

<script>
  import home from 'routes/home'
  export default {
    components: { home },
    created() {
      this.$store.dispatch('initProjects')
    }
  }
</script>

<style lang="scss">

  @import './styles/reset';
  @import './styles/global';
  @import './styles/helpers';

  .app {
    height: 100%;
    width: 100%;
  }

</style>
