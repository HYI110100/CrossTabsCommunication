/*
 * @Author: shaohang-shy
 * @Date: 2022-08-22 11:03:18
 * @LastEditors: HYI110100 53818512+HYI110100@users.noreply.github.com
 * @LastEditTime: 2023-07-12 10:47:10
 * @Description: admin router
 */
import type { RouteRecord } from '~/typings/route'
import { BasicLayout } from '~/layouts'

const routes: RouteRecord[] = [
  {
    path: '/admin',
    name: 'Admin',
    component: BasicLayout,
    meta: {
      title: '跨Tab通信',
      roles: ['admin'],
    },
    children: [
      {
        path: '/admin/tab/index',
        name: 'AdminTabInex',
        component: () => import('~/pages/admin/tabIndex.vue'),
        meta: {
          title: '跨Tab通信',
          icon: 'baogao',
        },
      },
    ],
  },
  {
    path: '/broadCast/:id',
    name: 'BroadCast',
    component: () => import('~/pages/admin/BroadCast.vue'),
    hidden: true,
    meta: {
      title: 'BroadCastChannel',
      roles: ['admin'],
    },
  },
  {
    path: '/localStorage/:id',
    name: 'LocalStorage',
    component: () => import('~/pages/admin/LocalStorage.vue'),
    hidden: true,
    meta: {
      title: 'LocalStorage',
      roles: ['admin'],
    },
  },
  {
    path: '/sharedWorker/:id',
    name: 'SharedWorker',
    component: () => import('~/pages/admin/SharedWorker.vue'),
    hidden: true,
    meta: {
      title: 'SharedWorker',
      roles: ['admin'],
    },
  },
]

export default routes
