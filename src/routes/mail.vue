<template>
  <div class="mailRoute">

    <div class="mail">

      <finder-header title="Mail" />

    </div>

  </div>
</template>

<script>
  import FinderHeader from 'components/Finder/Header'
  export default {
    name: 'mail-route',
    components: {
      'finder-header': FinderHeader
    }
  }
</script>

<style lang="scss" scoped>

  @import '~styles/vars';

  .mailRoute {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .mail {
    position: relative;
    z-index: 1;
    width: 50%;
    height: 300px;
    background: $color-brandLight;
    border-radius: $borderRadius;
    animation: fadeIn 200ms ease-out, pop 400ms $animationBezier;
  }

</style>
