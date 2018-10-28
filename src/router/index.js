import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/Homepage'
import Single from '@/components/Single'
import New from '@/components/new'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    }, 
    {
      path: '/new',
      name: 'New',
      component: New
    },
    {
      path:'/story/:id',
      name: 'Single',
      component: Single
    }
  ]
})
