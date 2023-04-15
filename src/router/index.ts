import { createRouter, createWebHistory, type NavigationGuard } from 'vue-router'

import LoginView from '../views/LoginView.vue';
import WathStream from '@/views/WathStream.vue';
import PlansView from '@/views/PlansView.vue';
import vm from '@/views/MainViewModel';
const requireAuth: NavigationGuard = (to, from, next) => {
  console.log(vm.getUser())
  if (vm.getUser() == null && to.name == 'watch') {
    console.log(vm.getUser())
    next({ name: 'login' });
  }else{
    next()
  }
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'plans',
      component: PlansView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/watch',
      name: 'watch',
      component: WathStream,
      beforeEnter: requireAuth
    }
  ]
})


export default router
