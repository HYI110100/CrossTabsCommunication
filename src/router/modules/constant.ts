/*
 * @Author: shaohang-shy
 * @Date: 2022-08-11 17:23:41
 * @LastEditors: HYI110100 53818512+HYI110100@users.noreply.github.com
 * @LastEditTime: 2023-07-12 09:11:46
 * @Description: constant
 */
import { BasicLayout } from '~/layouts'
import type { RouteRecord } from '~/typings/route'

const routes: RouteRecord[] = [
  {
    path: '/',
    component: BasicLayout,
    name: 'Dashboard',
    redirect: '/dashboard',
    meta: {
      title: '首页',
      icon: 'shouye',
    },
    children: [
      { path: '/profile', name: 'Profile', component: () => import('~/pages/user/profile.vue'), hidden: true, meta: { title: '个人中心' } },
      { path: '/dashboard', name: 'DashboardIndex', component: () => import('~/pages/dashboard/index.vue'), meta: { title: '主页', affix: true, icon: 'shouye', breadcrumb: false } },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('~/pages/login/index.vue'),
    hidden: true,
  },
  {
    path: '/404',
    name: '404',
    component: () => import ('~/pages/errorPage/404.vue'),
    hidden: true,
  },
  {
    path: '/403',
    name: '403',
    component: () => import ('~/pages/errorPage/403.vue'),
    hidden: true,
  },
]

export default routes
