import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "about" */ './views/Home.vue')

    },
    {
      path: '/movie',
      name: 'movie',
      component: () => import(/* webpackChunkName: "about" */ './views/Movie.vue')

    }

  ]
})
