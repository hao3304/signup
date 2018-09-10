import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import News from '@/views/News'
import Search from '@/views/Search'
import My from '@/views/My'
import Login from '@/views/Login'
import Register from '@/views/Register'
import Sign from '@/views/Sign'
import SignUp from '@/views/SignUp'
import Repair from '@/views/Repair'
import App from '../App'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/main/register',
      name: 'register',
      component: Register
    },
    {
      path: '/main/sign',
      name: 'sign',
      component: Sign
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp
    },
    {
      path: '/repair',
      name: 'repair',
      component: Repair
    },
    {
      path: '/app',
      component: App,
      children: [
        {
          path: '',
          name: 'home',
          component: Home
        },
        {
          path: 'news',
          name: 'news',
          component: News
        },
        {
          path: 'search',
          name: 'search',
          component: Search
        },
        {
          path: 'my',
          name: 'my',
          component: My
        }
      ]
    }
  ]
})
