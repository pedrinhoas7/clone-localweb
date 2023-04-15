import { createRouter, createWebHistory, type NavigationGuard } from 'vue-router'
import LoginView from '../views/LoginView.vue';
import WathStream from '@/views/WathStream.vue';
import PlansView from '@/views/PlansView.vue';
import vm from '@/views/MainViewModel';

const adminNavigationGuard: NavigationGuard = (to, from, next) => vm.user != null ? next() : next({ name: 'login' })

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'plans',
      component: PlansView
    },
    {
      path: '/login',
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
