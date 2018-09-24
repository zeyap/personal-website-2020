import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/resume',
      name: 'Resume',
      component: HelloWorld
    },
    {
      path: '/projects',
      name: 'Projects',
      component: HelloWorld
    }
  ]
})
