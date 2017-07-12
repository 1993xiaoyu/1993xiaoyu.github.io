import Index     from '../list/index'
import Article   from '../article/index'
import ErrorPage from '../error/404'

const routes =
  [
    {
      path: '/',
      component: Index,
      title: '首页'
    },
    {
      path: '/index',
      component: Index,
      title: '首页'
    },
    {
      path: '/article/:path',
      component: Article,
      title: '文章详情'
    },
    {
      path: '*',
      component: ErrorPage,
      title: '404'
    },
  ]

export default routes
