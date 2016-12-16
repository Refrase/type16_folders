import home from 'routes/home'
import project from 'routes/project'
import FinderStart from 'components/Finder/Start'
import FinderWindow from 'components/Finder/Window'

export const routes = [
  { path: '/', component: home, name: 'home' },
  { path: '/project/:projectId', component: project, children: [
    { path: '', component: FinderStart, name: 'finderStart' },
    { path: ':folder', component: FinderWindow, name: 'finderWindow' }
  ]}
]
