import Vue from 'vue'
import Router from 'vue-router'
import Resume from '@/components/Resume'
import Contact from '@/components/Contact'
import Projects from '@/components/Projects'

Vue.use(Router)

const titlePrefix = "Zeya Peng | "

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Resume',
      component: Resume,
      meta: {
          title: titlePrefix + 'Resume'
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
      path: '/contact',
      name: 'Contact',
      component: Contact,
      meta: {
          title: titlePrefix + 'Contact'
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
