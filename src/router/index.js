import Vue from 'vue'
import Router from 'vue-router'
import Projects from '@/components/Projects'

Vue.use(Router)

const titlePrefix = "Zeya Peng | "

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Projects',
      component: Projects,
      meta: {
          title: titlePrefix + 'Projects'
      }
    },
    {
      path: '/project',
      name: 'Projects',
      component: Projects,
      meta: {
          title: titlePrefix + 'Projects'
      }
    }
  ]
})
