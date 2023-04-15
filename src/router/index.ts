import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue';
import WathStream from '@/views/WathStream.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/watch',
      name: 'watch',
      component: WathStream
    }
  ]
})

export default router
