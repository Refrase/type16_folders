<template>
  <div class="app">
    <h1>TYPE16</h1>
    <p>Site</p>
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
    min-height: 100%;
    width: 100%;
    background: lighten($color-brandLight, 4%);
  }
</style>
