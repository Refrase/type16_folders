<template>
  <div class="app">
    <home />
    <router-view />
  </div>
</template>

<script>
  import home from 'routes/home'
  export default {
    name: 'App',
    components: { home },
    created() {
      this.$store.dispatch('initProjects')
      this.$store.dispatch('assignParentFolderIdToChild') // Assigning ids from parent folder objects to child folder/item so they can be used to build url
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
