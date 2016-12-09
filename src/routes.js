import home from 'routes/home'
import project from 'routes/project'

export const routes = [
  { path: '/', component: home },
  { path: '/projects/:projectId', component: project }
]
