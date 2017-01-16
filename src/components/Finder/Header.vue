<template>
  <div class="finder_header">
    <div class="finder_header_actions">
      <router-link :to="{ name: linkName, params: linkParams }">
        <div class="finder_header_actions_close"></div>
      </router-Link>
      <div class="finder_header_actions_back" v-if="backActive" @click="goBack">
        <div class="finder_header_actions_back_arrow"></div>
        <div class="finder_header_actions_back_arrowCover"></div>
      </div>
    </div>
    <p class="padding-1-4">{{ title }}</p>
  </div>
</template>

<script>
  export default {
    name: 'finder-header',
    props: {
      title: { type: String },
      backActive: { default: false, type: Boolean },
      linkName: { default: 'home', type: String },
      linkParams: { type: Object }
    },
    methods: {
      goBack() { this.$router.go(-1) }
    }
  }
</script>

<style lang="scss" scoped>

  @import '~styles/vars';

  .finder {

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

</style>
