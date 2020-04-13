import { RouteConfig } from 'vue-router'
import Layout from '@/layout/index.vue'

const sensorControlRoutes: RouteConfig = {
  path: '/control',
  component: Layout,
  redirect: '/control/control-table',
  name: 'Table',
  meta: {
    title: 'sensorControl',
    icon: 'table'
  },
  children: [
    {
      path: 'control-table',
      component: () => import(/* webpackChunkName: "complex-table" */ '@/views/sensor-control/complex-table.vue'),
      name: 'controlTable',
      meta: {
        title: 'controlTable',
        icon: 'table'
      }
    }
  ]
}

export default sensorControlRoutes
