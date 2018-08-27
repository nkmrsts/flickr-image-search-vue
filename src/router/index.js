import Vue from 'vue'
import Router from 'vue-router'
import Search from '@/views/Search'
import Detail from '@/views/Detail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Search',
      component: Search
    },
    {
      path: '/detail?:id',
      name: 'Detail',
      component: Detail,
      props: true
    }
  ]
})
