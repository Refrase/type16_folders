<template>
  <div class="home">
    <!-- Background logo -->
    <router-link to="/">
      <div class="home_background">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 14.92"><path d="M.29,4.42H1.64v9.9a.25.25,0,0,0,.26.25h4c.15,0,.11-.1.11-.25V.42C6,.28,6,.2,5.8.22H.29A.28.28,0,0,0,0,.5s0,0,0,0L0,4.18C0,4.35.15,4.42.29,4.42ZM15,5.66a4,4,0,0,0-3,1.2c0-1.76.88-2.94,2.64-2.94a7.87,7.87,0,0,1,2.85.66.3.3,0,0,0,.39-.17l1-2.85c.06-.17,0-.26-.17-.37A8.58,8.58,0,0,0,14.27,0c-4,0-6.91,3.09-6.91,7.72,0,4.85,2.72,7.2,6.89,7.2,3.28,0,5.75-1.84,5.75-5C20,7.08,18,5.66,15,5.66Zm-1,5.79c-1.07,0-1.7-.54-1.7-1.42A1.89,1.89,0,0,1,14,9.1c.88,0,1.48.45,1.48,1.14S14.9,11.45,14,11.45Z"/></svg>
      </div>
    </router-link>
    <div class="folders">
      <router-link v-for="(project, index) in projects" :to="{ name: 'finderStart', params: { projectId: project.id } }" class="folder_link">
        <folder :client="project.client" />
      </router-link>
    </div>
  </div>
</template>

<script>
  import Folder from 'components/Folder'
  export default {
    components: { folder: Folder },
    computed: {
      projects() {
        return this.$store.getters.projects
      }
    }
  }
</script>

<style lang="scss" scoped>

  @import '~styles/vars';

  .home {
    position: absolute;
    height: 100%;
    width: 100%;

    &_background {
      position: absolute;
      height: 100%;
      width: 100%;
      left: 0;
      top: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      background: $color-brandDark;

      svg { width: 50%; max-width: 600px;
        & path { fill: lighten($color-brandDark, 4%); }
      }
    }
  }

  .folders {
    & .folder_link { position: absolute;
      &:nth-child(1) { left: 33%; top: 16%; }
      &:nth-child(2) { left: 20%; top: 40%; }
      &:nth-child(3) { left: 70%; top: 10%; }
      &:nth-child(4) { left: 56%; top: 63%; }
      &:nth-child(5) { left: 40%; top: 70%; }
    }
  }

</style>
