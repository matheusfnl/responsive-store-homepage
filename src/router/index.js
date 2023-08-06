import { createRouter, createWebHashHistory } from 'vue-router'
import MainPage from '../views/MainPage.vue'
import TermsOfService from '../views/TermsOfService.vue'
import ProductsPage from '../views/ProductsPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainPage
  },
  {
    path: '/terms-of-service',
    name: 'terms-of-service',
    component: TermsOfService
  },
  {
    path: '/products',
    name: 'products',
    component: ProductsPage
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
