import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Login from '@/views/login/Login.vue'
import Success from '@/views/login/Success.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/success',
      name: 'success',
      component: Success
    }
  ]
})
