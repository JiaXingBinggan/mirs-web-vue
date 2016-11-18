import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// import { createListView } from '../views/CreateListView'
// import ItemView from '../views/ItemView.vue'
import UserView from '../views/UserView.vue'
import IndexView from '../views/IndexView.vue'

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/top/:page(\\d+)?', redirect: '/' },
    { path: '/new/:page(\\d+)?', redirect: '/' },
    { path: '/show/:page(\\d+)?', redirect: '/' },
    { path: '/ask/:page(\\d+)?', redirect: '/' },
    { path: '/job/:page(\\d+)?', redirect: '/' },
    { path: '/item/:id(\\d+)', redirect: '/' },
    { path: '/user/:id', component: UserView },
    { path: '/', component: IndexView }
  ]
})
