/**
 *  === routes ===
 *
 *  created at: <?= createdAt ?>
 */
import zola from 'zola'

export default zola.router({
  history: 'hashHistory',
  routes: [
    // ==== router start ==== //
    { path: '/', component: System.import('pages/index/index') },
    { path: '/index', component: System.import('pages/index/index') },
    { path: '/article/:path', component: System.import('pages/index/index') },
    // ==== router end   ==== //
    { path: '*', component: System.import('pages/error/404') },
  ]
})
