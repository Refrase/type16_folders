<template>
  <div class="folder" @click="click" :id="title">
    <div class="folder_icon">
      <div class="folder_icon_top"></div>
      <div class="folder_icon_bottom"></div>
    </div>
    <p class="folder_title">{{ title }}</p>
  </div>
</template>

<script>
  export default {
    props: {
      title: { type: String, required: true },
      click: { type: Function, required: true }
    }
  }
</script>

<style lang="scss" scoped>

  @import '~styles/vars';

  .folder {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    cursor: pointer;

    &_icon {
      position: relative;
      display: block;
      width: 60px;
      height: 47px;

      &_top {
        position: absolute;
        top: 0;
        left: 0;
        width: 22px;
        height: 5px;
        border-top-left-radius: $borderRadius;
        border-top-right-radius: $borderRadius;
        background: $color-brandLight-darker-1;
      }

      &_bottom {
        position: absolute;
        top: 5px;
        left: 0;
        width: 60px;
        height: 40px;
        border-bottom-left-radius: $borderRadius;
        border-bottom-right-radius: $borderRadius;
        border-top-right-radius: $borderRadius;
        background: $color-brandLight;
      }
    }

    &_title {
      margin-top: $scale-1-2;
      font-weight: 100;
      text-align: center;
      font-size: $fontSize-small;
      top: 56px;
      width: 100%;
      color: $color-brandLight;
    }
  }

</style>
