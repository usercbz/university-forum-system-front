import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = {
  mode: 'history',
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: '/home',
      redirect: "/home/index",
      component: () => import('@/views/home'),
      children: [
        {
          path: 'index',
          component: () => import('@/components/home/HomePage.vue')
        },
        {
          path: 'follow',
          component: () => import('@/components/home/FollowPage.vue')
        },
        {
          path: 'info',
          component: () => import('@/components/home/BulletinInfo.vue')
        },
        {
          path: 'user',
          redirect: '/home/user/article',
          component: () => import('@/components/user'),
          children: [
            {
              path: 'article',
              component: () => import('@/components/user/ArticleList.vue')
            },
            {
              path: 'follow',
              component: () => import('@/components/user/FollowList.vue')
            },
            {
              path: 'collect',
              component: () => import('@/components/user/CollectList.vue')
            }
          ]
        },
        {
          path: 'search',
          component: () => import('@/components/search')
        }
      ]
    },
    {
      path: '/publish',
      component: () => import('@/views/publish')
    },
    {
      path: '/articleDetail',
      component: () => import('@/views/articleDetail')
    },
    {
      path: '/login',
      component: () => import('@/views/login')
    },
    {
      path: '/register',
      component: () => import('@/views/register')
    },
    {
      path:'/retrieve',
      component:()=>import('@/views/retrieve')
    },
    {
      path: '/404',
      component: () => import('@/views/404')
    },
    {
      path: '/test',
      component: () => import('@/components/TestMain.vue')
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
}
const router = new VueRouter(
  routes
)
// 获取原型对象push函数
const originalPush = VueRouter.prototype.push

// 获取原型对象replace函数
const originalReplace = VueRouter.prototype.replace

// 修改原型对象中的push函数
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

// 修改原型对象中的replace函数
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err)
}

export default router
