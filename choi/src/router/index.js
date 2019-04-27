import Vue from 'vue'
import Router from 'vue-router'

import Portfolio from '../views/Portfolio'
import Skills from '../views/Skills'
import MainComponent from '../components/Main'
import About from '../views/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: MainComponent
    },
    {
      path: '/photofolio',
      name: 'Port',
      component: Portfolio
    },
    {
      path: '/skills',
      name: 'Skills',
      component: Skills
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
