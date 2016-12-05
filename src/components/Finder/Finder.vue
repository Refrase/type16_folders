<template>
  <div class="finder">
    <div class="finder_header">
      <div class="finder_close" @click="click"></div>
      <p class="padding-1-4">{{ projectTitle }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      projectTitle: { type: String, default: 'Project' },
      shown: { type: Boolean, default: false },
      click: { type: Function }
    }
  }
</script>

<style lang="scss" scoped>

  @import '~styles/vars';

  .finder {
    position: absolute;
    top: 2%;
    left: 2%;
    width: 96%;
    height: 96%;
    background: $color-brandLight;
    border-radius: $borderRadius;

    &_header {
      position: absolute;
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

      &:hover {
        background: darken(#FD605C, 10%);
      }
    }
  }

</style>
