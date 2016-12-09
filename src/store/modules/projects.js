import projects from 'data/projects'

const state = {
  projects: []
}

const mutations = {
  'SET_PROJECTS' (state, projects) {
    state.projects = projects
  }
}

const actions = {
  initProjects: ( {commit} ) => {
    commit('SET_PROJECTS', projects)
  }
}

const getters = {
  projects: state => {
    return state.projects
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
