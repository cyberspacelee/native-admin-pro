import type { RouteRecordRaw } from 'vue-router'

const staticRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('~/pages/index.vue'),
    name: 'index',
  },
  {
    path: '/workspace',
    component: () => import('~/pages/workspace/index.vue'),
    name: 'workspace',
  },
]

export default staticRoutes
