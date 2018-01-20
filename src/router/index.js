import Vue from 'vue'
import Router from 'vue-router'

const index = () => import('@/components/index')
const category = () => import('@/components/category/index')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
     {
      path: '/category',
      name: 'category',
      component: category
    }
  ]
})
