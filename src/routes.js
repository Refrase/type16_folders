import home from 'routes/home'
import finder from 'routes/finder'
import mail from 'routes/mail'
import FinderWindow from 'components/Finder/Window'
import ItemViewer from 'components/ItemViewer'

export const routes = [
  { path: '/', component: home, name: 'home' },
  { path: '/documents', component: finder, name: 'finder', children: [
    { path: ':folderParentId?/:folderId', component: FinderWindow, name: 'finderWindow', children: [
      { path: ':itemId', component: ItemViewer, name: 'itemViewer' }
    ]}
  ]},
  { path: '/mail', component: mail, name: 'mail' }

]
