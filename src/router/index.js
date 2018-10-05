import Vue from 'vue'
import Router from 'vue-router'
import Resume from '@/components/Resume'
import About from '@/components/About'
import Projects from '@/components/Projects'

Vue.use(Router)

const titlePrefix = "Zeya Peng | "

export default new Router({
  routes: [
    {
      path: '/',
      name: 'About',
      component: About,
      meta: {
          title: titlePrefix + 'About'
      }
    },
    {
      path: '/resume',
      name: 'Resume',
      component: Resume,
      meta: {
          title: titlePrefix + 'Resume'
      }
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      meta: {
          title: titlePrefix + 'About'
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
