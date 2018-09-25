import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Resume from '@/components/Resume'
import Contact from '@/components/Contact'
import Projects from '@/components/Projects'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Resume',
      component: Resume
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/project',
      name: 'Projects',
      component: Projects
    }
  ]
})
