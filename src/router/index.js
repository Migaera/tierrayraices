import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '../views/Inicio.vue'
import Producto from '../views/ProductoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Inicio
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/blog',
      name: 'blog',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/BlogView.vue')
    },
    {
      path: '/tienda',
      name: 'tienda',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Tienda.vue')
    },
    {
      path: '/beneficios',
      name: 'beneficios',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/BeneficiosView.vue')
    },
    {
      path: '/producto/:id',
      name: 'producto',
      component: () => import('../views/ProductoView.vue') 
    },
    {
      path: '/entrada/:id',
      name: 'entrada',
      component: () => import('../views/EntradaView.vue') 
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue') 
    }
  ]
})

export default router
