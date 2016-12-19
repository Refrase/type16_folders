import home from 'routes/home'
import project from 'routes/project'
import FinderStart from 'components/Finder/Start'
import FinderWindow from 'components/Finder/Window'
import ItemViewer from 'components/ItemViewer'

export const routes = [
  { path: '/', component: home, name: 'home' },
  { path: '/project/:projectId', component: project, children: [
    { path: '', component: FinderStart, name: 'finderStart' },
    { path: ':folderId', component: FinderWindow, name: 'finderWindow' },
    { path: ':folderId/:itemId', components: {'item-viewer': ItemViewer}, name: 'itemViewer' }
  ]}
]
