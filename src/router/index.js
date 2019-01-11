import Vue from 'vue'
import Router from 'vue-router'
import myAccountRouter from './modules/myAccount'
import productRouter from './modules/product'

Vue.use(Router)

/* Layout */
import Layout from '@/views/layout/Layout'

export const constantRouterMap = [
  // { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  {
    path: '/login',
    component: Layout,
    children: [{
      path: '',
      component: () => import('@/views/login/index'),
      name: 'loginPage',
      meta: { title: '登录' }
    }]
  }, {
    path: '/forgetPwd',
    component: Layout,
    children: [{
      path: '',
      component: () => import('@/views/login/forgetPwd'),
      name: 'forgetPwdPage',
      meta: { title: '忘记密码' }
    }]
  }, {
    path: '/register',
    component: Layout,
    children: [{
      path: '',
      component: () => import('@/views/login/register'),
      name: 'registerPage',
      meta: { title: '注册' }
    }]
  }, {
    path: '/download',
    component: Layout,
    children: [{
      path: '',
      component: () => import('@/views/download/download'),
      name: 'download',
      meta: { title: '软件下载' }
    }]
  }, {
    path: '/dealDetail',
    component: Layout,
    children: [{
      path: '',
      component: () => import('@/views/login/dealDetail'),
      name: 'dealDetail',
      meta: { title: '日发金融合约明细' }
    }]
  },

  { path: '/authredirect', component: () => import('@/views/login/authredirect'), hidden: true },
  { path: '/404', component: () => import('@/views/errorPage/404'), hidden: true },
  { path: '/401', component: () => import('@/views/errorPage/401'), hidden: true },
  {
    path: '',
    component: Layout,
    redirect: 'index',
    children: [{
      path: 'index',
      component: () => import('@/views/indexPage/indexPage'),
      name: 'index',
      meta: { title: '个人中心' }
    }, {
      path: 'infoDisclosure',
      component: () => import('@/views/infoDisclosure/infoDisclosurePage'),
      name: 'infoDisclosure',
      meta: { title: '信息披露' }
    }, {
      path: 'safetyGuarantee',
      component: () => import('@/views/safetyGuarantee/safetyGuaranteePage'),
      name: 'safetyGuarantee',
      meta: { title: '安全保障' }
    }, {
      path: 'helpCenter',
      component: () => import('@/views/helpCenter/helpCenterPage'),
      name: 'helpCenter',
      meta: { title: '帮助中心' }
    }, {
      path: 'inviteFriend',
      component: () => import('@/views/inviteFriend/inviteFriendPage'),
      name: 'inviteFriend',
      meta: { title: '邀请好友' }
    }]
  }
]

const BaiscRouter = [
  {
    path: '/icon',
    component: Layout,
    children: [{
      path: 'index',
      component: () => import('@/views/svg-icons/index'),
      name: 'icons',
      meta: { title: 'icons', icon: 'icon', noCache: true }
    }]
  },

  {
    path: '/error',
    component: Layout,
    redirect: 'noredirect',
    hidden: true,
    name: 'errorPages',
    meta: {
      title: 'errorPages',
      icon: '404'
    },
    children: [
      {
        path: '401',
        component: () => import('@/views/errorPage/401'),
        name: 'page401',
        meta: { title: 'page401', noCache: true }
      },
      {
        path: '404',
        component: () => import('@/views/errorPage/404'),
        name: 'page404',
        meta: { title: 'page404', noCache: true }
      }
    ]
  },

  { path: '*', redirect: '/404', hidden: true }
]

export const asyncRouterMap = [
  ...myAccountRouter,
  ...productRouter,
  ...BaiscRouter
]

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap.concat(asyncRouterMap)
})
