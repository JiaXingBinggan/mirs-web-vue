import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// import { createListView } from '../views/CreateListView'
// import ItemView from '../views/ItemView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import UserView from '../views/UserView.vue'
import IndexView from '../views/IndexView.vue'
import AccountsView from '../views/AccountsView.vue'
import NewView from '../views/NewView.vue'
import HotView from '../views/HotView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import MovieView from '../views/MovieView.vue'

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/', component: IndexView },
    { path: '/accounts', component: AccountsView },
    { path: '/new', component: NewView },
    { path: '/hot', component: HotView },
    { path: '/login', component: LoginView },
    { path: '/register', component: RegisterView },
    { path: '/user/:id', component: UserView },
    { path: '/movie/:id', component: MovieView },
    { path: '/*', component: NotFoundView }
  ]
})
