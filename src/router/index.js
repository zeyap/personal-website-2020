import Vue from 'vue'
import Router from 'vue-router'
import Projects from '@/components/Projects'
import Project from '@/components/Project'

Vue.use(Router)

const titlePrefix = "Zeya Peng"

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Projects',
      component: Projects,
      meta: {
          title: titlePrefix
      }
    },
    {
      path: '/project',
      name: 'Project',
      component: Project,
      meta: {
          title: titlePrefix
      }
    },
  ]
})
