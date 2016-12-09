<template>
  <div class="project">
    <finder
      :loading="loading"
      :headerTitle="project.client"
      :projectFolders="project.folders" />
  </div>
</template>

<script>
  import Finder from 'components/Finder/Finder'
  export default {
    components: { finder: Finder },
    data() {
      return {
        loading: false,
        project: null
      }
    },
    created () {
      this.setProject()
    },
    watch: {
      '$route': 'setProject'
    },
    methods: {
      setProject() {
        this.loading = true
        const activeProjectId = this.$route.params.projectId
        const projects = this.$store.getters.projects
        for ( var i = 0; i < projects.length; i++ ) {
          if ( projects[i].id === activeProjectId ) {
            this.loading = false
            this.project = projects[i]
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .project {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
</style>
