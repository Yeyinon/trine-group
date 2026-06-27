import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Services from '../views/Services.vue'
import Products from '../views/Products.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/services',
    name: 'services',
    component: Services
  },
  {
    path: '/products',
    name: 'products',
    component: Products
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router