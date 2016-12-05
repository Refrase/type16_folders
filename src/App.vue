<template>
  <div class="app">
    <router-view />
  </div>
</template>

<script>
  export default {}
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
