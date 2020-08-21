import Vue from 'vue'
import VueRouter from 'vue-router'
import Categorias from '../views/Categorias.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Categorias',
    component: Categorias
  },
  {
    path: '/Productos',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
