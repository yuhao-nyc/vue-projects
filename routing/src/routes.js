// import User from './components/user/User.vue'
import Home from './components/Home.vue'
import UserDetail from './components/user/UserDetail.vue'
import UserStart from './components/user/UserStart.vue'
import UserEdit from './components/user/UserEdit.vue'

const User = resolve => {
  require.ensure(['./components/user/UserDetail.vue'], () => {
    resolve(require('./components/user/UserDetail.vue'))
  }, 'user')
}
export const routes = [
  {
    path: '',
    component: Home,
    name: 'Home',
  },
  {
    path: '/user',
    component: User,
    children: [
      {
        path: '',
        component: UserStart
      },
      {
        path: ':id',
        component: UserDetail,
        beforeEnter: (to, from, next) => {
          next()
        }
      },
      {
        path: ':id/edit',
        component: UserEdit,
        name: 'userEdit'
      }
    ]
  },
  {
    path: '*',
    redirect: '/'
  }
]