import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { useUserStore } from '../stores/user-store'

import AuthLayout from '../layouts/AuthLayout.vue'
import AppLayout from '../layouts/AppLayout.vue'

// import RouteViewComponent from '../layouts/RouterBypass.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/auth/login',
  },
  {
    path: '/auth',
    component: AuthLayout,
    children: [
      {
        name: 'login',
        path: 'login',
        component: () => import('../pages/auth/Login.vue'),
      },
      {
        name: 'signup',
        path: 'signup',
        component: () => import('../pages/auth/Signup.vue'),
      },
      {
        name: 'recover-password',
        path: 'recover-password',
        component: () => import('../pages/auth/RecoverPassword.vue'),
      },
      {
        name: 'recover-password-email',
        path: 'recover-password-email',
        component: () => import('../pages/auth/CheckTheEmail.vue'),
      },
      {
        path: '',
        redirect: { name: 'login' },
      },
    ],
  },
  {
    name: 'admin',
    path: '/admin',
    component: AppLayout,
    meta: { requiresAuth: true },
    redirect: { name: 'users' },
    children: [
      {
        name: 'dashboard',
        path: 'dashboard',
        component: () => import('../pages/admin/dashboard/Dashboard.vue'),
      },
      {
        name: 'settings',
        path: 'settings',
        component: () => import('../pages/settings/Settings.vue'),
      },
      // {
      //   name: 'preferences',
      //   path: 'preferences',
      //   component: () => import('../pages/preferences/Preferences.vue'),
      // },
      {
        name: 'users',
        path: 'users',
        component: () => import('../pages/users/UsersPage.vue'),
      },
      {
        name: 'projects',
        path: 'projects',
        component: () => import('../pages/projects/ProjectsPage.vue'),
      },
      {
        name: 'testingItem',
        path: 'testingItem',
        component: () => import('../pages/testing-items/TestingItemsPage.vue'),
      },
      // {
      //   name: 'payments',
      //   path: '/payments',
      //   component: RouteViewComponent,
      //   children: [
      //     {
      //       name: 'payment-methods',
      //       path: 'payment-methods',
      //       component: () => import('../pages/payments/PaymentsPage.vue'),
      //     },
      //     {
      //       name: 'billing',
      //       path: 'billing',
      //       component: () => import('../pages/billing/BillingPage.vue'),
      //     },
      //     {
      //       name: 'pricing-plans',
      //       path: 'pricing-plans',
      //       component: () => import('../pages/pricing-plans/PricingPlans.vue'),
      //     },
      //   ],
      // },
      // {
      //   name: 'faq',
      //   path: '/faq',
      //   component: () => import('../pages/faq/FaqPage.vue'),
      // },
    ],
  },
  {
    name: '404',
    path: '/404',
    component: () => import('../pages/404.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    // For some reason using documentation example doesn't scroll on page navigation.
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    } else {
      window.scrollTo(0, 0)
    }
  },
  routes,
})

// 路由守卫
router.beforeEach((to, from, next) => {
  const userStore = useUserStore()
  const isAuthenticated = userStore.isAuthenticated

  // 首次加载时，从 localStorage 恢复状态
  if (from.name === undefined && !isAuthenticated) {
    userStore.restoreAuth()
  }

  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)

  if (requiresAuth && !userStore.isAuthenticated) {
    // 如果页面需要认证但用户未登录，跳转到登录页
    next({ name: 'login' })
  } else if (to.path.startsWith('/auth') && userStore.isAuthenticated) {
    // 如果已登录用户访问认证页面（如登录页），跳转到用户管理页面
    next('/admin/users')
  } else {
    // 其他情况正常放行
    next()
  }
})

export default router
